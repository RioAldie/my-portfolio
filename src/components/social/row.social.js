import React from 'react';

const SocialsRow = () => {
  return (
    <div className="box-social-media-row">
      <p>Find me :</p>
      <nav>
        <a
          href="https://github.com/RioAldie"
          target="_blank"
          rel="noreferrer">
          <img src="/image/github-icon-white.svg" alt="github-icon" />
        </a>
        <a
          href="https://www.instagram.com/rioaldie/"
          target="_blank"
          rel="noreferrer">
          <img
            src="/image/instagram-white.svg"
            alt="instagram-icon"
          />
        </a>
        <a
          href="https://wa.me/+62895702695858"
          target="_blank"
          rel="noreferrer">
          <img src="/image/whatsapp-white.svg" alt="whatsapp-white" />
        </a>
        <a
          href="https://www.linkedin.com/in/rio-aldi-erwanto-44376820b/"
          target="_blank"
          rel="noreferrer">
          <img src="/image/linkedin-white.svg" alt="linkedin-icon" />
        </a>
      </nav>
    </div>
  );
};

export default SocialsRow;
