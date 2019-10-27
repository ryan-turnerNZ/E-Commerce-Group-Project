import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {LoginService} from '../../services/login-service/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private router: Router) {
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
        /*const {val} = data;
        if (val.valid > 0) {
          this.loginService.setLoggedInUser(data.token);
          this.router.navigate(['/home']);
        } else {
          console.log('Invalid Login');
        }*/
        console.log(data);
      });
    });
  }
}
