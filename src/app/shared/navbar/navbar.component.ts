import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [`.bd-navbar {
    min-height: 4rem;
    background-color: #c363fb;
    box-shadow: 0 0.5rem 1rem rgba(0,0,0,.05), inset 0 -1px 0 rgba(0,0,0,.1);
  }`]
})
export class NavbarComponent implements OnInit {
  isLogged:boolean = false;

  constructor(private authService: AuthenticationService) { }
  showMenuRestrict: boolean = false;
  subscription: Subscription;

  ngOnInit() {
    this.isLogged = this.authService.isLoggedIn;
    console.log(this.isLogged);

    this.subscription = this.authService.showMenuRestrictEmitter.subscribe(
        (showMenu) => this.showMenuRestrict = showMenu
      );
    

  }

  ngOnDestroy()
  {
     this.subscription.unsubscribe();
  }

}
