import React from 'react';

const Footer = () => {
  return (
    <footer className=" w-100 h-100 d-flex flex-column flex-md-row">
      <div className="box-footer">
        <img src="/image/ae-logo-svg.svg" alt="logo" />
        <p>
          For Bussines inquiry please send email to{' '}
          <span>rioaldierwanto@email.com</span>{' '}
        </p>
      </div>
      <div className="box-footer">
        <div className="page">
          <a href="/index.html">Home</a>
          <a href="/about.html">About</a>
          <a href="/project.html">Project</a>
          <a href="/blog.html">Blog</a>
        </div>
      </div>
      <div className="box-footer">
        <p>Find me :</p>
        <nav>
          <a href="https://github.com/RioAldie" target="_blank">
            <img
              src="/image/github-icon-white.svg"
              alt="github-icon"
            />
          </a>
          <a
            href="https://www.instagram.com/rioaldie/"
            target="_blank">
            <img
              src="/image/instagram-white.svg"
              alt="instagram-icon"
            />
          </a>
          <a href="https://wa.me/+62895702695858" target="_blank">
            <img
              src="/image/whatsapp-white.svg"
              alt="whatsapp-icon"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/rio-aldi-erwanto-44376820b/"
            target="_blank">
            <img
              src="/image/linkedin-white.svg"
              alt="linkedin-icon"
            />
          </a>
        </nav>
        <p>© 2022 Rio Aldie</p>
      </div>
    </footer>
  );
};

export default Footer;
