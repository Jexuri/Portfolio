import "./AboutContentStyles.css"

import React from 'react'
import {Link} from "react-router-dom"
import  aboutimg from "../Assets/aboutimg.jpeg"
import  contact1 from "../Assets/contact1.jpeg"

const AboutContent = () => {
  return (
    <div className="about">
     <div className="left">
      <h1>Who Am I?</h1>
      <p>I'm a web developer, I create responsive react websites.</p>
      <Link to="/contact">
      <button className="btn">Contact</button>
      </Link>
      </div> 

      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={aboutimg} className="img" alt="true"/>
          </div>
          <div className="img-stack bottom">
            <img src={contact1} className="img" alt="true"/>

          </div>

        </div>

      </div>
    </div>
  )
}
export default AboutContent
