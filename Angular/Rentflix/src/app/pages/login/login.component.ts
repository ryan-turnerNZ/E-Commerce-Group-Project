import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../../services/login-service/login.service';
import {Router} from '@angular/router';

import {AuthService, SocialUser} from 'angularx-social-login';
import { FacebookLoginProvider, GoogleLoginProvider } from 'angularx-social-login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private user: SocialUser;
  private loggedIn: boolean;
  loginForm: FormGroup;
  private isSubmitted = false;
  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private router: Router, private authService: AuthService) {
    this.loginForm = formBuilder.group({
      username: ['', Validators.required] ,
      password: ['', Validators.required],
    });
  }
  get formControls() { return this.loginForm.controls; }
  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }


  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(res => {
      this.loginService.registerGoogleUser(res.email, res.firstName, res.authToken).then(response => {
        response.subscribe(data => {
          const isOk = data as {valid, message};
          if (isOk.valid) {
            this.loginService.setUserToken(isOk.message);
            this.loginService.setAuth(true);
            this.loginService.startTimer();
            this.router.navigate(['/home']);
          }
        });
      });
    });
  }
  signOut(): void {
    this.authService.signOut();
  }
  onLogin(value: {username: string, password: string}) {
    this.isSubmitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.loginService.getAuthentication(value.username, value.password).then(res => {
      res.subscribe((data) => {
        const response = (data as {valid: boolean, message: string});
        if (response.valid === true) {
          this.loginService.setUserToken(response.message);
          this.loginService.setAuth(true);
          this.loginService.startTimer();
          this.router.navigate(['/home']);
        } else {
          console.log('Invalid Login');
          this.loginForm.controls.username.setErrors({invalid: true});
        }
      });
    });

  }
}
