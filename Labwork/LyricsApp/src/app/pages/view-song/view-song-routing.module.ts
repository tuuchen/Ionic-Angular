import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewSongPage } from './view-song.page';

const routes: Routes = [
  {
    path: '',
    component: ViewSongPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewSongPageRoutingModule {}
