import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ theme }) => {
  return (
    <header className={theme}>
      <div className="logo">
        <img src="/image/ae-logo-svg.svg" alt="" />
      </div>
      <nav>
        <Link to={'/'} className="active">
          Home
        </Link>
        <Link to={'/about'} className="active">
          About
        </Link>
        <Link to={'/'} className="active">
          Blog
        </Link>
        <Link to={'/'} className="active">
          project
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
