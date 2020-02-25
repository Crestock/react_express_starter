import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
  queries: []
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteQuery(id) {
    dispatch({
      type: 'DELETE_QUERY',
      payload: id
    });
  }

  function addQuery(query) {
    dispatch({
      type: 'ADD_QUERY',
      payload: query
    });
  }

  return (<GlobalContext.Provider value={{
    queries: state.queries,
    deleteQuery,
    addQuery
  }}>
    {children}
  </GlobalContext.Provider>);
}