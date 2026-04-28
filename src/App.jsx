import React from "react";
import data from "./data.json";
import Hero from './components/Hero.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import './App.css';

export const App = () => {
  return <div>
    <Hero />
    <Skills />
    <Projects />
  </div>
}

export default App;