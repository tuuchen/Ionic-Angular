/* Tuukka Tihekari 1800576 01.05.2020 */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './../../services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss']
})
export class RegisterPage implements OnInit {
  constructor(
    public authService: AuthenticationService,
    public router: Router
  ) {}

  ngOnInit() {}

  // Register new user
  signUp(email, password) {
    this.authService
      .RegisterUser(email.value, password.value)
      .then(res => {
        this.authService.SendVerificationMail();
        // this.router.navigate(['']);
      })
      .catch(error => {
        window.alert(error.message);
      });
  }
}
