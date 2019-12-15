import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AdhesionComponent } from './adhesion/adhesion.component';
import { BeneficioComponent } from './beneficio/beneficio.component';
import { ContribuicaoComponent } from './contribuicao/contribuicao.component';
import { InstitutosComponent } from './institutos/institutos.component';
import { SimuladoresComponent } from './simuladores/simuladores.component';


const routes: Routes = [
  {path:'', component:HomeComponent, children:[
    {path:'adesao', component: AdhesionComponent},
    {path:'beneficio', component: BeneficioComponent},
    {path:'contribuicao', component: ContribuicaoComponent},
    {path:'institutos', component: InstitutosComponent},
    {path:'simuladores', component: SimuladoresComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommonRoutingModule { }
