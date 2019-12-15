import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../shared/authentication.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls:['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  constructor(public authenticationService: AuthenticationService) { }

  
  ngOnInit() {
  }

  SignIn(email:string, password:string){
    
    this.authenticationService.SignIn(email, password);
  }

  
  SignUp(email:string, password:string){
    
    this.authenticationService.SignUp(email, password);
    this.SendEmail(email);
  }

  SendEmail(email:string){
      this.authenticationService.SendEmail(email);
  }
  ValidateEmail(email:string){
    
  }
}
