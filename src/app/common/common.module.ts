import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonRoutingModule } from './common-routing.module';
import { AdhesionComponent } from './adhesion/adhesion.component';
import { HomeComponent } from '../home/home.component';
import { SharedModule } from '../shared/shared.module';
import { BeneficioComponent } from './beneficio/beneficio.component';
import { InstitutosComponent } from './institutos/institutos.component';
import { SimuladoresComponent } from './simuladores/simuladores.component';
import { ContribuicaoComponent } from './contribuicao/contribuicao.component';


@NgModule({
  declarations: [AdhesionComponent, HomeComponent, BeneficioComponent, InstitutosComponent, SimuladoresComponent, ContribuicaoComponent],
  imports: [
    CommonModule,
    CommonRoutingModule,
    SharedModule
  ]
})
export class CommonAreaModule { }
