import React from "react";
import './bookcard.css'

function BookCard() {

  return (
    <div className="container is-max-desktop book-card">

      <div class="columns">
        <div class="column is-one-fifth testing">book cover goes here</div>
        <div class="column">
          <p>This is the book title</p>
          <p>By Author Name</p>
          <p>This is the description. </p>
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