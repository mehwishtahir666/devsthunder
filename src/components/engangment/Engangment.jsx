import React from 'react'
import "./engangment.css"
import img1 from "./images/colllegues-.png"
import img2 from './images/70x70-3.png'

 const Engangment = () => {
  return (
    <div className='about'>
       
    <div className="left">
        <img className='img1' src={img1} alt="" />
        <div className="box-1">
            <ul>
                <li><img src={img2} alt="" /></li>
                <li className='li1'><p>Dedicated <br /> Theam</p></li>
            </ul>
        </div>
        <div className="box-1 box2">
            <ul>
                <li><img src={img2} alt="" /></li>
                <li className='li1'><p>Product <br />Development</p></li>
            </ul>
        </div>
        <div className="box-1 box3">
            <ul>
                <li><img src={img2} alt="" /></li>
                <li className='li1'><p>Staf/ Resource <br />Augmentation</p></li>
            </ul>
        </div>
    </div>
    <div className="right">
        <h1>Engagement Models We <span>offer</span></h1>
        <p className='p1'>Your success journey starts with the right engagement model you choose for your business. We offer cost-efficient engagement and result oriented models that help businesses to reduce cost and control expenses. Let’s work together!</p>
        <ul>
           <li> <img className='logo' src={img2} alt="" /></li>
            <li>
                <p className='p2'>Staff/Resource Augmentation</p>
                <p className='p3'>Our staff augmentation model is intended to help companies find the right skills for their project.</p>
            </li>
        </ul>
        <ul>
           <li> <img className='logo' src={img2} alt="" /></li>
            <li>
                <p className='p2'>Product Development</p>
                <p className='p3'>The project-based model is designed to help you get your product built from ideation to deployment by a team of expert software engineering consultants.</p>
            </li>
        </ul>
        <ul>
           <li> <img className='logo' src={img2} alt="" /></li>
            <li>
                <p className='p2'>Dedicated Development Team</p>
                <p className='p3'>Our team of developers is highly qualified and dedicated to delivering quality development services to clients.</p>
            </li>
        </ul>
    </div>
</div>
  )
}

export default Engangment
