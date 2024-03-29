import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {AlertComponent} from '../../component/alert/alert.component';
import {Router} from '@angular/router';


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
  private serverlink = 'https://rent-flix-api.herokuapp.com';
  private timerExpired = false;
  private timer;
  private yes = true;


  constructor(private http: HttpClient, private matDialog: MatDialog, private router: Router) {
      this.timer = null;
  }

  async getAuthentication(username, password) {
    httpOptions.headers =
      httpOptions.headers.set('username', username);
    httpOptions.headers =
      httpOptions.headers.set('plainTextPass', password);
    return this.http.get(`${this.serverlink}/user/authentication`, httpOptions);
  }

  async registerUser(email, username, password) {
    return this.http.post(`${this.serverlink}/user`, {email, username, password}, httpOptions);
  }
  async registerGoogleUser(email, username, token) {
    const bool = true;
    return this.http.post(`${this.serverlink}/user`, {email, username, token, bool}, httpOptions);
  }
  async getAccountDetails(token: string) {
    httpOptions.headers =
      httpOptions.headers.set('X-Requested-With', token);
    return this.http.get(`${this.serverlink}/user/details`, httpOptions);
  }

  async logout() {
    httpOptions.headers =
      httpOptions.headers.set('X-Requested-With', this.getUserToken());
    return this.http.delete(`${this.serverlink}/user/authentication`, httpOptions);
  }
  stopTimer() {
    this.timerExpired = true;
    clearInterval(this.timer);
    this.timer = null;
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

  startTimer = () => {
    this.timer = setInterval(() => {
      if (this.timerExpired === true) {
        console.log('Logging out');
        this.stopTimer();
        this.openDialog();
      }
      this.timerExpired = true;
    }, 600000); // 10 minutes
  }
  getTimer = () => {
    return this.timer;
  }
  resetTimer = () => {
    this.timerExpired = false;
    this.timer = setInterval(() => {
      if (this.timerExpired === true) {
        console.log('Logging out');
        this.stopTimer();
        this.openDialog();

      }
      this.timerExpired = true;
    }, 600000); // 10 minutes

  }

  openDialog() {
    this.stopTimer();
    const dialogConfig = new MatDialogConfig();
    const dialogRef = this.matDialog.open(AlertComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(value => {
      console.log(`Dialog sent: ${value}`);
      this.logoutFunc();
    });

  }
   logoutFunc() {
    console.log('logingoust');
    this.logout().then(res => {
      res.subscribe((data) => {
        const response = (data as {valid: boolean, message: any});
        if (response.valid === true) {
          this.setUserToken('');
          this.setAuth(false);
          this.stopTimer();
          this.router.navigate(['/login']);
        } else {
          console.log(response.message);
        }
      });
    });
  }
}
