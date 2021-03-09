import React from 'react';

function Navbar () {

  const [isActive, setisActive] = React.useState(false);

  return (
    <div>
      <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            Google Books Search
          </a>

          <a role="button" className={`navbar-burger burger ${isActive ? 'is-active' : ''}`} aria-label="menu" aria-expanded="false" data-target="navOptions" onClick={() => {
            setisActive(!isActive)
          }}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navOptions" className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
          <div className="navbar-end">
            <a className="navbar-item" href="https://bulma.io">
              Search
            </a>
            <a className="navbar-item" href="https://bulma.io">
              Saved
            </a>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;