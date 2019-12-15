import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule, BsDropdownModule } from 'ngx-bootstrap';
import { CarouselModule } from 'ngx-bootstrap'
import { AlertComponent } from './bootstrap/alert/alert.component';
import { BootstrapService } from './bootstrap/bootstrap.service';
import { ModalComponent } from './bootstrap/modal/modal.component';
import { AuthenticationService } from './authentication.service';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { BannerComponent } from './banner/banner.component';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { FieldControlErrorComponent } from './field-control-error/field-control-error.component';
import { DropdownService } from './services/dropdown.service';
import { ConsultaCepService } from './services/consulta-cep.service';



@NgModule({
  declarations: [AlertComponent, ModalComponent, NavbarComponent, FooterComponent, ContentComponent, BannerComponent, FormDebugComponent, FieldControlErrorComponent],
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    CarouselModule.forRoot(),
    BsDropdownModule.forRoot(),
    RouterModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  exports:[AlertComponent, ModalComponent,NavbarComponent, FooterComponent, ContentComponent,BannerComponent, FormDebugComponent, FieldControlErrorComponent],
  providers:[BootstrapService, AuthenticationService, DropdownService, ConsultaCepService],
  entryComponents:[AlertComponent, ModalComponent]
})
export class SharedModule { }
