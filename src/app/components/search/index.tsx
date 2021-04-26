import React, { useEffect, useState } from "react";

import { SearchContainer, SearchInput, IconSearch } from "./styles";
import { useAppDispatch } from "../../hooks";
import { searchAsync } from "../../slice/searchSlice";

export function Search() {
  const [searchText, setSearchText] = useState("");
  const dispatch = useAppDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      searchText &&
        searchText.length > 2 &&
        dispatch(searchAsync(searchText) as any);
    }, 700);
    return () => clearTimeout(timer);
  }, [searchText, dispatch]);

  const searchHandler = (ev: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchText(ev.target.value);
  };

  return (
    <SearchContainer>
      <div>
        <IconSearch />
      </div>
      <SearchInput
        placeholder="Search artist, song or album"
        inputProps={{ "aria-label": "search" }}
        onChange={searchHandler}
      />
    </SearchContainer>
  );
}
