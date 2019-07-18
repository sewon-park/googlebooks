import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Google Books
      </a>

      <div id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="/">Search</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/saved">Saved Books</a>
      </li>
     
     
    </ul>
  </div>
    </nav>
  );
}

export default Nav;