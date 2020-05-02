/* Tuukka Tihekari 1800576 01.05.2020 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TeamProjectsPageRoutingModule } from './team-projects-routing.module';
import { TeamProjectsPage } from './team-projects.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeamProjectsPageRoutingModule
  ],
  declarations: [TeamProjectsPage]
})
export class TeamProjectsPageModule {}
