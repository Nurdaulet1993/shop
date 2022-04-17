import { Directive, HostListener } from '@angular/core';
import { AuthService } from "@core/services/auth.service";

@Directive({
  selector: '[appGoogleSignIn]'
})
export class GoogleSignInDirective {

  constructor(
    private authService: AuthService
  ) {}

  @HostListener('click') onClick(): void {
    this.authService.googleAuth();
  }

}

