import React from 'react';
import "./education.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";

// import Swiper core and required modules
import {Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
const data = [
  {
    avatar : AVTR1,
    name : 'Sant Gadge Baba Amravati University, Amravati.',
    degree :  'Bachelor of Engineering (Electrical)'
  }, 
  {
    avatar : AVTR2,
    name : 'Edyst, Hyderabad.',
    degree : 'Full Stack Web Development'
  }

]

const Education = () => {
  return (
    <section id='education'>
    <h2>Education</h2>

    <Swiper className="container education__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
    {
      data.map(({avatar, name, degree}, index) => {
        return(
          <SwiperSlide key={index} className='education'>
        <div className="education__avatar">
          <img src={avatar} alt="Avatar One"/>
         </div>
         <h5 className='education__degree'>{degree}</h5>
          <small className='education__name'>{name}</small>
      </SwiperSlide>
        )
      })
    }
    </Swiper>
  </section>
  )
}

export default Education
