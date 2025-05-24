import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ITunesTrack } from "../../models/song.model";
import { MusicService } from "../../services/music.service";
import { PlaylistService } from "../../services/playlist.service";
import { MusicListComponent } from "../music-list/music-list.component";

@Component({
  selector: 'playlist-detail',
  templateUrl: './playlist-detail.component.html',
  styleUrl: './playlist-detail.component.scss',
  imports: [CommonModule, FormsModule, MusicListComponent,],
  standalone: true,
})
export class PlaylistDetailComponent implements OnInit {
  @Input() selectedPlaylist = ''

  constructor(private playlistService: PlaylistService) { }
  ngOnInit(): void {
  }

  get playlistNames(): string[] {
    return Object.keys(this.playlistService.playlists) || [];
  }

  get playlistMusicList() {
    return this.playlistService.playlists[this.selectedPlaylist] || []
  }

  get musicIDList() {
    return this.playlistMusicList.map(music => music.trackId) || []
  }

  removeFromPlaylist(music: ITunesTrack) {
    if (this.selectedPlaylist)
      this.playlistService.removeMusicFromPlaylist(this.selectedPlaylist, music);
  }


}