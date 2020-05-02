/* Tuukka Tihekari 1800576 01.05.2020 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TechnicalSkillsPage } from './technical-skills.page';

const routes: Routes = [
  {
    path: '',
    component: TechnicalSkillsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TechnicalSkillsPageRoutingModule {}
