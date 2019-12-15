import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { SecureInnerPagesGuard } from 'src/app/guards/secure-inner-pages.guard';
import { ParticipantComponent } from './participant/participant.component';
import { BalanceComponent } from './balance/balance.component';
import { ExtractComponent } from './extract/extract.component';
import { ProfitabilityComponent } from './profitability/profitability.component';
import { LoanComponent } from './loan/loan.component';
import { AuthGuard } from 'src/app/guards/auth.guard';


const dashboardRoutes: Routes = [
  {path:'', component:DashboardComponent ,canActivate:[AuthGuard],  canLoad:[AuthGuard], children:[
    {path:'participante', component:ParticipantComponent},
    {path:'saldo', component:BalanceComponent},
    {path:'extrato', component:ExtractComponent},
    {path:'rentabilidade',component:ProfitabilityComponent},
    {path:'emprestimo', component:LoanComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(dashboardRoutes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
