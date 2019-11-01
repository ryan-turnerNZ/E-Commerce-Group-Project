import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    username: '',
    plainTextPass: '',
  })
};

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  private userToken = '';

  constructor(private http: HttpClient) {

  }

  async getAuthentication(username, password) {
    httpOptions.headers =
      httpOptions.headers.set('username', username);
    httpOptions.headers =
      httpOptions.headers.set('plainTextPass', password);
    return this.http.get('http://rent-flix-api.herokuapp.com/user', httpOptions);
  }

  setUserToken(token: string) {
    this.userToken = token;
  }

  getUserToken(): string {
    return this.userToken;
  }

  isAuthenticated() {
    return false;
  }
}
