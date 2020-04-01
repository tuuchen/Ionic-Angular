import { Component } from '@angular/core';
import { SongService } from './../../services/song.service';
import { Band } from './../../models/band.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  band: Band = {
    name: ''
  };

  constructor(private regBand: SongService, private router: Router) {}

  /* addBand(band: Band) {
    this.regBand.addBand(band).then(ref => {
      this.router.navigate(['menu/tab1']);
    });
  } */
}
