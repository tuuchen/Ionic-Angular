import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { WeatherService } from '../../services/weather.service';
import { MenuController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  public weatherForm = new FormGroup({
    city: new FormControl('', Validators.required),
  });
  public activePath = '';
  public location: any[];
  public locatedTime: any;
  public pages = [
    {
      name: 'Home',
      path: '/menu/home',
    },
    {
      name: 'Contact',
      path: '/menu/contact',
    },
  ];

  public cities = [
    'Helsinki',
    'Tampere',
    'Joensuu',
    'Vaasa',
    'Keminmaa',
    'Rovaniemi',
  ];

  constructor(
    private router: Router,
    private weatherService: WeatherService,
    private menu: MenuController,
    public actionSheetController: ActionSheetController,
    private dataService: DataService
  ) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.activePath = event.url;
    });
  }
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Last located at ' + this.locatedTime,
      subHeader: 'Coords:',
      buttons: [
        {
          text: 'LAT: ' + this.location[0],
          handler: () => {
            console.log('LAT clicked!');
          },
        },
        {
          text: 'LON: ' + this.location[1],
          handler: () => {
            console.log('Lon clicked!');
          },
        },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          },
        },
      ],
    });
    await actionSheet.present();
  }

  search(data: any) {
    this.weatherService.weatherFromCity(data.city);
  }

  searchRecent(data: any) {
    this.weatherService.weatherFromCity(data);
  }

  locate() {
    this.weatherService.getLocation().then((data) => {
      this.weatherService.weatherFromCoords(data);
    });
  }

  sendFeedback() {
    window.open(
      'mailto:tuukka.tihekari@student.laurea.fi, essi.marjoniemi@student.laurea.fi' +
        '?subject=Feedback about your WeatherApp'
    );
  }

  getDate() {
    const today = new Date();
    const date =
      today.getDate() +
      '.' +
      (today.getMonth() + 1) +
      '.' +
      today.getFullYear();
    const time =
      today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    return date + ' ' + time;
  }

  ngOnInit() {
    this.dataService.getLastLocation().subscribe((data) => {
      this.locatedTime = this.getDate();
      this.location = data;
    });

    this.dataService.getCityName().subscribe((res) => {
      this.cities.unshift(res);
      this.cities = [...new Set(this.cities)];
      if (this.cities.length > 6) {
        this.cities.splice(-1, 1);
      }
      this.menu.close();
    });
  }
}
