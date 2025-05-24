import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ITunesTrack } from "../../models/song.model";
import { MusicService } from "../../services/music.service";
import { PlaylistService } from "../../services/playlist.service";

@Component({
  selector: 'music-list',
  templateUrl: './music-list.component.html',
  styleUrl: './music-list.component.scss',
  imports: [CommonModule, FormsModule],
  standalone: true,
})
export class MusicListComponent implements OnInit {
  @Output() addMusic = new EventEmitter<ITunesTrack>
  @Input() musics: ITunesTrack[] = [];

  constructor(private songService: MusicService, public playlistService: PlaylistService) { }
  ngOnInit(): void {
  }


  addToPlaylist(music: ITunesTrack) {
    this.addMusic.emit(music)
    // if (!this.playlistService.getPlaylists().find(t => t.id === track.trackId)) {
    //   //   this.playlistService.getPlaylists().push(track);
    //   alert(`Added "${track.trackName}" to playlist.`);
    // }
  }



}