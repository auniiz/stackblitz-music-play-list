import { Injectable } from '@angular/core';
import { Song } from '../models/song.model';

@Injectable({
  providedIn: 'root'
})
export class SongService {
  private songs: Song[] = [
    { id: 1, title: 'Blinding Lights', artist: 'The Weeknd' },
    { id: 2, title: 'Levitating', artist: 'Dua Lipa' },
    { id: 3, title: 'Peaches', artist: 'Justin Bieber' },
    { id: 4, title: 'Save Your Tears', artist: 'The Weeknd' }
  ];

  getSongs(): Song[] {
    return this.songs;
  }

  searchSongs(query: string): Song[] {
    return this.songs.filter(song =>
      song.title.toLowerCase().includes(query.toLowerCase())
    );
  }
}
