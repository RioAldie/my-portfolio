import React from 'react';

const CardProject = ({ title, image, link, tools }) => {
  return (
    <div className="card-project">
      <div className="project-title">{title}</div>
      <div className="project-img">
        <img src={`/image/${image}`} alt={title} />
      </div>
      <div className="project-detail">
        <div className="project-navs">
          <div className="nav">
            <img src="/image/case.svg" alt="view" />
            Study Case
          </div>
          <a href={link} target="_blank" rel="noreferrer">
            <div className="nav">
              <img src="/image/link.svg" alt="link" />
              Visit Website
            </div>
          </a>
        </div>
        <div className="project-tools">{tools}</div>
      </div>
    </div>
  );
};

export default CardProject;
