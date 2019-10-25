import {Injectable, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService{

  constructor(private http: HttpClient) {

  }

  async authenticateLogin(username, password) {
    this.http.get('https://dashboard.heroku.com/apps/rent-flix/username/password').subscribe(data => {
      console.log(data);
    });
  }
}
