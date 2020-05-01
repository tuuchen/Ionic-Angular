/* Tuukka Tihekari 1800576 01.05.2020 */

import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  activePath = '';

  // Creating the array of the pages, define page names and path inside
  pages = [
    {
      name: 'Technical Skills',
      path: '/menu/technical-skills',
    },
    {
      name: 'Soft Skills',
      path: '/menu/soft-skills',
    },
    {
      name: 'Personal Projects',
      path: '/menu/personal-projects',
    },
    {
      name: 'Team Projects',
      path: '/menu/team-projects',
    },
  ];

    // Array of details
  details = [
    {
      url: 'https://github.com/tuuchen',
    },
  ];

  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.activePath = event.url;
    });
  }

   // Open and send email
  sendEmail() {
    window.open(
      'mailto:tuukka.tihekari@student.laurea.fi' +
        "?subject=I'm contacting you from your CV app"
    );
  }

  // Redirect to URL
  doRedirect(url) {
    window.open(url);
  }

  ngOnInit() {}
}
