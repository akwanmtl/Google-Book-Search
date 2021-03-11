import React from "react";
import BookCard from '../BookCard'

function BookList({bookList}) {

  return (
    <div>
      { ( bookList.length!==0 ) ?
        bookList.map((book,index) => (
          <BookCard book={book} key={index}/>
        )) :
        <div>No books found</div>
      }
    </div>
  )
}

export default BookList;