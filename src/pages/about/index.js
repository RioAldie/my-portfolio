import React from 'react';
import Layout from '../../components/layout';
import './about.css';

const About = () => {
  return (
    <>
      <Layout>
        <section className="about">
          <div className="about-bg">rioaldie</div>
          <div className="about-hero">
            <p className="about-sub-text">Hi there, I'm Rio Aldi</p>
            <p className="about-main-text">
              React Javascript Developer
            </p>
            <p className="about-body-text">
              {`
            I’m from Indonesia and have been studying Web Development
            Especially Javascript for more than 2 years. I’ve Learned
            React Roadmaps like Lifecycle, React-Hooks, Advanced
            Hooks, React-Router, Context, Redux, Styled Component,
            Material UI, Fetching Data, and Next JS. I’ve been
            learning in Dicoding, Buildwithangga, and Youtube for the
            last 2 years, and right now I am learning a Front-end
            Developer React on Skilvul.`}
            </p>
            <div className="box-social-media-row">
              <p>Find me :</p>
              <nav>
                <a
                  href="https://github.com/RioAldie"
                  target="_blank"
                  rel="noreferrer">
                  <img
                    src="./asset/github-icon-white.svg"
                    alt="github-icon"
                  />
                </a>
                <a
                  href="https://www.instagram.com/rioaldie/"
                  target="_blank"
                  rel="noreferrer">
                  <img
                    src="./asset/instagram-white.svg"
                    alt="instagram-icon"
                  />
                </a>
                <a
                  href="https://wa.me/+62895702695858"
                  target="_blank"
                  rel="noreferrer">
                  <img
                    src="./asset/whatsapp-white.svg"
                    alt="whatsapp-white"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/rio-aldi-erwanto-44376820b/"
                  target="_blank"
                  rel="noreferrer">
                  <img
                    src="./asset/linkedin-white.svg"
                    alt="linkedin-icon"
                  />
                </a>
              </nav>
            </div>
          </div>
        </section>
        <section className="tool">
          <div className="tool-path">Skills and Frameworks</div>
          <div className="tool-container">
            <div className="tool-box">
              <img src="./asset/html.png" alt="html" />
              <p className="tool-name">Html</p>
            </div>
            <div className="tool-box">
              <img src="./asset/css.svg" alt="css" />
              <p className="tool-name">Css</p>
            </div>
            <div className="tool-box">
              <img src="./asset/js-logo.svg" alt="js" />
              <p className="tool-name">Javascript</p>
            </div>
            <div className="tool-box">
              <img src="./asset/node.png" alt="node" />
              <p className="tool-name">Node</p>
            </div>
            <div className="tool-box">
              <img src="./asset/reactjs.svg" alt="reactjs" />
              <p className="tool-name">React</p>
            </div>
            <div className="tool-box">
              <img src="./asset/mui.svg" alt="mui" />
              <p className="tool-name">MaterialUI</p>
            </div>
            <div className="tool-box">
              <img src="./asset/next.svg" alt="next.js" />
              <p className="tool-name">Next.js</p>
            </div>
            <div className="tool-box">
              <img src="./asset//tailwind.svg" alt="tailwind" />
              <p className="tool-name">Tailwind</p>
            </div>
            <div className="tool-box">
              <img src="./asset/figma.svg" alt="figma" />
              <p className="tool-name">Figma</p>
            </div>
          </div>
        </section>
        <a href="./project.html" className="a-next">
          <div className="next-project">
            Projects{' '}
            <img src="./asset/arrow-right-white.svg" alt="" />
          </div>
        </a>
        <div className="ball-red">
          <img src="./asset/ball-red.svg" alt="" />
        </div>
      </Layout>
    </>
  );
};

export default About;
