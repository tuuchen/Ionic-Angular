/* Tuukka Tihekari 1800576 01.05.2020 */

import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  constructor(
    public authService: AuthenticationService,
    public router: Router
  ) {}

  ngOnInit() {}

  // Login
  logIn(email, password) {
    this.authService
      .SignIn(email.value, password.value)
      .then(res => {
        if (res.user.emailVerified) {
          this.authService.authenticationState.next(true);
          this.router.navigate(['menu', 'home']);
        } else {
          window.alert('Email is not verified');
          return false;
        }
      })
      .catch(error => {
        window.alert(error.message);
      });
  }
}
