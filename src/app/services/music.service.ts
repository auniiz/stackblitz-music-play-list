import { Injectable } from '@angular/core';
import { ITunesSearchResponse, } from '../models/song.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor(private http: HttpClient) { }

  searchOnlineSongs(query: string) {
    query = query || 'adele'
    const url = `https://itunes.apple.com/search?term=${encodeURIComponent(query)}&entity=song`;
    return this.http.get<ITunesSearchResponse>(url)
  }

}
