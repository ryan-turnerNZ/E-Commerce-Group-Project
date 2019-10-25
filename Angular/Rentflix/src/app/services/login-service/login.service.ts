import {Injectable, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loggedInUser = -1;

  constructor(private http: HttpClient) {

  }

  async getAuthentication(username, password) {
    return this.http.get('http://rent-flix-api.herokuapp.com/authenticateuser/' + username + '/' + password);
  }

  setLoggedInUser(userId: number) {
    this.loggedInUser = userId;
  }

  getLoggedInUser(): number {
    return this.loggedInUser;
  }
}
