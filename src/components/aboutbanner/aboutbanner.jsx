import React from 'react'
import "./aboutbanner.css"
import three from "./images/three.jpg"
import { BiPlayCircle } from "react-icons/bi";
const Aboutbanner = () => {
  return ( 
    <div className='aboutus-main'>
      <div className='text'>
        <h1>Get More Resumes</h1>
        <h2>& Qualified Candidates</h2>
        <p>The Virtual Job Fair Software Of Choice<br /> That Engages Candidate</p>
        <button className='btnn'>START YOUR PROJECT</button> 
      </div>
      <div className="video-box">
        <div className='play-box'>
          <img src={three} alt="" />
          <BiPlayCircle className='playbtn' />
        </div>
      </div> 
    </div>
  )
} 

export default Aboutbanner