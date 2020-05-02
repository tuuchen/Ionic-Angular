/* Tuukka Tihekari 1800576 01.05.2020 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IonicModule } from '@ionic/angular';
import { TechnicalSkillsPageRoutingModule } from './technical-skills-routing.module';
import { TechnicalSkillsPage } from './technical-skills.page';

@NgModule({
  imports: [
    NgbModule,
    CommonModule,
    FormsModule,
    IonicModule,
    TechnicalSkillsPageRoutingModule
  ],
  declarations: [TechnicalSkillsPage]
})
export class TechnicalSkillsPageModule {}
