import React from "react";
import './bookcard.css'

function BookCard({book, handleclick}) {
  console.log(book.link)
  return (
    <div className="container is-max-desktop book-card">

      <div className="columns">
        <div className="column is-one-fifth testing"><img src={book.image} alt={book.title}/></div>
        <div className="column">
          <p>{book.title}</p>
          <p>{book.authors}</p>
          <p>{book.description}</p>
          <div className="flex-right">
            <a className="button is-primary button-test" href={book.link} target="_blank" rel="noopener noreferrer">View</a>
            <button className="button is-link button-test" onClick={() => handleclick(book.googleID)}>Save</button>
          </div>
        </div>        
      </div>
      
    </div>
  )
}

export default BookCard;