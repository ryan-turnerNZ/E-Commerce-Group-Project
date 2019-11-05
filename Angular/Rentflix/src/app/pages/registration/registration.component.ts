import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../../services/login-service/login.service';
import {Router} from '@angular/router';

export function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    if (matchingControl.errors && !matchingControl.errors.mustMatch) {
      // return if another validator has already found an error on the matchingControl
      return;
    }

    // set error on matchingControl if validation fails
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ mustMatch: true });
    } else {
      matchingControl.setErrors(null);
    }
  };
}
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private router: Router) {
    this.registerForm = formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6), Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]],
      confirmPassword: ['', Validators.required],
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }
  get f() { return this.registerForm.controls; }
  ngOnInit() {
  }
  public onRegister(value: {email: string, username: string, password: string}) {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    console.log(value.username + ' ' + value.password);
    this.loginService.registerUser(value.email, value.username, value.password).then(res => {
      res.subscribe(data => {
        const response = (data as {valid: boolean, message: string});
        if (response.valid === true) {
          this.router.navigate(['/login']);
        } else {
          console.log(data);
        }
      });
    });

  }
  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

}
