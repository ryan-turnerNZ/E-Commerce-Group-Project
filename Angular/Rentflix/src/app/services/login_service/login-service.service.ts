import {Injectable, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService{

  constructor(private http: HttpClient) {

  }

  async authenticateLogin(username, password) {
    this.http.get('https://dashboard.heroku.com/apps/rent-flix/');
  }
}
