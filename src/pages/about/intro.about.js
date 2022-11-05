import React from 'react';
import SocialsRow from '../../components/social/row.social';

const IntroAbout = () => {
  return (
    <section className="w-100 about ">
      <div className="about-bg">rioaldie</div>
      <div className=" about-hero">
        <p className="about-sub-text">Hi there, I'm Rio Aldi</p>
        <p className="about-main-text">React Javascript Developer</p>
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
        <SocialsRow />
      </div>
    </section>
  );
};

export default IntroAbout;
