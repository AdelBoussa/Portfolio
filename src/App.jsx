
import React from 'react';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Title from './pages/Title';
import Resume from './pages/Resume';
import './App.css' 


function App() {
  return (
    <div className="App">
      <Navbar />
      <Title />
      <Skills />
      <Projects />
      <Contact />
      <Resume />
    </div>
  );
}

export default App;

