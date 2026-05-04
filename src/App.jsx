import React from "react";
import data from "./data.json";
import Hero from './components/Hero.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Footer from './components/Footer.jsx';
import './App.css';

const App = () => {
  return (
    <div>
    <Hero />
    <Skills />
    <Projects />
    <Footer />
    </div>
  );
}

export default App;