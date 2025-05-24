import { Injectable } from '@angular/core';
import { Playlist } from '../models/playlist.model';
import { ITunesTrack, } from '../models/song.model';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  playlists: { [name: string]: ITunesTrack[] } = {};
  get playlistNames(): string[] {
    return Object.keys(this.playlists) || [];
  }

  createPlaylist() {
    const name = prompt('Enter playlist name:');
    if (name && !this.playlistNames.includes(name)) {
      this.playlists[name] = [];
    }
  }
  renamePlaylist(oldName: string) {
    const newName = prompt('Rename playlist:', oldName);
    if (newName && newName !== oldName && !this.playlists[newName]) {
      this.playlists[newName] = this.playlists[oldName];
      delete this.playlists[oldName];
    }
  }
  deletePlaylist(name: string) {
    const confirmed = confirm(`Delete playlist "${name}"?`);
    if (confirmed) {
      delete this.playlists[name];
    }
  }

  addMusicToPlaylist(playlistName: string, music: ITunesTrack) {
    if (playlistName) {
      const playlist = this.playlists[playlistName];
      if (!playlist.find(t => t.trackId === music.trackId)) {
        playlist.push(music);
      }
    }
  }
  removeMusicFromPlaylist(playlistName: string, music: ITunesTrack) {
    this.playlists[playlistName] = this.playlists[playlistName].filter(
      t => t.trackId !== music.trackId
    );
  }



}
