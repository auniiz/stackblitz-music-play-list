import { Injectable } from '@angular/core';
import { Playlist } from '../models/playlist.model';
import { ITunesTrack, } from '../models/song.model';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  playlists: { [name: string]: ITunesTrack[] } = {};

  createPlaylist() {
    const name = prompt('Enter playlist name:');
    if (name && !this.playlists[name]) {
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

  addToPlaylist(playlistName: string, track: ITunesTrack) {
    if (playlistName) {
      const playlist = this.playlists[playlistName];
      if (!playlist.find(t => t.trackId === track.trackId)) {
        playlist.push(track);
      }
    }
  }
  removeMusicFromPlaylist(track: ITunesTrack) {
    // this.playlists[this.selectedPlaylist] = this.playlists[this.selectedPlaylist].filter(
    //   t => t.trackId !== track.trackId
    // );
  }
  removeSongFromPlaylist(songId: number, playlistId: number): void {
    // const playlist = this.playlists.find(p => p.id === playlistId);
    // if (playlist) {
    //   playlist.songs = playlist.songs.filter(s => s.id !== songId);
    // }
  }


}
