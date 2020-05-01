/* Tuukka Tihekari 1800576 01.05.2020 */

import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  constructor(
    public authService: AuthenticationService,
    public location: Location
  ) {}

  // Navigate to previous route
  goBack() {
    this.location.back();
  }

  ngOnInit() {}
}
