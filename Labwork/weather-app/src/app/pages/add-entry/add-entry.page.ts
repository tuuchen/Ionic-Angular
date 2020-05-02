/* Tuukka Tihekari 1800576 01.05.2020 */

import { Component } from '@angular/core';
import { Guestbook } from './../../models/guestbook.model';
import { GuestbookService } from './../../services/guestbook.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-add-entry',
  templateUrl: './add-entry.page.html',
  styleUrls: ['./add-entry.page.scss'],
})
export class AddEntryPage {
  time: any;
  guestbook: Guestbook = {
    title: '',
    author: localStorage.getItem('userName'),
    message: '',
    date: new Date().toString(),
  };
  constructor(
    private router: Router,
    private guestbooks: GuestbookService,
    public alertController: AlertController
  ) {}

  // Alert if all fields are not filled
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Whoops..',
      // subHeader: 'Subtitle',
      message: 'Fill out all fields!',
      buttons: ['OK'],
    });

    await alert.present();
  }

  // Add new entry to guestbook
  addGuestbook(guestbook: Guestbook) {
    if (guestbook.title !== '' || guestbook.message !== '') {
      this.guestbooks.addGuestbook(guestbook).then(() => {
        this.router.navigate(['menu/guestbook']);
        this.guestbook.title = '';
        this.guestbook.message = '';
      });
    } else {
      this.presentAlert();
    }
  }

  // Set live counter to guestbook time
  ionViewWillEnter() {
    this.guestbook.date = new Date().toString();
    this.time = setInterval(() => {
      this.guestbook.date = new Date().toString();
    }, 1000);
  }

  // Remove counter
  ionViewDidLeave() {
    clearInterval(this.time);
  }
}
