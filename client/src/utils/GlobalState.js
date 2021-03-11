import React, { createContext, usecontext, useReducer } from 'react';

import {
  UPDATE_SEARCHES,
  UPDATE_SAVES,
  ADD_BOOK,
  REMOVE_BOOK,
  LOADING
} from "./actions"

const BookContext = createContext();
const { Provider } = BookContext;

const reducer = (state, action) => {
  switch (action.type) {
    
    case UPDATE_SEARCHES:
      return {
        ...state,
        searchedBooks: [...action.searchedBooks],
        loading: false
      };

    case ADD_BOOK:
      return {
        ...state,
        savedBooks: [action.book, ...state.savedBooks],
        searchedBooks: state.searchedBooks.filter(book => book._id !== action._id),
        loading: false
      }

    
    case UPDATE_SAVES:
      return {
        ...state,
        savedBooks: [...action.savedBooks],
        loading: false
      }

    case REMOVE_BOOK:
      return {
        ...state,
        savedBooks: state.savedBooks.filter(book => book._id !== action._id),
      }

    case LOADING:
      return {
        ...state,
        loading: true
      }

  default:
    return state;
  }
};


const BookProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    searchedBooks: [],
    savedBooks: [],
    loading: false
  });

  return <Provider value = {[state, dispatch]} {...props}/>;
};

const useBookContext = () => {
  return useContext(BookContext);
};

export { BookProvider, useBookContext };
