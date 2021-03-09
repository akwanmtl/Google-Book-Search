import React from 'react';
import './jumbotron.css';

function Jumbotron () {
  return (
    <div>
      <section className="hero is-medium block_article img-background">
      <div className="hero-body">
        <div className="banner-text">
          <p className="title">
            Google Books Search
          </p>
          <p className="subtitle">
            Using a "React"-ive to find your books!
          </p>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Jumbotron;