import { Component } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { Song } from './../../models/song.model';
import { SongService } from './../../services/song.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  song: Song = {
    title: '',
    chords: '',
    lyrics: '',
    band: ''
  };
  constructor(private router: Router, private songs: SongService) {}

  addSong(song: Song) {
    if (song.band !== '' && song.title !== '') {
      this.songs.addSong(song).then(() => {
        this.router.navigate(['menu/tab1']);
        (this.song.title = ''),
          (this.song.chords = ''),
          (this.song.lyrics = ''),
          (this.song.band = '');
      });
    } else {
      alert('Add some song info!');
    }
  }
}
