import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Song } from '../models/song.model';
import { Band } from '../models/band.model';

@Injectable({
  providedIn: 'root'
})
export class SongService {
  private songListRef = this.db.list<Song>('song-list');
  private bandListRef = this.db.list<Band>('band-list');

  constructor(private db: AngularFireDatabase) {}

  getSongList() {
    return this.songListRef;
  }

  filterByString(band: string) {
    return this.db.list('/song-list', ref =>
      ref.orderByChild('band').equalTo(band)
    );
  }

  assembleBandFilteredList(ctxt: string): any {
    return this.filterByString(ctxt);
  }

  addSong(song: Song) {
    return this.songListRef.push(song);
  }

  addBand(band: Band) {
    return this.bandListRef.push(band);
  }

  getBandList() {
    return this.bandListRef;
  }

  editSong(song: Song) {
    return this.songListRef.update(song.key, song);
  }

  removeSong(song: Song) {
    return this.songListRef.remove(song.key);
  }
}
