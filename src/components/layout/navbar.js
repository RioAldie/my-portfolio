import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ theme }) => {
  const style = {
    dark: {
      color: '#fff',
    },
    light: {
      color: '#000',
    },
    navDark: 'navbar  navbar-expand-lg navbar-dark bg-none ',
    navLight: 'navbar  navbar-expand-lg navbar-light bg-none',
  };
  return (
    <nav className={theme ? style.navDark : style.navLight}>
      <div className="container-fluid ">
        <div className="navbar-band">
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
          <span
            className="navbar-toggler-icon "
            style={{
              color: '#fff',
            }}></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarNavAltMarkup">
          <div
            className="justify-center navbar-nav w-100 d-flex"
            style={{
              justifyContent: 'center',
            }}>
            <Link
              className="nav-link"
              aria-current="page"
              to={'/'}
              style={theme ? style.dark : style.light}>
              Home
            </Link>
            <Link
              className="nav-link"
              to={'/about'}
              style={theme ? style.dark : style.light}>
              About
            </Link>
            <Link
              className="nav-link"
              to={'/project'}
              style={theme ? style.dark : style.light}>
              Project
            </Link>
            <Link
              className="nav-link"
              to={'/blog'}
              style={theme ? style.dark : style.light}>
              Blog
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
