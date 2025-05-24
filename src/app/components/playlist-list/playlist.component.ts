import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ITunesTrack } from "../../models/song.model";
import { MusicService } from "../../services/music.service";
import { PlaylistService } from "../../services/playlist.service";

@Component({
  selector: 'playlist-list',
  templateUrl: './playlist.component.html',
  styleUrl: './playlist.component.scss',
  imports: [CommonModule, FormsModule],
  standalone: true,
})
export class PlaylistComponent implements OnInit {
  @Input() selectedPlaylist = ''
  @Output() selectedPlaylistChange = new EventEmitter<string>()


  constructor(private playlistService: PlaylistService) { }
  ngOnInit(): void {
  }

  get playlistNames(): string[] {
    return Object.keys(this.playlistService.playlists) || [];
  }

  selectPlaylist(playlistName: string) {
    this.selectedPlaylist = playlistName;
    this.selectedPlaylistChange.emit(playlistName);
  }

  newPlaylist() {
    this.playlistService.createPlaylist()
  }
}