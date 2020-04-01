import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewSongPageRoutingModule } from './view-song-routing.module';

import { ViewSongPage } from './view-song.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewSongPageRoutingModule
  ],
  declarations: [ViewSongPage]
})
export class ViewSongPageModule {}
