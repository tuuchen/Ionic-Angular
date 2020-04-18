import { Component, ViewChild, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-forecast',
  templateUrl: 'forecast.page.html',
  styleUrls: ['forecast.page.scss'],
})
export class ForecastPage implements OnInit {
  @ViewChild(IonContent, { static: false }) private content: IonContent;
  constructor(private dataService: DataService) {}

  public forecast: any;

  ionViewWillEnter() {
    this.content.scrollToTop();
  }

  ngOnInit() {
    this.dataService.getForecast().subscribe((data) => {
      if (this.content) {
        this.content.scrollToTop();
      }
      this.forecast = data;
    });
  }
}
