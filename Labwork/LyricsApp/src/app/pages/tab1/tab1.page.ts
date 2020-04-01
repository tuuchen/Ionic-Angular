import { Component } from '@angular/core';
import { SongService } from './../../services/song.service';
import { Observable } from 'rxjs';
import { Song } from './../../models/song.model';
import { Band } from './../../models/band.model';
import { map } from 'rxjs/operators';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  bands: Observable<Song[]>;
  songsList$: Observable<Song[]>;
  // bandList$: Observable<Band[]>;
  song: Song;
  constructor(private songsService: SongService, private router: Router) {
    this.songsList$ = this.songsService
      .getSongList()
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(c => ({
            key: c.payload.key,
            ...c.payload.val()
          }));
        })
      );
    this.bands = this.songsList$;
  }

  ionViewWillEnter() {
    this.songsList$ = this.songsService
      .getSongList()
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(c => ({
            key: c.payload.key,
            ...c.payload.val()
          }));
        })
      );
    this.bands = this.songsList$;
  }

  onContextChange(ctxt): void {
    if (ctxt.detail.value) {
      this.songsList$ = this.songsService
        .assembleBandFilteredList(ctxt.detail.value)
        .snapshotChanges()
        .pipe(
          map(changes => {
            // @ts-ignore
            return changes.map(c => ({
              key: c.payload.key,
              ...c.payload.val()
            }));
          })
        );
    }
  }

  showAllSongs() {
    this.songsList$ = this.songsService
      .getSongList()
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(c => ({
            key: c.payload.key,
            ...c.payload.val()
          }));
        })
      );
  }

  showSong(item) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(item)
      }
    };
    this.router.navigate(['menu/view-song'], navigationExtras);
  }
}
