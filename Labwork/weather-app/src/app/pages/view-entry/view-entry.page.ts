/* Tuukka Tihekari 1800576, 01.05.2020 */

/* This if for another iteration of this app */

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Guestbook } from 'src/app/models/guestbook.model';

@Component({
  selector: 'app-view-entry',
  templateUrl: './view-entry.page.html',
  styleUrls: ['./view-entry.page.scss'],
})
export class ViewEntryPage implements OnInit {
  guestbook: Guestbook;
  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe((params) => {
      if (params && params.special) {
        this.guestbook = JSON.parse(params.special);
      }
    });
  }

  ngOnInit() {}
} 
 