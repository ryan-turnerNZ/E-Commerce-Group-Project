import {Component} from '@angular/core';
import {LoginService} from './services/login-service/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Rentflix';
  constructor(private loginService: LoginService, private router: Router) {}

  loginStatus() {
    return this.loginService.isAuthenticated();
  }

  logout() {
    console.log('logingoust');
    this.loginService.logout().then(res => {
      res.subscribe((data) => {
        const {valid, message, error} = (data as {valid, message, error});
        if (valid === true) {
          this.loginService.setUserToken('');
          this.loginService.setAuth(false);
          this.router.navigate(['/home']);
        } else {
          console.log(error);
        }
      });
    });
  }


}
