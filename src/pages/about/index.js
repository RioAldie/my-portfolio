import React from 'react';
import Layout from '../../components/layout';
import SkillsBox from '../../components/skills';
import './about.css';
import IntroAbout from './intro.about';

const About = () => {
  return (
    <>
      <Layout theme={true}>
        <IntroAbout />
        <a href="./project.html" className="a-next">
          <div className="next-project">
            Projects <img src="/image/arrow-right-white.svg" alt="" />
          </div>
        </a>
        <div className="ball-red">
          <img src="/image/ball-red.svg" alt="" />
        </div>
      </Layout>
    </>
  );
};

export default About;
