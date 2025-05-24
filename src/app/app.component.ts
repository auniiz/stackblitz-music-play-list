import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MusicListComponent, PlaylistComponent, PlaylistDetailComponent } from './components';
import { ITunesTrack } from './models/song.model';
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
  selectedPlaylist = '';
  get playlistMusicList() {
    return this.playlistService.playlists[this.selectedPlaylist] || []
  }
  get musicIDList() {
    return this.playlistMusicList.map(music => music.trackId) || []
  }

  constructor(private musicService: MusicService, private playlistService: PlaylistService) { }
  ngOnInit(): void {
    this.searchMusic();
  }

  searchMusic(isFromClick = false): void {
    const timeOut = isFromClick ? 0 : 300;
    setTimeout(() => {
      this.musicService.searchOnlineSongs(this.search).subscribe((res) => {
        this.musics = res.results
      })
    }, timeOut)
  }
  addToPlaylist(music: ITunesTrack) {
    if (this.selectedPlaylist) {
      this.playlistService.addMusicToPlaylist(this.selectedPlaylist, music);
    } else {
      alert('Please select a playlist first!!')
    }
  }

}
