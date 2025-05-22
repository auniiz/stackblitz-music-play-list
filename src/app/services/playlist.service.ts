import { Injectable } from '@angular/core';
import { Playlist } from '../models/playlist.model';
import { Song } from '../models/song.model';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  private playlists: Playlist[] = [];

  getPlaylists(): Playlist[] {
    return this.playlists;
  }

  createPlaylist(name: string): void {
    this.playlists.push({ id: Date.now(), name, songs: [] });
  }

  addSongToPlaylist(song: Song, playlistId: number): void {
    const playlist = this.playlists.find(p => p.id === playlistId);
    if (playlist && !playlist.songs.find(s => s.id === song.id)) {
      playlist.songs.push(song);
    }
  }

  removeSongFromPlaylist(songId: number, playlistId: number): void {
    const playlist = this.playlists.find(p => p.id === playlistId);
    if (playlist) {
      playlist.songs = playlist.songs.filter(s => s.id !== songId);
    }
  }
}
