import React from 'react';
import PropTypes from 'prop-types';
import Footer from './footer';
import Navbar from './navbar';

const Layout = ({ children, theme }) => {
  console.log(theme);
  return (
    <div className={theme ? 'dark' : 'light'}>
      <Navbar theme={theme} />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.element,
  theme: PropTypes.bool,
};
export default Layout;
