import React from 'react';
import "./services.css";
import {ImMobile2} from "react-icons/im";
import {SiSpeedtest} from "react-icons/si";
import {IoIosRocket} from "react-icons/io";


const Services = () => {
  return (
    <section id='services'>
    <div className="container services__container">

     {/*============================= Start of UI/UX =================================*/}
      <article className='service'>
        <div className="service__head">
        <SiSpeedtest className='icon'/>
        </div>
        <h2>Fast</h2>
        <p>Fast load times and lag free interaction, my highest priority</p>
      </article>
      {/*============================= End of UI/UX =================================*/}
      <article className='service'>
        <div className="service__head">
       <ImMobile2 className='icon'/>
        </div>
        <h2>Responsive</h2>
        <p>My layouts will work on any device, big or small.</p>
      </article>
    {/*============================= Start of Web Development =================================*/}
    <article className='service'>
        <div className="service__head">
       <IoIosRocket className='icon'/>
        </div>
        <h2>Dynamic</h2>
        <p>Websites don't have to be static, I love making pages come to life.</p>
      </article>
      {/*============================= End of Content Creation =================================*/}
    </div>
  </section>
  )
}

export default Services
