import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ParticipantComponent } from './participant/participant.component';
import { BalanceComponent } from './balance/balance.component';
import { ExtractComponent } from './extract/extract.component';
import { ProfitabilityComponent } from './profitability/profitability.component';
import { DashboardComponent } from './dashboard.component';
import { DashboardService } from './dashboard.service';
import { LoanComponent } from './loan/loan.component';
import { AuthenticationService } from 'src/app/shared/authentication.service';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [DashboardComponent, ParticipantComponent, BalanceComponent, ExtractComponent, ProfitabilityComponent, LoanComponent, ProfileComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  //exports:[DashboardComponent]
  providers:[DashboardService, AuthenticationService]
})
export class DashboardModule { }
