import React from "react";
import BookCard from '../BookCard'

function BookList({bookList, handleclick}) {

  return (
    <div>
      { ( bookList.length!==0 ) ?
        bookList.map((book) => (
          <BookCard book={book} key={book.googleID} handleclick={handleclick}/>
        )) :
        <div>No books found</div>
      }
    </div>
  )
}

export default BookList;