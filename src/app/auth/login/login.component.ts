import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthLocalService } from '../../../auth/auth-local.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isValidEmail: boolean = true
  isValidPassword: boolean = true;
  isLoginSuccessful: boolean = true;

  constructor(private authService: AuthLocalService, private router: Router) {

  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email, Validators.minLength(5)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    })
  }

  onSubmit() {
    if (this.loginForm.get('email').invalid) {
      this.isValidEmail = false;
    } else {
      this.isValidEmail = true;
    }
    if (this.loginForm.get('password').invalid) {
      this.isValidPassword = false;
    } else {
      this.isValidPassword = true;
    }
    const emailInput = this.loginForm.get('email').value;
    const passwordInput = this.loginForm.get('password').value;
    if (this.loginForm.valid) {
      this.authService.login(emailInput, passwordInput)
        .subscribe(successful => {
          this.router.navigate(['/todo'])
        },
          err => {
            this.isLoginSuccessful = false;
            console.log(err);
          })
    }
  }

}
