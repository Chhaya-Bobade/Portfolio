import React from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Education from './components/education/Education';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Slider from './components/slider/Slider';


function App() {
  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Slider/>
    <Education/>
    <Skills/>
    <Services/>
    <Portfolio/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
