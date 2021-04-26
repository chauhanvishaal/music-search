import React from "react";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";

import { useAppDispatch, useAppSelector } from '../../hooks';
import { setSearchEntity, selectSearchEntity } from '../../slice/searchSlice';
import { Entity } from '../../types';

export function SearchEntities() {
    const dispatch = useAppDispatch();
    const selectedSearchEntity = useAppSelector(selectSearchEntity);
    // const searchTerm = useAppSelector(selectSearchTerm);
    // console.log('searchTerm', searchTerm);
  const handleSearchType = (
    event: React.MouseEvent<HTMLElement>,
    entity: number | Entity
  ) => {
      dispatch(setSearchEntity(entity));
  };

  return (
    <ToggleButtonGroup
      value={selectedSearchEntity}
      exclusive
      onChange={handleSearchType}
      aria-label="search type"
    >
      <ToggleButton value={Entity.Song} aria-label="left aligned">
        Song
      </ToggleButton>
      <ToggleButton value={Entity.Artist} aria-label="centered">
        Artist
      </ToggleButton>
      <ToggleButton value={Entity.Album} aria-label="right aligned">
        Album
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
