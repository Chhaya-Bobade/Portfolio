import React from 'react';
import "./about.css";
import ME from '../../assets/me1-unscreen.gif';


const About = () => {
  return (
    <section id='about'>
    <h5>Get To Know</h5>
    <h2>About Me</h2>
    <div className="container about__container">
      <div className='about__me'>
        <div className="about__me-image">
          <img src={ME} alt="About Image" />
        </div>
      </div>
      <div className="about__content">
        <p>Front End Web Developer who loves coding, open source, and the web platform. I use HTML5, CSS3, JavaScript, ReactJS for coding the websites with the dazzling designs. </p>
        <a href="#contact" className='btn btn-primary'> Let's Talk</a>
      </div>
    </div>
  </section>
  )
}

export default About


