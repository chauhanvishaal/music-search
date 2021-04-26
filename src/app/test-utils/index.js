// test-utils.js
import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider,  } from 'react-redux';

import searchReducer from '../slice/searchSlice';
import { Entity, SearchStatus } from '../types';


const initialState = {
    searchTerm: "",
    searchEntity: Entity.Song,
    results: [],
    summary: "",
    status: SearchStatus.Idle,
};

const mockStore = createStore(searchReducer, initialState);
  
function render(ui,
  {
    initialState, store = mockStore, ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { render }
