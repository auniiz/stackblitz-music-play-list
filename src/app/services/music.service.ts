import { Injectable } from '@angular/core';
import { ITunesSearchResponse, } from '../models/song.model';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import axios, { isAxiosError } from 'axios'

@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor(private http: HttpClient) { }
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

  // Option 1: Use CORS proxy
  private proxy = 'https://api.allorigins.win/raw?url=';
  private deezerSearchUrl = 'https://api.deezer.com/search?q=';


  searchTracks(query: string): Observable<any[]> {
    const url = `${this.proxy}${encodeURIComponent(this.deezerSearchUrl + query)}`;
    return this.http.get<any>(url).pipe(
      map(response => response.data) // Deezer returns { data: [...] }
    );
  }
  searchOnlineSongs(query: string) {
    query = query || 'adele'
    const url = `https://itunes.apple.com/search?term=${encodeURIComponent(query)}&entity=song`;
    return this.http.get<ITunesSearchResponse>(url)
  }

}
