import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Logo from './components/Logo';
import Navbar from './components/Navbar';
import Tagline from './components/Tagline';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

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
      <Router>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Routes>
        <Route exact path="/" element={<><Tagline></Tagline><Logo></Logo><About></About></>} />
        <Route exact path="/faqs" element={<FAQ mode={mode}/>} />
      </Routes>      
      <Footer/>      
      </Router>
    </>
  )
}

export default App;
