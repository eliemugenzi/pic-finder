
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => <div>
  <nav className="teal">
    <div className="nav-wrapper container">
      <Link to='/' href="#" className="brand-logo">PicFinder Lite</Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link to="/search">Search</Link></li>
        <li><Link to="/about">About the app</Link></li>
        <li><Link to="/contact">Contact the developer</Link></li>
      </ul>
    </div>
  </nav>
</div>;

export default NavBar;