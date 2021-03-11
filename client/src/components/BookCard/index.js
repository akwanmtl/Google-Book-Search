import React from "react";
import './bookcard.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function BookCard({book, button, handleClick}) {
  let authors = book.authors.toString().replaceAll(',',', ');

  return (
    <div className="book-card">

      <div className="columns content">
        <div className="column book-body">
          <h2><i>{book.title}</i></h2>
          <h6><i>Written by {authors}</i></h6>

          <div className="columns is-gapless">
            
            <div className="column is-one-fifth book-cover has-text-centered">
              <img src={book.image} alt={book.title}/>
              <br/>
              <a className="button is-primary button-test" href={book.link} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faEye} className="icon"/>
                View
              </a>
              <button 
                className="button is-link button-test" 
                onClick={() => handleClick(book.googleID)}>
                  {button === "Save" ? 
                    <FontAwesomeIcon icon={faStar} className="icon"/>:
                    <FontAwesomeIcon icon={faTrash} className="icon"/> 
                  }
                  {button}
              </button>
            </div>
            
            <div className="column">
              <p className="has-text-justified">{book.description}</p>
            </div>

          </div>
          
        </div>
      </div>
      
    </div>
  )
}

export default BookCard;