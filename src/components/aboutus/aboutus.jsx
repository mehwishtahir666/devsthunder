import React from 'react'
import "./aboutus.css"
import sirimg from "./images/sir.d0951afd07903169553b.jpeg"
const Aboutus = () => {
  return (
    <>
    <div className='aboutus-main'>
        <div className='text'>
            <h1>Info About members of that institute</h1>
            <p>A reflection of the purpose and personality of the business and its<br/> owners or top employees.</p>
        </div>
    </div>
    <div className='chairmain-box'>
        <div className="img-box">
            <img src={sirimg} alt="" />
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
            <img src={sirimg} alt="" />
        </div>
        <div className="img-box scnd-img">
            <img src={sirimg} alt="" />
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