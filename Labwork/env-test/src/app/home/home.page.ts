import { Component } from '@angular/core';

// Import Services to module
import { ActionSheetController } from '@ionic/angular';
import { EnvService } from '../env.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  constructor(
    // Define services in constructor
    public actionSheetController: ActionSheetController,
    private env: EnvService,
    private cookieService: CookieService
  ) {
    if (env.enableDebug) {
      console.log('Debug mode enabled!');
    }
  }

  async openMenu() {
    /* This is just my own testing! */
    const api = this.cookieService.get('API_URL');
    // API URL from env.js (Local file)
    console.log('Env.js API: ' + this.env.apiUrl);
    console.log('Heroku API: ' + api);

    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            console.log('Delete clicked');
          }
        },
        {
          text: 'Share',
          icon: 'share',
          handler: () => {
            console.log('Share clicked');
          }
        },
        {
          text: 'Play (open modal)',
          icon: 'arrow-dropright-circle',
          handler: () => {
            console.log('Play clicked');
          }
        },
        {
          text: 'Favorite',
          icon: 'heart',
          handler: () => {
            console.log('Favorite clicked');
          }
        },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    await actionSheet.present();
  }
}
