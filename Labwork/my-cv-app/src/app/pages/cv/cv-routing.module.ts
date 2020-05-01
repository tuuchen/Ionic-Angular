/* Tuukka Tihekari 1800576 01.05.2020 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CvPage } from './cv.page';

const routes: Routes = [
  {
    path: '',
    component: CvPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CvPageRoutingModule {}
