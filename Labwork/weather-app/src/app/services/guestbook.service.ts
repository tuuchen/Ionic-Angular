/* Tuukka Tihekari 1800576, 01.05.2020 */

import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Guestbook } from '../models/guestbook.model';

@Injectable({
  providedIn: 'root',
})
export class GuestbookService {
  // Define db from firebase
  private guestbookRef = this.db.list<Guestbook>('guestbook');

  constructor(private db: AngularFireDatabase) {}

  // Get list of messages
  getGuestbookList() {
    return this.guestbookRef;
  }

   // Add new message
  addGuestbook(guestbook: Guestbook) {
    return this.guestbookRef.push(guestbook);
  }

  // Edit message
  editGuestbook(guestbook: Guestbook) {
    return this.guestbookRef.update(guestbook.key, guestbook);
  }

  // Remove message
  removeGuestbook(guestbook: Guestbook) {
    return this.guestbookRef.remove(guestbook.key);
  }
}
