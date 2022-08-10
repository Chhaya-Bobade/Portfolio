import React from 'react';
import "./header.css";
import CTA from './CTA';
import ME from "../../assets/me2-unscreen.gif";
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
     <div className='container header__container'>
     <h2 className="title">
    <span className="title-word title-word-1">Hello </span>
    <span className="title-word title-word-2">I'm</span>
    </h2>
    <h2>
    <span className="title-word title-word-3">Chhaya </span>
    <span className="title-word title-word-4"> Bobade</span>
  </h2>
    <h5 className='text-lite'>Frontend Web Developer</h5>
    <CTA/>
    <HeaderSocials/>

    <div className='me'>
      <img src={ME} alt='me'/>
    </div>

    <a href="#contact" className='scroll__down'>Scroll Down</a>
    </div>
   </header>
  )
}

export default Header
