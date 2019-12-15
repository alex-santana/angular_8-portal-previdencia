import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styles: []
})
export class ParticipantComponent implements OnInit {

  idParticipante:any;
  constructor(private router: ActivatedRoute, private dashboardService: DashboardService)
  {
    
  }

  ngOnInit() {
    console.log(this.router.params);
   this.router.params.subscribe(
     (param)=> 
     {
       this.idParticipante = param['id'];
       console.log(this.idParticipante.uid);
       this.dashboardService.isFirstLoad.emit(false);
       
    }
     
   );
  }

}
