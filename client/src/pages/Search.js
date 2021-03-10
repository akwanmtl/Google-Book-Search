import React from 'react';
import SearchForm from '../components/SearchForm';
import BookList from '../components/BookList';

function Search () {
  return (
    <div className="container is-max-desktop">
      <SearchForm />

      <BookList />
    </div>
  )
}

export default Search;