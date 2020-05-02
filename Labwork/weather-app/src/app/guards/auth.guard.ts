/* Tuukka Tihekari 1800576 01.05.2020 */

import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public auth: AuthenticationService, private router: Router) {}

  // If user is logged, he/she is allowed to the route. Else nav to login
  canActivate(): boolean {
    this.auth.authenticationState.subscribe(state => {
      if (!state) {
        this.router.navigate(['login']);
      }
    });
    return this.auth.isAuthenticated();
  }
}
