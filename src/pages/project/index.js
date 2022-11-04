import React from 'react';
import Layout from '../../components/layout';
import './project.css';
import dataProject from '../../service/project';
import CardProject from './card.project';

const Project = () => {
  return (
    <>
      <Layout theme={'dark'}>
        <section className="project">
          <div className="project-path">Selected Projects</div>
          {dataProject.map((project, i) => {
            const { title, image, link, tools } = project;
            return (
              <CardProject
                key={i}
                title={title}
                link={link}
                image={image}
                tools={tools}
              />
            );
          })}
        </section>
        <section className="contact">
          <div className="contact-container">
            <p>Interest working with me ?</p>
            <div className="box-buttons">
              <a href="mailto:rioaldierwanto@gmail.com">
                <div className="btn-email">
                  Lest Talk
                  <img src="/image/mug-coffe-icon.svg" alt="cofee" />
                </div>
              </a>
              <a href="https://drive.google.com/file/d/1GwU2cf74WQ2nRZX5lsxeumKtsI9p-FBX/view?usp=sharing">
                <div className="btn-download">
                  Download CV
                  <img src="/image/download.svg" alt="download" />
                </div>
              </a>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Project;
