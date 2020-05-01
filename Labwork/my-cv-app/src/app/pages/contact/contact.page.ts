/* Tuukka Tihekari 1800576 01.05.2020 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss']
})
export class ContactPage implements OnInit {
  constructor() {}

  ngOnInit() {}

  sendContact() {
    window.open('mailto:tuukka.tihekari@student.laurea.fi');
  }
}
