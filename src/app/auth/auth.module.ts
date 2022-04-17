import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "@shared/shared.module";
import { AuthRoutingModule } from "@app/auth/auth-routing.module";
import { GoogleSignInDirective } from './directives/google-sign-in.directive';
import { FacebookSignInDirective } from './directives/facebook-sign-in.directive';

@NgModule({
  declarations: [
    AuthRoutingModule.components,
    GoogleSignInDirective,
    FacebookSignInDirective,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
