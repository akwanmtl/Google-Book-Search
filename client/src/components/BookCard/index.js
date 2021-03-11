import React from "react";
import './bookcard.css'

function BookCard({book}) {
  console.log(book.image)
  return (
    <div className="container is-max-desktop book-card">

      <div className="columns">
        <div className="column is-one-fifth testing"><img src={book.image} alt={book.title}/></div>
        <div className="column">
          <p>{book.title}</p>
          <p>{book.authors}</p>
          <p>{book.description}</p>
          <div className="flex-right">
            <button className="button is-primary button-test">View</button>
            <button className="button is-link button-test">Save</button>
          </div>
        </div>        
      </div>
      
    </div>
  )
}

export default BookCard;