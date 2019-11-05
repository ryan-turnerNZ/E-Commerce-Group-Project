import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {LoginService} from '../../services/login-service/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registerForum: FormGroup;
  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private router: Router) {
    this.registerForum = formBuilder.group({
      email: '',
      username: '',
      password: '',
    });
  }

  ngOnInit() {
  }
  public onRegister(value: {email: string, username: string, password: string}) {
    console.log(value.username + ' ' + value.password);
    this.loginService.registerUser(value.email, value.username, value.password).then(res => {
      res.subscribe(data => {
        const response = (data as {valid: boolean, message: string})
        if (response.valid === true) {
          this.router.navigate(['/login']);
        } else {
          console.log(data);
        }
      });
    });

  }

}
