import React, {useState, useEffect} from 'react';
import SearchForm from '../components/SearchForm';
import BookList from '../components/BookList';
import API from '../utils/API'

function Search () {
  
  const [books, setBooks] = useState([])

  useEffect(() => {
    loadBooks()
  }, [])

  // Loads all books and sets them to books
  function loadBooks() {
    API.getBooks()
      .then(res => 
        setBooks(res.data)
      )
      .catch(err => console.log(err));
  };

  return (
    <div className="container is-max-desktop">
      <SearchForm />

      <BookList />
    </div>
  )
}

export default Search;