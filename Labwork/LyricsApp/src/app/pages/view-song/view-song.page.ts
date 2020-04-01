import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { Song } from 'src/app/models/song.model';

@Component({
  selector: 'app-view-song',
  templateUrl: './view-song.page.html',
  styleUrls: ['./view-song.page.scss']
})
export class ViewSongPage implements OnInit {
  song: Song;
  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.song = JSON.parse(params.special);
      }
    });
  }

  editSong() {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(this.song)
      }
    };
    this.router.navigate(['menu/edit-song'], navigationExtras);
  }

  ngOnInit() {}
}
