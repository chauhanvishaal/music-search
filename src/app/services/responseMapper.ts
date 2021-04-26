import { Album, Artist, Song } from "../types";

export function mapArtistResponse(data: Array<any>): Array<Artist> {
  const mappedData: Array<Artist> = [];
  data.map((artist: any) => {
    return mappedData.push({
      amgArtistId: artist.amgArtistId,
      artistId: artist.artistId,
      artistLinkUrl: artist.artistLinkUrl,
      artistName: artist.artistName,
      artistType: artist.artistType,
      primaryGenreId: artist.primaryGenreId,
      primaryGenreName: artist.primaryGenreName,
      wrapperType: artist.wrapperType,
    } as Artist);
  });

  return mappedData;
}

export function mapAlbumResponse(data: Array<any>): Array<Album> {
  const mappedData: Array<Album> = data.map(
    (album: any) =>
      ({
        amgArtistId: album.amgArtistId,
        artistId: album.artistId,
        artistName: album.artistName,
        artistViewUrl: album.artistViewUrl,
        artworkUrl60: album.artworkUrl60,
        artworkUrl100: album.artworkUrl100,
        collectionId: album.collectionId,
        collectionName: album.collectionName,
        collectionPrice: album.collectionPrice,
        collectionType: album.collectionType,
        collectionViewUrl: album.collectionViewUrl,
        primaryGenreName: album.primaryGenreName,
        releaseDate: album.releaseDate,
        trackCount: album.trackCount,
        wrapperType: album.wrapperType,
      } as Album)
  );

  return mappedData;
}

export function mapSongResponse(data: Array<any>): Array<Song> {
  const mappedData: Array<Song> = data.map(
    (song: any) =>
      ({
        artistId: song.artistId,
        artistName: song.artistName,
        artistViewUrl: song.artistViewUrl,
        artworkUrl30: song.artworkUrl30,
        artworkUrl60: song.artworkUrl60,
        artworkUrl100: song.artworkUrl100,
        collectionCensoredName: song.collectionCensoredName,
        collectionExplicitness: song.collectionExplicitness,
        collectionId: song.collectionId,
        collectionName: song.collectionName,
        collectionPrice: song.collectionPrice,
        collectionViewUrl: song.collectionViewUrl,
        primaryGenreName: song.primaryGenreName,
        releaseDate: song.releaseDate,
        trackCount: song.trackCount,
        trackId: song.trackId,
        trackName: song.trackName,
        trackNumber: song.trackNumber,
        trackPrice: song.trackPrice,
        trackTimeMillis: song.trackTimeMillis,
        wrapperType: song.wrapperType,
      } as Song)
  );

  return mappedData;
}
