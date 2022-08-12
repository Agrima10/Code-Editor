import React from 'react';
import Arduino from './arduino-logo-1.png';
import Django from '../django.png';
import C from '../c.jpg';
import CPP from '../c++.jpg';
import java from '../java_logo_640.jpg';
import javas from '../javascript.png';
import './Logo.css'

export default function Logo() {
  return (
    <div className="container my-5 img-container">
      <center>
        <img src={Arduino} alt="Arduino" height = '100px' width = '100px'/>
        <img src={Django} alt="Django" height = '100px' width = '100px' />
        <img src={C} alt="C" height = '100px' width = '100px'/>
        <img src={CPP} alt="C++" height = '100px' width = '100px'/>
        <img src={java} alt="Java" height = '100px' width = '80px'/>        
        <img src={javas} alt="JavaScript" height = '100px' width = '150px'/>        
        </center>        
    </div>
  )
}
