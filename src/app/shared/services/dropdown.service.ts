import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor(private httpClient: HttpClient) { }

  getEstadosBr(){
    return this.httpClient.get('assets/json/estados.json');
  }

  getCidadesBr(idEstado: number){
    return this.httpClient.get('assets/json/cidades.json')
                          .pipe(map((res: Response)=> res.json()));
  }
}
