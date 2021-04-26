import { Typography } from "@material-ui/core";
import { Album, Artist, Song } from "../entities";
import {
  selectResults,
  selectResultSummary,
  selectSearchEntity,
} from "../../slice/searchSlice";
import { useAppSelector } from "../../hooks";
import { SearchSummary } from "../index";
import {
  Entity,
  Artist as ArtistType,
  Album as AlbumEntity,
  Song as SongEntity
} from "../../types";

export function SearchResults() {
  const searchResults = useAppSelector(selectResults);
  const selectResultMessage = useAppSelector(selectResultSummary) as string;
  const searchEntity = useAppSelector(selectSearchEntity);

  return (
    <div>
      {selectResultMessage && (
        <SearchSummary searchResultSummary={selectResultMessage} />
      )}
      <div>
        {searchEntity === Entity.Artist && searchResults &&
          (searchResults as Array<ArtistType>).map((artist) => (
            <Artist data={{ ...artist }} />
          ))}
        
        {searchEntity === Entity.Song && searchResults &&
          (searchResults as Array<SongEntity>).map((song) => (
            <Song data={{ ...song }} />
          ))}
        
        {searchEntity === Entity.Album && searchResults &&
          (searchResults as Array<AlbumEntity>).map((album) => (
            <Album data={{ ...album }} />
          ))}
      </div>
    </div>
  );
}
