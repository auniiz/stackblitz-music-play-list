import { CommonModule } from "@angular/common";
import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ITunesTrack } from "../../models/song.model";
import { SongService } from "../../services/song.service";
import { PlaylistService } from "../../services/playlist.service";

@Component({
    selector: 'song-list-container',
    templateUrl: './song-list.component.html',
    styleUrl: './song-list.component.scss',
    imports: [CommonModule, FormsModule],
    standalone: true,
})
export class SongListComponent implements OnInit {
  @Output() addSong = new EventEmitter<ITunesTrack>
    songs: ITunesTrack[] = [];
    query: string = '';

    constructor(private songService: SongService,public playlistService: PlaylistService) { }
    ngOnInit(): void {
    }

    search(): void {
        this.songService.searchOnlineSongs(this.query).subscribe((res) => {
            this.songs = res.results
            console.log(res)
        })
    }
    addToPlaylist(track: ITunesTrack) {
      this.addSong.emit(track)
        if (!this.playlistService.getPlaylists().find(t => t.id === track.trackId)) {
        //   this.playlistService.getPlaylists().push(track);
          alert(`Added "${track.trackName}" to playlist.`);
        }
      }
    
      createPlaylist() {
        alert('📝 Playlist creation feature coming soon!');
      }
    
}