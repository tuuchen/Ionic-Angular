/* Tuukka Tihekari & Essi Marjoniemi 19/04/2020 */ 

import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { WeatherService } from './services/weather.service';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private weatherService: WeatherService,
    private dataService: DataService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.router.navigate(['']);

      this.weatherService
        .getLocation()
        .then((coords) => {
          this.weatherService.weatherFromCoords(coords);
        })
        .catch((err) => {
          console.log(err);
          this.weatherService.weatherFromStorage();
        });
    });
  }
}
