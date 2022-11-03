import React from 'react';
import Footer from './footer';
import Navbar from './navbar';

const Layout = ({ children, theme }) => {
  console.log(theme);
  return (
    <div className={theme}>
      <Navbar theme={theme} />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
