import React from 'react';
import {
  ButtonDownload,
  ButtonEmail,
} from '../../components/buttons';
import Layout from '../../components/layout';
import SocialBar from '../../components/social';
import './home.css';

const Home = () => {
  return (
    <>
      <Layout theme={false}>
        <section className="hero">
          <div className="box-hero">
            <h1 className="hero-text">
              Rio Aldi Erwanto<span style={{ color: 'red' }}>.</span>
            </h1>
            <img src="./asset/line.svg" alt="" />
            <h4 className="sub-hero">Javascript Website Developer</h4>
          </div>
          <div className=" hero-buttons ">
            <ButtonEmail />
            <ButtonDownload />
          </div>
        </section>
        <SocialBar />
        <a href="/about.html">
          <div className="next">
            About <img src="/image/arrow-right.svg" alt="" />
          </div>
        </a>
        <div className="ball">
          <img src="/image/ball.svg" alt="ball" />
        </div>
      </Layout>
    </>
  );
};

export default Home;
