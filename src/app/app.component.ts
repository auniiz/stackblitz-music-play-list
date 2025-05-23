import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SongListComponent } from './components';

interface ITunesTrack {
  trackId: number;
  trackName: string;
  artistName: string;
  collectionName: string;
  previewUrl: string;
  artworkUrl100: string;
}

interface ITunesResponse {
  resultCount: number;
  results: ITunesTrack[];
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, SongListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  query = '';
  tracks: ITunesTrack[] = [];
  playlists: { [name: string]: ITunesTrack[] } = {};
  selectedPlaylist = '';

  get playlistNames(): string[] {
    return Object.keys(this.playlists);
  }

  get currentPlaylist(): ITunesTrack[] {
    return this.playlists[this.selectedPlaylist] || [];
  }
  constructor(private http: HttpClient) { }

  search() {
    const url = `https://itunes.apple.com/search?term=${encodeURIComponent(this.query)}&entity=song`;
    this.http.get<ITunesResponse>(url).subscribe(res => {
      this.tracks = res.results;
    });
  }

  createPlaylist() {
    const name = prompt('Enter playlist name:');
    if (name && !this.playlists[name]) {
      this.playlists[name] = [];
      this.selectedPlaylist = name;
    }
  }


  selectPlaylist(name: string) {
    this.selectedPlaylist = name;
  }

  addToPlaylist(track: ITunesTrack) {
    const playlist = this.playlists[this.selectedPlaylist];
    if (!playlist.find(t => t.trackId === track.trackId)) {
      playlist.push(track);
    }
  }

  removeFromPlaylist(track: ITunesTrack) {
    this.playlists[this.selectedPlaylist] = this.playlists[this.selectedPlaylist].filter(
      t => t.trackId !== track.trackId
    );
  }



  renamePlaylist(oldName: string) {
    const newName = prompt('Rename playlist:', oldName);
    if (newName && newName !== oldName && !this.playlists[newName]) {
      this.playlists[newName] = this.playlists[oldName];
      delete this.playlists[oldName];
      if (this.selectedPlaylist === oldName) {
        this.selectedPlaylist = newName;
      }
    }
  }

  deletePlaylist(name: string) {
    const confirmed = confirm(`Delete playlist "${name}"?`);
    if (confirmed) {
      delete this.playlists[name];
      if (this.selectedPlaylist === name) {
        this.selectedPlaylist = '';
      }
    }
  }

}
