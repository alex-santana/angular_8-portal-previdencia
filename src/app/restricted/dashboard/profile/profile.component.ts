import { Component, OnInit, Input } from '@angular/core';
import { AuthenticationService } from 'src/app/shared/authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {

  constructor( public authService: AuthenticationService) { }
  @Input() id: string
  ngOnInit() {
    console.log(`Profile id: ${this.id}`);
  }

}
