import React from 'react';

const SkillsBox = () => {
  return (
    <section className="tool">
      <div className="w-50 start tool-path">
        Skills and Frameworks
      </div>
      <div className="tool-container">
        <div className="tool-box">
          <img src="/image/html.png" alt="html" />
          <p className="tool-name">Html</p>
        </div>
        <div className="tool-box">
          <img src="/image/css.svg" alt="css" />
          <p className="tool-name">Css</p>
        </div>
        <div className="tool-box">
          <img src="/image/js-logo.svg" alt="js" />
          <p className="tool-name">Javascript</p>
        </div>
        <div className="tool-box">
          <img src="/image/node.png" alt="node" />
          <p className="tool-name">Node</p>
        </div>
        <div className="tool-box">
          <img src="/image/reactjs.svg" alt="reactjs" />
          <p className="tool-name">React</p>
        </div>
        <div className="tool-box">
          <img src="/image/mui.svg" alt="mui" />
          <p className="tool-name">MaterialUI</p>
        </div>
        <div className="tool-box">
          <img src="/image/next.svg" alt="next.js" />
          <p className="tool-name">Next.js</p>
        </div>
        <div className="tool-box">
          <img src="/image//tailwind.svg" alt="tailwind" />
          <p className="tool-name">Tailwind</p>
        </div>
        <div className="tool-box">
          <img src="/image/figma.svg" alt="figma" />
          <p className="tool-name">Figma</p>
        </div>
      </div>
    </section>
  );
};

export default SkillsBox;
