import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MusicListComponent, PlaylistComponent, PlaylistDetailComponent } from './components';
import { ITunesSearchResponse, ITunesTrack } from './models/song.model';
import { } from "./components/playlist-list/playlist.component";
import { MusicService } from './services/music.service';
import { PlaylistService } from './services/playlist.service';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, MusicListComponent, PlaylistComponent, PlaylistDetailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  search = '';
  musics: ITunesTrack[] = [];
  playlists: { [name: string]: ITunesTrack[] } = {};
  selectedPlaylist = '';


  constructor(private musicService: MusicService, private playlistService: PlaylistService) { }
  ngOnInit(): void {
    this.searchMusic();
  }

  searchMusic(): void {
    this.selectedPlaylist = ''
    this.musicService.searchOnlineSongs(this.search).subscribe((res) => {
      this.musics = res.results
    })
  }
  addToPlaylist(music: ITunesTrack) {
    if (this.selectedPlaylist)
      this.playlistService.addMusicToPlaylist(this.selectedPlaylist, music);
  }

}
