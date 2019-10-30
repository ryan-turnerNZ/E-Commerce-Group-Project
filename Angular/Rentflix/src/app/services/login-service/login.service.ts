import {Injectable, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private userToken = '';

  constructor(private http: HttpClient) {

  }

  async getAuthentication(username, password) {
    return this.http.get('http://rent-flix-api.herokuapp.com/user/' + username + '/' + password);
  }

  setLoggedInUser(token: string) {
    this.userToken = token;
  }

  getLoggedInUser(): string {
    return this.userToken;
  }
}
