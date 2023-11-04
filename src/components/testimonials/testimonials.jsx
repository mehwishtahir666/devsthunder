import React from 'react'
import './testimonials.css'
import img1 from './images/jhsdj.jpg'
import img2 from './images/download.jpg'
import {BsStarFill,BsArrowRightShort} from "react-icons/bs";

const Testimonials = () => {
  return (
    <div className="testimonial">
      <div className="banner">
     <div className="text">
     <h1>Testimonials</h1>
      <p>What Are  They Saying About Us</p>
     </div>
      </div>
    <div className="testimon">
        <div className="left">
          <img src={img1} alt="" />
        </div>
        <div className="right">
          <p>AptEase exceeded my expectations with their exceptional service. The team understood my requirements perfectly and created a seamless user experience on my e-commerce platform. They were proactive, responsive, and provided regular updates throughout the development process. I am extremely satisfied with the end result and would definitely choose AptEase again for future projects.</p>  
           <p className='name'>Savannah Gray</p>
           <ul>
            <li> <BsStarFill/></li>
            <li> <BsStarFill/></li>
            <li> <BsStarFill/></li>
            <li> <BsStarFill/></li>
            <li> <BsStarFill/></li>
           </ul>
            <button>Learn More <BsArrowRightShort/></button>
        </div>
    </div>
    <div className="testimon">
        <div className="left">
          <img src={img1} alt="" />
        </div>
        <div className="right">
          <p>AptEase exceeded my expectations with their exceptional service. The team understood my requirements perfectly and created a seamless user experience on my e-commerce platform. They were proactive, responsive, and provided regular updates throughout the development process. I am extremely satisfied with the end result and would definitely choose AptEase again for future projects.</p>  
           <p className='name'>Savannah Gray</p>
           <ul>
            <li> <BsStarFill/></li>
            <li> <BsStarFill/></li>
            <li> <BsStarFill/></li>
            <li> <BsStarFill/></li>
            <li> <BsStarFill/></li>
           </ul>
            <button>Learn More <BsArrowRightShort/></button>
        </div>
    </div>
   </div>
  )
}

export default Testimonials
