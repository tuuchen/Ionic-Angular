import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { WeatherPage } from './weather.page';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCD-aQhjj-GvRd1qmZEIFVTMVttDzQa6Uk',
    }),
    RouterModule.forChild([{ path: '', component: WeatherPage }]),
  ],
  declarations: [WeatherPage],
})
export class WeatherPageModule {}
