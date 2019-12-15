import { Injectable,EventEmitter } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/auth';
import { BootstrapService } from './bootstrap/bootstrap.service';
import { Router } from '@angular/router';
//import { EventEmitter } from 'events';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
 userData: any; // User data var
 showMenuRestrictEmitter: EventEmitter<boolean> = new EventEmitter();

  constructor(public afAuth: AngularFireAuth,private bsService: BootstrapService, private router: Router) { 
     /* Saving user data as an object in localstorage if logged out than set to null */
     this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user; // Setting up user data in userData var
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
        
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));

      }
    })

  }

 get isLoggedIn():boolean
 {
   const user = JSON.parse(localStorage.getItem("user"));
   return (user!== null)?true:false;
 }

  // Sign up with email/password
  SignUp(email, password) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        //this.bsService.alertSuccess('Usuário registrado com sucesso.'),
        console.log(result.user)
      }).catch((error) => {
        this.bsService.alertDanger(error.message)
      })
  }

  // Sign in with email/password
  SignIn(email, password) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.showMenuRestrictEmitter.emit(true)
         this.router.navigate(['/dashboard' ]);
      }).catch((error) => {
        this.showMenuRestrictEmitter.emit(false)
        this.bsService.alertDanger(error.message)
      })
  }

  ResetEmail(email, password) {
    return this.afAuth.auth.sendPasswordResetEmail(email)
      .then((result) => {
        this.bsService.alertSuccess(`Enviado email de reset para ${email}`)
      }).catch((error) => {
        this.bsService.alertDanger(error.message)
      })
  }  
  SignOut() {
    return this.afAuth.auth.signOut().then(() => {
      localStorage.removeItem('user');

      this.bsService.alertSuccess('Logout feito com sucesso, você será redirecionado, aguarde!');
        setTimeout(() => {
          this.router.navigate(['signin']);
        }, 2200);
    })
  }

  SendEmail(email) {
    return this.afAuth.auth.currentUser.sendEmailVerification(email)
      .then((result) => {
         this.bsService.alertInfo('Pronto! Enviamos um email de verificação para você.');
      }).catch((error) => {
        this.bsService.alertDanger(error.message)
      })
  }


}
