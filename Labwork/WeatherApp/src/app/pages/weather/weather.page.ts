import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-weather',
  templateUrl: 'weather.page.html',
  styleUrls: ['weather.page.scss'],
})
export class WeatherPage implements OnInit {
  @ViewChild(IonContent, { static: false }) private content: IonContent;
  constructor(private dataService: DataService) {}

  public weather: any;

  public initMap = {
    lat: 60.1699,
    lng: 24.9384,
    zoom: 6,
  };

  // 5d99c597690e1609e621434a87166825
  // 9f4d67fc449f30b9c2a33a138be6b54e

  public weatherMapSource = '';
  public weatherMapSourceApiKey = '9f4d67fc449f30b9c2a33a138be6b54e';
  public mapInstance: any;

  addWeatherLayer() {
    this.weatherMapSource =
      'https://tile.openweathermap.org/map/precipitation_new/';
    this.plotWeatherLayers(this.mapInstance);
  }
  removeWeatherLayer() {
    this.weatherMapSource = '';
    this.mapInstance.overlayMapTypes.clear();
  }
  doSomethingWithTheMapInstance(event) {
    this.mapInstance = event;
    this.addWeatherLayer();
  }
  plotWeatherLayers(event) {
    const weatherMapProvider = this.weatherMapSource;
    const weatherApiKey = this.weatherMapSourceApiKey;
    event.overlayMapTypes.clear();
    event.overlayMapTypes.insertAt(
      0,
      new agmMapType({ width: 256, height: 256, f: 'px', b: 'px' })
    );
    function agmMapType(tileSize) {
      this.tileSize = tileSize;
    }
    agmMapType.prototype.getTile = function (coord, zoom, ownerDocument) {
      const div = ownerDocument.createElement('div');
      div.style.width = this.tileSize.width + 'px';
      div.style.height = this.tileSize.height + 'px';
      div.style.fontSize = '10';
      div.style['background-image'] =
        'url(' +
        weatherMapProvider +
        zoom +
        '/' +
        coord.x +
        '/' +
        coord.y +
        '.png?appid=' +
        weatherApiKey +
        ')';
      return div;
    };
  }

  ionViewWillEnter() {
    this.content.scrollToTop();
  }

  ngOnInit() {
    this.dataService.getWeather().subscribe((data) => {
      if (this.content) {
        this.content.scrollToTop();
      }
      this.weather = data;
      if (this.weather) {
        this.initMap.lat = this.weather.coord.lat;
        this.initMap.lng = this.weather.coord.lon;
      }
    });
  }
}
