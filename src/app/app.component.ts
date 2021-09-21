import { Component } from '@angular/core';
import { SocialAuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend'; //aparece al inicio de secion

  public user: SocialUser | undefined;
  public loggedIn: boolean = false;// Contiene verdadero si el usuario inciio sesion

  constructor(private authService: SocialAuthService) {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }//fin del constructor

  signInWithGoogle(): void{
    console.log("google");
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.title="Lista de empleados";
  }

  signInWithFacebook():void{
    console.log("Facebook");
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    this.title="Lista de empleados";
  }

  signOut():void{
    console.log('Salir');
    this.authService.signOut();
    this.title="Iniciar Sesión";

  }
}
