/* Tuukka Tihekari 1800576 01.05.2020 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PersonalProjectsPageRoutingModule } from './personal-projects-routing.module';
import { PersonalProjectsPage } from './personal-projects.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonalProjectsPageRoutingModule
  ],
  declarations: [PersonalProjectsPage]
})
export class PersonalProjectsPageModule {}
