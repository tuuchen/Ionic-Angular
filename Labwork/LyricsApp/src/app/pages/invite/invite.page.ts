import { Component, OnInit } from '@angular/core';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.page.html',
  styleUrls: ['./invite.page.scss']
})
export class InvitePage implements OnInit {
  constructor(private emailComposer: EmailComposer) {}

  ngOnInit() {}

  sendEmail() {
    const email = {
      to: '',
      cc: '',
      attachments: [],
      subject: 'Join my app and see some awesome lyrics!',
      body: 'Check out the app on appstore or googleplay',
      isHtml: true
    };
    this.emailComposer.open(email);
  }
}
