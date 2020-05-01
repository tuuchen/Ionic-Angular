import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Geolocation } from '@capacitor/core';
import { Storage } from '@ionic/storage';
import { forkJoin } from 'rxjs';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private API_KEY = '9f4d67fc449f30b9c2a33a138be6b54e';
  constructor(
    private httpClient: HttpClient,
    private ionicStorage: Storage,
    private dataService: DataService
  ) {}

  async getLocation() {
    const position = await Geolocation.getCurrentPosition();
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const data = [latitude, longitude];
    this.dataService.setLastLocation(data);
    return data;
  }

  getWeatherFromApi(city: string) {
    return forkJoin([
      this.httpClient.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.API_KEY}`
      ),
      this.httpClient.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${this.API_KEY}`
      ),
    ]).pipe(catchError(this.handleError));
  }

  getWeatherFromCoords(lat: any, lon: any) {
    return forkJoin([
      this.httpClient.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${this.API_KEY}`
      ),
      this.httpClient.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${this.API_KEY}`
      ),
    ]).pipe(catchError(this.handleError));
  }

  weatherFromCity(city: string) {
    this.getWeatherFromApi(city).subscribe((weather) => {
      this.dataService.setWeather(weather[0]);
      this.dataService.setForecast(weather[1]);
      this.dataService.setCityName(city);
      this.ionicStorage.set('city', city);
    });
  }

  weatherFromCoords(coords: any[]) {
    this.getWeatherFromCoords(coords[0], coords[1]).subscribe((weather) => {
      this.dataService.setWeather(weather[0]);
      this.dataService.setForecast(weather[1]);
      let wData: any;
      wData = weather[0];
      this.dataService.setCityName(wData.name);
      this.ionicStorage.set('coords', [coords[0], coords[1]]);
    });
  }

  // TODO: implement offline usage for data

  weatherFromStorage() {
    this.ionicStorage
      .get('city')
      .then((city) => {
        if (city === null) {
          city = 'Helsinki';
        }
        this.weatherFromCity(city);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    alert(error.statusText);
    return throwError(errorMessage);
  }

  /* Old Versions and notes to myself */

  /*

  // Handle error within http call

      .pipe(
        catchError((e) => {
          // You can do something with error
          return throwError(e);
        })

          */
}
