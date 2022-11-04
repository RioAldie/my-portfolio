import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ theme }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-none">
      <div className="container-fluid ">
        <div class="navbar-band">
          <img src="/image/ae-logo-svg.svg" alt="" />
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarNavAltMarkup">
          <div className="navbar-nav w-100 d-flex justify-center">
            <Link className="nav-link" aria-current="page" to={'/'}>
              Home
            </Link>
            <Link className="nav-link" to={'/about'}>
              About
            </Link>
            <Link className="nav-link" to={'/project'}>
              Project
            </Link>
            <Link className="nav-link" to={'/blog'}>
              Blog
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
