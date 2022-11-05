import React from 'react';

const CardProject = ({ title, image, link, tools }) => {
  return (
    <div
      className="card bg-dark"
      style={{
        width: '80%',
        marginTop: '50px',
      }}>
      <img
        src={`/image/${image}`}
        className="card-img-top"
        alt={title}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p class="card-text">{tools}</p>
      </div>
      <div className="card-body">
        <div className="d-flex flex-row project-navs">
          <div className="nav">
            <img src="/image/case.svg" alt="view" />
            Study Case
          </div>
          <a
            href="https://getmovie-rioaldie.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="text-decoration-none">
            <div className="nav">
              <img src="/image/link.svg" alt="link" />
              Visit Website
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardProject;
