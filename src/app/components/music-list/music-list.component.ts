import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ITunesTrack } from "../../models/song.model";
import { MusicService } from "../../services/music.service";
import { PlaylistService } from "../../services/playlist.service";
export interface IMusicListComponentOptions {
  useAddButton: boolean
  useRemoveButton: boolean
}
@Component({
  selector: 'music-list',
  templateUrl: './music-list.component.html',
  styleUrl: './music-list.component.scss',
  imports: [CommonModule, FormsModule],
  standalone: true,
})
export class MusicListComponent implements OnInit {
  @Input() IDListSelected: number[] = []
  @Input() componentOptions: IMusicListComponentOptions = {
    useAddButton: false,
    useRemoveButton: false
  }
  @Output() addMusic = new EventEmitter<ITunesTrack>
  @Output() removeMusic = new EventEmitter<ITunesTrack>
  @Input() musics: ITunesTrack[] = [];

  constructor(private songService: MusicService, public playlistService: PlaylistService) { }
  ngOnInit(): void {
  }


  addToPlaylist(music: ITunesTrack) {
    this.addMusic.emit(music)
  }
  removeFromPlaylist(music: ITunesTrack) {
    this.removeMusic.emit(music)
  }



}