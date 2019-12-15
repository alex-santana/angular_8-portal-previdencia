import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { AuthGuard } from './guards/auth.guard';
import { SecureInnerPagesGuard } from './guards/secure-inner-pages.guard';
import { DashboardComponent } from './restricted/dashboard/dashboard.component';
import { ParticipantFormComponent } from './restricted/participant-form/participant-form.component';



const routes: Routes = [
  {path:'' , redirectTo:"home", pathMatch:'full'},
  {path: 'dashboard' ,  loadChildren:'./restricted/dashboard/dashboard.module#DashboardModule'},
  {path:'home', loadChildren:'./common/common.module#CommonAreaModule'},
  {path:'cadastro-participante',component:ParticipantFormComponent },
  //{path:'home', component: HomeComponent},
  {path:'signin', component:AuthenticationComponent, canActivate:[SecureInnerPagesGuard]},
  //{path:'**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
