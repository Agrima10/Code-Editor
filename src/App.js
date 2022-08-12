import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Tagline from './components/Tagline';
import { Dropdown } from "./components/Dropdown";
import { Editor } from "./components/Editor";
import { Highlighter } from "./components/Highlighter";
import * as themes from "react-syntax-highlighter/dist/esm/styles/hljs";
import * as languages from "react-syntax-highlighter/dist/esm/languages/hljs";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Logo from './components/Logo';
const defaultLanguage = <code>${"javascript" || Object.keys(languages).sort()[0]}</code>;
const defaultTheme = <code>${"atomOneDark" || Object.keys(themes).sort()[0]}</code>;


function App() {
  const [input, setInput] = useState("");
  const [language, setLanguage] = useState(defaultLanguage);
  const [theme, setTheme] = useState(defaultTheme);
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
        <Route exact path="/" element={<><Tagline></Tagline><Logo/><About></About></>} />
        <Route exact path="/faqs" element={<FAQ mode={mode}/>} />
        <Route exact path="/code" element={<div className='container my-5'>
          <div className="ControlsBox">
      <Dropdown
          defaultTheme={defaultLanguage}
          onChange={(e) => setLanguage(e.target.value)}
          data={languages}
        />
        <Dropdown
          defaultTheme={defaultTheme}
          onChange={(e) => setTheme(e.target.value)}
          data={themes}
        />
      </div>
      <div className="PanelsBox">
      <Editor
          placeHolder="Type your code here..."
          onChange={(e) => setInput(e.target.value)}
        />
        <Highlighter language={language} theme={themes[theme]}>
          {input}
        </Highlighter>
      </div>
    </div>} />
      </Routes>      
      <Footer/>      
      </Router>
    </>
  )
}

export default App;
