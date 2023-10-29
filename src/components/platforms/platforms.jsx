import React from 'react'
import "./platforms.css"
import img1 from './images/fiver.png'
import img2 from './images/freelancer-removebg-preview.png'
import img3 from './images/mobile-1.png.webp'
import img4 from './images/top-developer.png.webp'
import img5 from './images/trust-pilot.png.webp'
import img6 from './images/upwork-removebg-preview.png'
import img7 from './images/github-removebg-preview.png'


 const Platforms = () => {
  return (
    <div className='container-lg platforms'>
     <h1>Platforms & Institutions We are working </h1>
     <p className='p-1'>dispkay of credentails bestowed on siddhi infosoft by top tech influencers acress the globe</p>
        <div className="cont">
        <div className="left">
            <div className="box1">
                 <img src={img2} alt="" />
                 <p>Top Mobile App Development Company</p>
            </div>
            <div className="box1">
                 <img src={img1} alt="" />
                 <p>Top Mobile App Development Company</p>
            </div>
            <div className="box1">
                 <img src={img6} alt="" />
                 <p>Top Mobile App Development Company</p>
            </div>
        </div>
        <div className="center">
            <img src={img3} alt="" />
        </div>
        <div className="right">
        <div className="box1 box2">
                 <img src={img7} alt="" />
                 <p>Top Mobile App Development Company</p>
            </div>
            <div className="box1 box2">
                 <img src={img5} alt="" />
                 <p>Top Mobile App Development Company</p>
            </div>
            <div className="box1 box2">
                 <img src={img4} alt="" />
                 <p>Top Mobile App Development Company</p>
            </div>
        </div>
        </div>
    </div>
  )
}
export default Platforms
