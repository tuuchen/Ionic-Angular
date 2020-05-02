import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children: [
      // Menu items
      {
        path: 'home',
        loadChildren: '../home/home.module#HomePageModule',
      },
      {
        path: 'contact',
        loadChildren: '../contact/contact.module#ContactPageModule',
      },
      // Tabs
      {
        path: 'weather',
        loadChildren: '../weather/weather.module#WeatherPageModule',
      },
      {
        path: 'forecast',
        loadChildren: '../forecast/forecast.module#ForecastPageModule',
      },
      {
        path: 'tab3',
        loadChildren: '../tab3/tab3.module#Tab3PageModule',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/menu/weather',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
