import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-inverse navbar-fixed-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link to='/' className="navbar-brand">Project Portal</Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;