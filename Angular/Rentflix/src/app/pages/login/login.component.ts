import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private loginService: LoginService) {
    this.loginForm = formBuilder.group({
      username: '',
      password: '',
    });
  }

  ngOnInit() {
  }

  onLogin(value: {username: string, password: string}) {
    console.log(value);
  }
}
