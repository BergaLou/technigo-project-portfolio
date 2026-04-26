import React from "react";
import data from "./data.json";
import Hero from './components/Hero.jsx';
import Skills from './components/Skills.jsx';
import './App.css';

export const App = () => {
  return <div>
    <Hero />
    <Skills />
  </div>
}

export default App;