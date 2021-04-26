import { Entity, SearchStatus } from "../types";
import searchReducer, {
  SearchState,
  setSearchTerm,
  setSearchEntity,
} from "./searchSlice";

describe("search reducer", () => {
  const initialState: SearchState = {
    searchTerm: "",
    searchEntity: Entity.Song,
    results: [],
    summary: "",
    status: SearchStatus.Idle,
  };

  it("should handle initial state", () => {
    expect(searchReducer(undefined, { type: "unknown" })).toEqual({
      searchTerm: "",
      searchEntity: Entity.Song,
      results: [],
      summary: "",
      status: SearchStatus.Idle,
    });
  });

  it("should set search term", () => {
    const actual = searchReducer(initialState, setSearchTerm("Sam"));
    expect(actual.searchTerm).toEqual("Sam");
  });

//   it("should set search entity", () => {
//     const actual = searchReducer(initialState, setSearchEntity(Entity.Artist));
//     expect(actual.searchEntity).toEqual(Entity.Artist);
//   });
});
