import './App.css';
import React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import About from "./components/about/About";
import Skills from './components/skills/Skills';
import Services from "./components/services/Services";
import Qualification from './components/qualification/Qualification';
import Contact from "./components/contact/Contact";
import Projects from './components/projects/Projects';

const App = () => {
  return (
    <>
    <div className="whole">
      <Header/>
      <div className="main">
        <Home/>
        <About/>
        <Skills/>
        <Services/>
        <Qualification/>
        <Projects/>
        <Contact/>
      </div>
      <Footer/>
      </div>
    </>
  );
}

export default App;
