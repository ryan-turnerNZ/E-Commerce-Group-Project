import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    username: '',
    plainTextPass: '',
    'X-Requested-With': '',
  })
};

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  private userToken = '';
  private auth = false;
  private serverlink = 'http://rent-flix-api.herokuapp.com';
  constructor(private http: HttpClient) {

  }

  async getAuthentication(username, password) {
    httpOptions.headers =
      httpOptions.headers.set('username', username);
    httpOptions.headers =
      httpOptions.headers.set('plainTextPass', password);
    return this.http.get(`${this.serverlink}/user/authentication`, httpOptions);
  }

  async logout() {
    httpOptions.headers =
      httpOptions.headers.set('X-Requested-With', this.getUserToken());
    return this.http.delete(`${this.serverlink}/user/authentication`, httpOptions);
  }
  setUserToken(token: string) {
    this.userToken = token;
  }

  getUserToken(): string {
    return this.userToken;
  }

  isAuthenticated() {
    return this.auth;
  }
  setAuth(auth) {
    this.auth = auth;
  }
}
