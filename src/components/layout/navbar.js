import React from 'react';

const Navbar = () => {
  return (
    <header>
      <div className="logo">
        <img src="/image/ae-logo-svg.svg" alt="" />
      </div>
      <nav>
        <a href="/index.html" className="active">
          Home
        </a>
        <a href="/about.html">About</a>
        <a href="/project.html">Project</a>
        <a href="/blog.html">Blog</a>
      </nav>
    </header>
  );
};

export default Navbar;
