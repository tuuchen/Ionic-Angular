import { Component } from '@angular/core';
import { GuestbookService } from './../../services/guestbook.service';
import { Observable } from 'rxjs';
import { Guestbook } from './../../models/guestbook.model';
import { map } from 'rxjs/operators';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-guestbook',
  templateUrl: './guestbook.page.html',
  styleUrls: ['./guestbook.page.scss'],
})
export class GuestbookPage {
  guestbookList$: Observable<Guestbook[]>;
  guestbook: Guestbook;
  constructor(
    private guestbookService: GuestbookService,
    private router: Router
  ) {
    // Get guestbook
    // Sort by asc/desc
    // const ascending: any = values.sort((a, b) => (a > b ? 1 : -1));
    // const descending: any = values.sort((a, b) => (a > b ? -1 : 1));
    this.guestbookList$ = this.guestbookService
      .getGuestbookList()
      .snapshotChanges()
      .pipe(
        map((changes) => {
          return changes
            .map((c) => ({
              key: c.payload.key,
              ...c.payload.val(),
            }))
            .sort((a, b) => (a > b ? 1 : -1));
        })
      );
  }

  // Show details
  showGuestbook(item) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(item),
      },
    };
    this.router.navigate(['menu/view-entry'], navigationExtras);
  }
}
