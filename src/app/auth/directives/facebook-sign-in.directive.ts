import { Directive, HostListener } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { FacebookAuthProvider } from "firebase/auth";

@Directive({
  selector: '[appFacebookSignIn]'
})
export class FacebookSignInDirective {

  constructor(
    private afAuth: AngularFireAuth
  ) {}

  @HostListener('click') onClick(): void {
    this.afAuth.signInWithPopup(new FacebookAuthProvider().addScope('user_birthday'));
  }
}
