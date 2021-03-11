import React from 'react';
import { Link } from "react-router-dom";

function Navbar () {

  const [isActive, setisActive] = React.useState(false);

  return (
    <div>
      <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            Google Books Search
          </Link>

          <div role="button" className={`navbar-burger burger ${isActive ? 'is-active' : ''}`} aria-label="menu" aria-expanded="false" data-target="navOptions" onClick={() => {
            setisActive(!isActive)
          }}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </div>
        </div>

        <div id="navOptions" className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
          <div className="navbar-end">
            <Link className="navbar-item" to="/">
              Search
            </Link>
            <Link className="navbar-item" to="/saved">
              Saved
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;