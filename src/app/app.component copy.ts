// import { Component, OnInit } from '@angular/core';
// import { SongService } from './services/song.service';
// import { PlaylistService } from './services/playlist.service';
// import { Song, ITunesTrack } from './models/song.model';
// import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';
// import { SongListComponent } from './components';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.scss',
//   imports: [CommonModule,SongListComponent, FormsModule],
//   standalone: true,
// })
// export class AppComponent implements OnInit {
//   songs: ITunesTrack[] = [];
//   query = '';
//   newPlaylistName = '';

//   aaa: any

//   constructor(
    
//     public playlistService: PlaylistService
//   ) { }

//   ngOnInit(): void {
//     // this.songs = this.songService.getSongs()
//   }
  

//   createPlaylist(): void {
//     if (this.newPlaylistName.trim()) {
//       this.playlistService.createPlaylist(this.newPlaylistName);
//       this.newPlaylistName = '';
//     }
//   }

//   addSongToPlaylist(song: Song, playlistId: number): void {
//     this.playlistService.addSongToPlaylist(song, playlistId);
//   }

//   removeSongFromPlaylist(songId: number, playlistId: number): void {
//     this.playlistService.removeSongFromPlaylist(songId, playlistId);
//   }
// }
