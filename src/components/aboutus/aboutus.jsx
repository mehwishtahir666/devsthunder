import React from 'react'
import "./aboutus.css"
import one from "./images/onne.webp"
import two from "./images/two.png"
import three from "./images/three.jpg"
const Aboutus = () => {
  return (
    <>
    <div className='aboutus-main'>
        <div className='text'>
            <h1>GET MORE RESUMES</h1>
            <h2>& QUALIFIED CANDIDATES</h2>
            <p>The Virtual Job Fair Software Of Choice<br/> That Engages Candidate & Recruiters</p>
            <div className='btn-box'>
                <button>WATCH A DEMO</button>
                <button className='get-btn'>GET A QUOTE</button>
            </div>
        </div>
        <div className="video-box">
            <div className='play-box'>
                <img src={three} alt="" />
                </div>
        </div>
    </div>
    <div className='chairmain-box'>
        <div className="img-box">
            <img src={one} alt="" />
        </div>
        <div className="message-box">
            <h1>Chairman's Message</h1>
            <b>Muhammad Iqbal</b>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi vitae repudiandae beatae cupiditate. Non, possimus facilis ut beatae inventore quod. Debitis corporis ea reiciendis pariatur ipsam blanditiis quia alias quam ad in! Harum dolores totam, rem voluptatibus praesentium quos. Impedit cum libero iste accusantium accusamus nobis nemo corporis et quasi!  consectetur adipisicing elit. Commodi vitae repudiandae beatae cupiditate. Non, possimus facilis ut beatae inventore quod. Debitis corporis ea reiciendis pariatur ipsam blanditiis quia alias quam ad in! Harum dolores totam, rem voluptatibus praesentium quos. Impedit cum libero iste accusantium accusamus nobis.</p>
            <button>Contact Him</button>
        </div>
        <div className="message-box scnd-img">
            <h1>Chairman's Message</h1>
            <b>Muhammad Iqbal</b>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi vitae repudiandae beatae cupiditate. Non, possimus facilis ut beatae inventore quod. Debitis corporis ea reiciendis pariatur ipsam blanditiis quia alias quam ad in! Harum dolores totam, rem voluptatibus praesentium quos. Impedit cum libero iste accusantium accusamus nobis nemo corporis et quasi!  consectetur adipisicing elit. Commodi vitae repudiandae beatae cupiditate. Non, possimus facilis ut beatae inventore quod. Debitis corporis ea reiciendis pariatur ipsam blanditiis quia alias quam ad in! Harum dolores totam, rem voluptatibus praesentium quos. Impedit cum libero iste accusantium accusamus nobis.</p>
            <button>Contact Him</button> 
        </div>
        <div className="img-box ">
            <img src={two} alt="" />
        </div>
        <div className="img-box scnd-img">
            <img src={three} alt="" />
        </div>
        <div className="message-box scnd-img">
            <h1>Chairman's Message</h1>
            <b>Muhammad Iqbal</b>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi vitae repudiandae beatae cupiditate. Non, possimus facilis ut beatae inventore quod. Debitis corporis ea reiciendis pariatur ipsam blanditiis quia alias quam ad in! Harum dolores totam, rem voluptatibus praesentium quos. Impedit cum libero iste accusantium accusamus nobis nemo corporis et quasi!  consectetur adipisicing elit. Commodi vitae repudiandae beatae cupiditate. Non, possimus facilis ut beatae inventore quod. Debitis corporis ea reiciendis pariatur ipsam blanditiis quia alias quam ad in! Harum dolores totam, rem voluptatibus praesentium quos. Impedit cum libero iste accusantium accusamus nobis.</p>
            <button>Contact Him</button>
        </div>
    </div>
    </>
  )
}

export default Aboutus