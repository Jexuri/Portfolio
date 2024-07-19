import "./HeroImgStyles.css";

import React from 'react'

import introimg2 from "../Assets/introimg2.jpeg"
import {Link} from "react-router-dom";

const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img"src=
        {introimg2} alt="introimg2"/>
        </div>
      <div className="content">
        <p>HI, WELCOME TO MY PORTFOLIO.</p>
        <h1>Fullstack Developer.</h1>
        <div> 
        <div>
    </div>
          <Link to="/project" className="btn">Projects</Link>
          <Link to="/contact" className="btn btn-light">Contact</Link>
        </div>
        
      </div>
    </div>
    
   
  )
}

export default Heroimg
 