import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private cityName = new Subject<any>();
  private lastLocation = new BehaviorSubject<any>(null);
  private weather = new BehaviorSubject<any>(null);
  private forecast = new BehaviorSubject<any>(null);
  constructor() {}

  setCityName(data: any) {
    this.cityName.next(data);
  }

  getCityName(): Subject<any> {
    return this.cityName;
  }

  setLastLocation(data: any) {
    this.lastLocation.next(data);
  }

  getLastLocation(): BehaviorSubject<any> {
    return this.lastLocation;
  }

  setForecast(data: any) {
    this.forecast.next(data);
  }

  getForecast(): BehaviorSubject<any> {
    return this.forecast;
  }

  setWeather(data: any) {
    this.weather.next(data);
  }

  getWeather(): BehaviorSubject<any> {
    return this.weather;
  }
}
