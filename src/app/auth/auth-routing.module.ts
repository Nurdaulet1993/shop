import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { SignInComponent } from "@app/auth/sign-in/sign-in.component";
import { SignUpComponent } from "@app/auth/sign-up/sign-up.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sign-in'
  },
  {
    path: 'sign-in',
    component: SignInComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
  static components = [SignInComponent, SignUpComponent];
}
