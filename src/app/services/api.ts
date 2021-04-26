import axios from 'axios';

export const URLs = {
    artists: (searchTerm: string) => `https://itunes.apple.com/search?entity=allArtist&attribute=allArtistTerm&term=${searchTerm}&limit=20`,
    songs: (searchTerm: string) => `https://itunes.apple.com/search?entity=musicTrack&attribute=allArtistTerm&term=${searchTerm}&limit=20`,
    albums: (searchTerm: string) => `https://itunes.apple.com/search?entity=album&term=${searchTerm}&limit=20`,
    search: (searchTerm: string) => `https://itunes.apple.com/search?term=${searchTerm}&limit=20`
}

const searchArtists = (searchTerm: string): any => {
    return axios.get(URLs.artists(searchTerm));
}

const searchAlbums = (searchTerm: string): any => {
    return axios.get(URLs.albums(searchTerm));
}

const searchSongs = (searchTerm: string): any => {
    return axios.get(URLs.songs(searchTerm));
}


const search = (searchTerm: string): any => {
    return axios.get(URLs.search(searchTerm));
}

export { searchArtists, searchSongs, searchAlbums, search }


