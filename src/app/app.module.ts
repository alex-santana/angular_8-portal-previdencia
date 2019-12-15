import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';
import { BsDropdownModule } from 'ngx-bootstrap';
import { TabsModule } from 'ngx-bootstrap';
import { AuthenticationComponent } from './authentication/authentication.component';
//import { AngularFireAuthModule } from '@angular/fire/auth';
import { AdhesionComponent } from './plan/adhesion/adhesion.component';
import { ParticipantFormComponent } from './restricted/participant-form/participant-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//import { AuthenticationService } from './shared/authentication.service';
//import { DashboardModule } from './restricted/dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
    //HomeComponent,
    AuthenticationComponent,
    AdhesionComponent,
    ParticipantFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    BsDropdownModule,
    TabsModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
    //FormsModule,

    //DashboardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
