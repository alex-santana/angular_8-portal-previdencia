import { Injectable } from '@angular/core';
import { BsModalService, ModalModule } from 'ngx-bootstrap';
import { AlertComponent } from './alert/alert.component';
import { ModalComponent } from './modal/modal.component';

enum Type{
  Success = 'success',
  Info = 'info',
  Danger = 'danger',
  Warning = 'warning'
}

@Injectable({
  providedIn: 'root'
})
export class BootstrapService {

  constructor(private modalService: BsModalService) { 

  }
  alertSuccess(message){
    this.showAlert(message, Type.Success)
  }

  alertInfo(message){
    this.showAlert(message, Type.Info)
  }

  alertDanger(message){
    this.showAlert(message, Type.Danger)
  }

  alertWarning(message){
    this.showAlert(message, Type.Warning)
  }

  private showAlert(message , type){
    let bsModalService = this.modalService.show(AlertComponent);
    bsModalService.content.type = type;
    bsModalService.content.message = message;

    // setTimeout(() => {
    //   bsModalService.hide();
    // }, 2000);
  }


  showModal(title: string, message : string, cssClass:string){
    let bsModalService = this.modalService.show(ModalComponent);
    bsModalService.content.title = title;
    bsModalService.content.message = message;
    bsModalService.setClass(cssClass);

    
  }
}
