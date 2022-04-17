import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "@core/services/auth.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  form = this.fb.group({
    fullName: [null, Validators.required],
    email:    [null, [Validators.required, Validators.email]],
    password: [null, Validators.required]
  })


  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
  }

  onSignUp(): void {
    if (this.form.invalid) return;

    const { fullName, email, password } = this.form.value;
    this.authService.signUp(fullName, email, password);
  }
}
