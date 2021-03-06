import {Component} from '@angular/core';
import {LoginService} from './services/login-service/login.service';
import {Router} from '@angular/router';
import {Observable, fromEvent} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Rentflix';
  constructor(private loginService: LoginService, private router: Router) {
    const clicks$ = fromEvent(document, 'click');
    clicks$.subscribe(x => {
      if (this.loginService.getTimer() != null) {
        this.loginService.resetTimer();
      }}
    );
  }


  loginStatus() {
    return this.loginService.isAuthenticated();
  }

  logout() {
    console.log('logingoust');
    this.loginService.logout().then(res => {
      res.subscribe((data) => {
        const response = (data as {valid: boolean, message: any});
        if (response.valid === true) {
          this.loginService.setUserToken('');
          this.loginService.setAuth(false);
          this.loginService.stopTimer();
          this.router.navigate(['/home']);
        } else {
          console.log(response.message);
        }
      });
    });
  }


}
