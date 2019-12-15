import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal/public_api';
import { BootstrapService } from '../shared/bootstrap/bootstrap.service';
import { BsDropdownConfig } from 'ngx-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: ['.text-purple {color: #6f42c1;}'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]
})
export class HomeComponent implements OnInit {

  isOpen: boolean = false;
  message: string = "";

  constructor(private bsService: BootstrapService) { }


  ngOnInit() {
  }

  alertSuccess()
  {
    this.message = 'Dados Gravados com sucesso';
    this.bsService.alertSuccess(this.message);
  }

  alertDanger()
  {
    this.message = 'Erro ao gravar as informações';
    this.bsService.alertDanger(this.message);
  }

  alertInfo()
  {
    this.message = 'Atualize suas informações';
    this.bsService.alertInfo(this.message);
  }

  alertWarning()
  {
    this.message = 'Atenção aos campos obrigatórios!';
    this.bsService.alertWarning(this.message);
  }

  showModal(){
    this.message = "Conteudo do modal via @Input Properties";
    this.bsService.showModal("Titulo via @Input Properties", this.message, 'gray modal-lg');
  }
}
