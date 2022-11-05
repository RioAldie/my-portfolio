import React from 'react';
import Layout from '../../components/layout';
import SkillsBox from '../../components/skills';
import './about.css';
import IntroAbout from './intro.about';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <Layout theme={true}>
        <IntroAbout />
        <SkillsBox />
        <Link to="/project" className="a-next">
          <div className="next-project">
            Projects <img src="/image/arrow-right-white.svg" alt="" />
          </div>
        </Link>
        <div className="ball-red">
          <img src="/image/ball-red.svg" alt="" />
        </div>
      </Layout>
    </>
  );
};

export default About;
