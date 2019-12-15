import { Injectable, EventEmitter } from '@angular/core';
import { Dashboard } from './dashboard';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private modulesPermission: Dashboard[];
  isFirstLoad = new EventEmitter<boolean>();
  constructor() {
    this.modulesPermission = [{Name: "Participante", Description:"", Link:"",  Image: "https://image.flaticon.com/icons/svg/149/149452.svg"},
    {Name: "Saldo",Description:"" , Link:"", Image: "https://image.flaticon.com/icons/svg/784/784722.svg"},
    {Name: "Extrato",Description:"" , Link:"", Image: "https://image.flaticon.com/icons/svg/2237/2237788.svg"},
    {Name: "Rentabilidade",Description:"" , Link:"", Image: "https://image.flaticon.com/icons/svg/547/547166.svg"},
    {Name: "Emprestimo",Description:"" , Link:"", Image: "https://image.flaticon.com/icons/svg/1639/1639770.svg"},
  ];
  }

  getModulesPermission(){
    return this.modulesPermission;
  }
}
