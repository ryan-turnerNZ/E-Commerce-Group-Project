import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {LoginService} from '../../services/login-service/login.service';

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
    this.loginService.getAuthentication(value.username, value.password).then(res => {
      res.subscribe(data => {
        console.log(data);
        if (data > 0) {
          console.log('Logging in');
        } else {
          console.log('Invalid Login');
        }
      });
    });
  }
}
