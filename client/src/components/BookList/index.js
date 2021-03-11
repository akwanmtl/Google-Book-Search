import React from "react";
import BookCard from '../BookCard'

function BookList({bookList, button, handleClick}) {

  return (
    <div>
      { ( bookList.length!==0 ) ?
        bookList.map((book) => (
          <BookCard book={book} key={book.googleID} button={button} handleClick={handleClick}/>
        )) :
        <div>No books found</div>
      }
    </div>
  )
}

export default BookList;