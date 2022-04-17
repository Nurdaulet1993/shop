import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { takeWhile } from "rxjs";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import * as firebaseAuth from 'firebase/auth'
import { AuthService } from "@core/services/auth.service";
import { getAuth } from "firebase/auth";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit, OnDestroy {
  componentActive = true;
  user: firebaseAuth.UserInfo | null = null;

  form: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(4)]]
  })

  constructor(
    private afAuth: AngularFireAuth,
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    console.log(firebaseAuth.getRedirectResult(getAuth()));

    this.afAuth.authState
      .pipe(takeWhile(() => this.componentActive))
      .subscribe((user: firebaseAuth.UserInfo | null) => {
        this.user = user;
        // if (this.user !== null) {
        //   this.router.navigate(['/']);
        // }
      })
  }

  ngOnDestroy(): void {
    this.componentActive = false;
  }

  logout(): void {
    this.afAuth.signOut();
  }

  onSignIn(): void {
    console.log(this.form.value);
    const { email, password } = this.form.value;
    this.authService.signIn(email, password);
  }
}
