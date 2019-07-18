import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Google Books
      </a>

      <div id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" href="/">Search</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/saved">Saved Books</a>
      </li>
     
     
    </ul>
  </div>
    </nav>
  );
}

export default Nav;