import React from 'react';
import './bookcontainer.css'

function BookContainer ({children}) {
  return (
    <div className="container is-max-desktop book-container">
      {children}
    </div>
  )
}

export default BookContainer;