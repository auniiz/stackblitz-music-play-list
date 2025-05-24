
export interface ITunesTrack {
  trackId: number;
  trackName: string;
  artistName: string;
  collectionName: string;
  previewUrl: string;
  artworkUrl100: string;
  trackTimeMillis?: number;
  primaryGenreName?: string;
  collectionId?: number;
  collectionViewUrl?: string;
  trackViewUrl?: string;
  country?: string;
  currency?: string;
  releaseDate?: string;
}
export interface ITunesSearchResponse {
  resultCount: number;
  results: ITunesTrack[];
}