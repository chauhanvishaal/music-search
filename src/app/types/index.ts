export enum Entity {
  Song = 1,
  Artist,
  Album,
}

export enum SearchStatus {
  Idle = 1,
  Loading,
  Failed,
  NoResults,
}

export interface SearchResult {
  resultCount: number;
  results: Array<any>;
}

export interface Artist {
  amgArtistId: number;
  artistId: number;
  artistLinkUrl: string;
  artistName: string;
  artistType: string;
  primaryGenreId: number;
  primaryGenreName: number;
  wrapperType: string;
}

export interface Song {
  artistId: number;
  artistName: string;
  artistViewUrl: string;
  artworkUrl30: string;
  artworkUrl60: string;
  artworkUrl100: string;
  collectionCensoredName: string;
  collectionExplicitness: string;
  collectionId: number;
  collectionName: string;
  collectionPrice: number;
  collectionViewUrl: string;
  primaryGenreName: string;
  releaseDate: string;
  trackCount: number;
  trackId: number;
  trackName: string;
  trackNumber: number;
  trackPrice: number;
  trackTimeMillis: number;
}

export interface Album {
  amgArtistId: number;
  artistId: number;
  artistName: string;
  artistViewUrl: string;
  artworkUrl60: string;
  artworkUrl100: string;
  collectionId: number;
  collectionName: string;
  collectionPrice: string;
  collectionType: string;
  collectionViewUrl: string;
  primaryGenreName: string;
  releaseDate: string;
  trackCount: number;
  wrapperType: string;
}
