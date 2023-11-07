import React from 'react'
import './testimonials.css'
import img1 from './images/jhsdj.jpg'
import img2 from './images/gettyimages-1345121223-612x612.jpg'
import img3 from './images/Clint_Work_select-scaled-e1582565571972.jpg'
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
    <div className="testimon xxl-ms-auto">
        <div className="left">
          <img src={img2} alt="" />
        </div>
        <div className="right">
          <p>AptEase exceeded my expectations with their exceptional service. The team understood my requirements perfectly and created a seamless user experience on my e-commerce platform. They were proactive, responsive, and provided regular updates throughout the development process. I am extremely satisfied with the end result and would definitely choose AptEase again for future projects.</p>  
           <p className='name'>Savannah Gray</p>
           <ul>
            <li> <BsStarFill/></li>
            <li> <BsStarFill/></li>
            <li> <BsStarFill/></li>
            <li> <BsStarFill/></li>
            <li className='black'> <BsStarFill/></li>
           </ul>
            {/* <button>Learn More <BsArrowRightShort/></button> */}
        </div>
    </div>
    <div className="testimon me-auto">
        <div className="left">
          <img src={img3} alt="" />
        </div>
        <div className="right">
          <p>AptEase exceeded my expectations with their exceptional service. The team understood my requirements perfectly and created a seamless user experience on my e-commerce platform. They were proactive, responsive, and provided regular updates throughout the development process. I am extremely satisfied with the end result and would definitely choose AptEase again for future projects.</p>  
           <p className='name'>Savannah Gray</p>
           <ul>
            <li> <BsStarFill/></li>
            <li> <BsStarFill/></li>
            <li> <BsStarFill/></li>
            <li> <BsStarFill/></li>
            <li className='black'> <BsStarFill/></li>
           </ul>
            {/* <button>Learn More <BsArrowRightShort/></button> */}
        </div>
    </div>
    <div className="testimon ms-auto">
        <div className="left">
          <img src={img2} alt="" />
        </div>
        <div className="right">
          <p>AptEase exceeded my expectations with their exceptional service. The team understood my requirements perfectly and created a seamless user experience on my e-commerce platform. They were proactive, responsive, and provided regular updates throughout the development process. I am extremely satisfied with the end result and would definitely choose AptEase again for future projects.</p>  
           <p className='name'>Savannah Gray</p>
           <ul>
            <li> <BsStarFill/></li>
            <li> <BsStarFill/></li>
            <li> <BsStarFill/></li>
            <li> <BsStarFill/></li>
            <li className='black'> <BsStarFill/></li>
           </ul>
            {/* <button>Learn More <BsArrowRightShort/></button> */}
        </div>
    </div>
    <div className="testimon me-auto">
        <div className="left">
          <img src={img3} alt="" />
        </div>
        <div className="right">
          <p>AptEase exceeded my expectations with their exceptional service. The team understood my requirements perfectly and created a seamless user experience on my e-commerce platform. They were proactive, responsive, and provided regular updates throughout the development process. I am extremely satisfied with the end result and would definitely choose AptEase again for future projects.</p>  
           <p className='name'>Savannah Gray</p>
           <ul>
            <li> <BsStarFill/></li>
            <li> <BsStarFill/></li>
            <li> <BsStarFill/></li>
            <li> <BsStarFill/></li>
            <li className='black'> <BsStarFill/></li>
           </ul>
            {/* <button>Learn More <BsArrowRightShort/></button> */}
        </div>
    </div>
   </div>
  )
}

export default Testimonials
