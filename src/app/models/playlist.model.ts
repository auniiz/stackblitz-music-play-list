import { ITunesTrack } from "./song.model";


export interface Playlist {
    id: number;
    name: string;
    songs: ITunesTrack[];
}
