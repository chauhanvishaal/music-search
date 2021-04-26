import { SearchResult } from '../types';
import { AppDispatch, RootState } from './../store';

export interface SearchAsyncThunk {
  searchResult: SearchResult
  searchTerm: string,
  thunkApi: {
    dispatch: AppDispatch;
    state: RootState;
    extra: {};
  }
}