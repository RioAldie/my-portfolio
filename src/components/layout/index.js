import React from 'react';
import Navbar from './navbar';

const Layout = ({ children, theme }) => {
  console.log(theme);
  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  );
};

export default Layout;
