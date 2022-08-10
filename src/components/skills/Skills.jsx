import React from 'react';
import "./skills.css";

const Skills = () => {
  return (
    <section id='skills'>
      <h2>What Skills I Have</h2>
        <div id="experince">
        <div className="wrapper">
        <div className="shape-1"></div>
        <div className="shape-2"></div>
          <div className="container-box">
          <h2 className='h2'>My Coding Skills</h2>
          <div className="skills">
            <div className="details">
              <span>HTML</span>
              <span>97%</span>
            </div>
            <div className="bar">
              <div id="html-bar"></div>
            </div>
          </div>


          <div className="skills">
          <div className="details">
              <span>CSS</span>
              <span>90%</span>
            </div>
            <div className="bar">
              <div id="css-bar"></div>
            </div>
          </div>

          <div className="skills">
          <div className="details">
              <span>Boostrap</span>
              <span>95%</span>
            </div>
            <div className="bar">
              <div id="boostrap-bar"></div>
            </div>
          </div>

          <div className="skills">
          <div className="details">
              <span>Tailwind CSS</span>
              <span>98%</span>
            </div>
            <div className="bar">
              <div id="tailwind-bar"></div>
            </div>
          </div>

          <div className="skills">
          <div className="details">
              <span>SASS</span>
              <span>92%</span>
            </div>
            <div className="bar">
              <div id="sass-bar"></div>
            </div>
          </div>

          <div className="skills">
          <div className="details">
              <span>JavaScript</span>
              <span>75%</span>
            </div>
            <div className="bar">
              <div id="js-bar"></div>
            </div>
          </div>

          <div className="skills">
          <div className="details">
              <span>ReactJS</span>
              <span>80%</span>
            </div>
            <div className="bar">
              <div id="react-bar"></div>
            </div>
          </div>

          <div className="skills">
          <div className="details">
              <span>NextJS</span>
              <span>85%</span>
            </div>
            <div className="bar">
              <div id="nextjs-bar"></div>
            </div>
          </div>

          <div className="skills">
          <div className="details">
              <span>Python</span>
              <span>75%</span>
            </div>
            <div className="bar">
              <div id="python-bar"></div>
            </div>
          </div>

          <div className="skills">
          <div className="details">
              <span>SEO</span>
              <span>35%</span>
            </div>
            <div className="bar">
              <div id="seo-bar"></div>
            </div>
          </div>

          <div className="skills">
          <div className="details">
              <span>FIGMA</span>
              <span>85%</span>
            </div>
            <div className="bar">
              <div id="figma-bar"></div>
            </div>
          </div>


          </div>
        </div>
        </div>
    </section>
  )
}

export default Skills
