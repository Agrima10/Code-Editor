// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Logo from './components/Logo';
import Navbar from './components/Navbar';
import Tagline from './components/Tagline';

function App() {
  const [mode, setMode] = useState('dark');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#150050'
    }
    else {
      setMode('light');
      // document.body.style.backgroundColor = '#D67D3E'
      document.body.style.backgroundColor = '#00C9B1'
    }
  }
  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      {/* <div className="container my-3">
        <h1>This our Code Editor Home Page</h1>
      </div> */}
      <Tagline/>
      <Logo/>
      <About/>
      <Footer/>
    </>
  )
}

export default App;
