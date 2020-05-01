import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { Song } from './../../models/song.model';
import { SongService } from './../../services/song.service';

@Component({
  selector: 'app-edit-song',
  templateUrl: './edit-song.page.html',
  styleUrls: ['./edit-song.page.scss']
})
export class EditSongPage implements OnInit {
  song: Song;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private songs: SongService
  ) {
    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.song = JSON.parse(params.special);
      }
    });
  }

  saveSong(song: Song) {
    this.songs.editSong(song).then(() => {
      this.router.navigate(['menu/tab1']);
    });
  }

  deleteSong(song: Song) {
    this.songs.removeSong(song).then(() => {
      this.router.navigate(['menu/tab1']);
    });
  }

  ngOnInit() {}
}
