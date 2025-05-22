import { Component, OnInit } from '@angular/core';
import { SongService } from './services/song.service';
import { PlaylistService } from './services/playlist.service';
import { Song } from './models/song.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [CommonModule, FormsModule],
  standalone: true,
})
export class AppComponent implements OnInit{
  songs: Song[] = [];
  query = '';
  newPlaylistName = '';

  constructor(
    public songService: SongService,
    public playlistService: PlaylistService
  ) {}

  ngOnInit(): void {
    this.songs= this.songService.getSongs()
  }
  search(): void {
    this.songs = this.songService.searchSongs(this.query);
  }

  createPlaylist(): void {
    if (this.newPlaylistName.trim()) {
      this.playlistService.createPlaylist(this.newPlaylistName);
      this.newPlaylistName = '';
    }
  }

  addSongToPlaylist(song: Song, playlistId: number): void {
    this.playlistService.addSongToPlaylist(song, playlistId);
  }

  removeSongFromPlaylist(songId: number, playlistId: number): void {
    this.playlistService.removeSongFromPlaylist(songId, playlistId);
  }
}
