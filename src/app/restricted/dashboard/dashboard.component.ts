import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Dashboard } from './dashboard';
import { DashboardService } from './dashboard.service';
import { AuthenticationService } from 'src/app/shared/authentication.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']

})
export class DashboardComponent implements OnInit {

  // itens: any[] = [{Name: "Participante", Description:"", Link:"",  Image: "https://image.flaticon.com/icons/svg/149/149452.svg"},
  //                 {Name: "Saldo",Description:"" , Link:"", Image: "https://image.flaticon.com/icons/svg/784/784722.svg"},
  //                 {Name: "Extrato",Description:"" , Link:"", Image: "https://image.flaticon.com/icons/svg/2237/2237788.svg"},
  //                 {Name: "Rentabilidade",Description:"" , Link:"", Image: "https://image.flaticon.com/icons/svg/547/547166.svg"},
  //                 {Name: "Emprestimo",Description:"" , Link:"", Image: "https://image.flaticon.com/icons/svg/1639/1639770.svg"},
  //               ];

  itens: Dashboard[];
  idParticipante: any;
  
  subscription: Subscription;
  constructor(private dashboardService: DashboardService, private authService: AuthenticationService) {
    

    
   }

  ngOnInit() {
    this.itens = this.dashboardService.getModulesPermission();
    this.idParticipante = this.authService.userData? this.authService.userData.uid: null;
    //this.dashboardService.isFirstLoad.emit(true);
   
  }

  ngOnDestroy()
  {
      this.subscription.unsubscribe();
  }

}
