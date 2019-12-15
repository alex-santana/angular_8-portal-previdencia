import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map} from 'rxjs/operators';
import { DropdownService } from 'src/app/shared/services/dropdown.service';
import { ConsultaCepService } from 'src/app/shared/services/consulta-cep.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-participant-form',
  templateUrl: './participant-form.component.html',
  styles: []
})
export class ParticipantFormComponent implements OnInit {

  form : FormGroup;
  //estados: models.common.Estados[]
  estados$ : Observable<models.common.Estados[]>

  constructor(private formBuilder: FormBuilder, private http: HttpClient, 
              private dropdownService: DropdownService, private searchCep : ConsultaCepService) { }

  ngOnInit() {

    //esta forma deixa possivelmente objeto na memoria, pode ocorrer memory leek
    //this.dropdownService.getEstadosBr().subscribe((data : models.common.Estados[]) => {this.estados = data; console.log(data)});
    
    //recebendo em um observable e usando o pipe async na template html
    this.estados$ = this.dropdownService.getEstadosBr();

    // Uma forma de criar o formulario
    // this.form = new FormGroup({
    //   nome: new FormControl(null),
    //   email: new FormControl('email@email.com')
    // });

    //Outra Forma de criar o formulario
    this.form = this.formBuilder.group({
        name:[null,[Validators.required, Validators.minLength(4), Validators.maxLength(150)]],
        email:[null, [Validators.required, Validators.email]],
        address:this.formBuilder.group({
          zipcode:[null,[Validators.required]],
          number:[null, [Validators.required]],
          street:[null,[Validators.required]],
          complement:[null],
          district:[null,[Validators.required]],
          city:[null,[Validators.required]],
          state:[null,[Validators.required]]
        })

      }
    );

  }

  onSubmit(){
    console.log(this.form);
    if(this.form.valid){
    this.http.post('https://httpbin.org/post', JSON.stringify(this.form.value)).pipe(
      map((res: Response)=>res.json())
    ).subscribe(info => {
      console.log(info); 
      this.resetform()
    },
    (error:any)=> console.log('erro'));
  }else{
    console.log("formulario inválido");
    this.verifierValidationForm(this.form)
  }

  }

  verifierValidationForm(formGroup: FormGroup)
  {
    Object.keys(formGroup.controls).forEach(field=> {
      console.log(field);
      const control = formGroup.get(field);
      control.markAsDirty();
      if(control instanceof FormGroup){
        this.verifierValidationForm(control);
      }
    });
  }
  resetform(){
    this.form.reset();
  }

  checkValidTouched(field:string)
  {
    return !this.form.get(field).valid && (this.form.get(field).touched || this.form.get(field).dirty) ;
  }
  addCssError(field:string)
  {
    console.log(this.checkValidTouched(field));
    return { 
      'border border-danger': this.checkValidTouched(field)
    }
  }

  searchZipCode()
  {
    let zipcode = this.form.get('address.zipcode').value;
    if (zipcode !== null && zipcode !== '') {
      this.searchCep.GetAddressByZipCode(zipcode).pipe(
        map((result : Response) => result)).subscribe(data=> this.FillAddress(data));
    }

  }

  FillAddress(data)
  {
    console.log(data);
    this.form.patchValue(
      {
        address:{
          street:data.logradouro,
          complement:data.complemento,
          district:data.bairro,
          city:data.localidade,
          state:data.uf
        }
      }
    );
    
  }

  resetAddress()
  {
    this.form.patchValue(
      {
        address:{
          street:null,
          complement:null,
          district:null,
          city:null,
          state:null
        }
      }
    );
    
  }

}
