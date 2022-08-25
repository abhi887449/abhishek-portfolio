import React from 'react'
import About from './components/About';
import Education from './components/Education';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Whatido from './components/Whatido';

function App() {
  return (
    <>
    <Intro/>
    <Whatido/>
    <Education/>
    <Skills/>
    <Projects/>
    <About/>
    </>
  );
}

export default App;
