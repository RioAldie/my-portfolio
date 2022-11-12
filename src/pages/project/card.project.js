import React from 'react';
import PropTypes from 'prop-types';

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
            href={link}
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

CardProject.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
  image: PropTypes.string,
  tools: PropTypes.string,
};
export default CardProject;
