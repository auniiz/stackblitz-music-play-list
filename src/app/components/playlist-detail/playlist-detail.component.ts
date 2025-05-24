import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ITunesTrack } from "../../models/song.model";
import { MusicService } from "../../services/music.service";
import { PlaylistService } from "../../services/playlist.service";

@Component({
  selector: 'playlist-detail',
  templateUrl: './playlist-detail.component.html',
  styleUrl: './playlist-detail.component.scss',
  imports: [CommonModule, FormsModule],
  standalone: true,
})
export class PlaylistDetailComponent implements OnInit {
  @Input() selectedPlaylist = ''

  constructor(private songService: MusicService, public playlistService: PlaylistService) { }
  ngOnInit(): void {
  }

  get playlistNames(): string[] {
    return Object.keys(this.playlistService.playlists) || [];
  }

  get playlistMusicList() {
    return this.playlistService.playlists[this.selectedPlaylist] || []

  }



}