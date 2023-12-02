import React from 'react'
import "./platforms.css"
import img1 from './images/fiver.png'
import img2 from './images/freelancer-removebg-preview.png'
import img3 from './images/mobile-1.png.webp'
import img4 from './images/top-developer.png.webp'
import img5 from './images/1200px-PeoplePerHour.com_2018_logo.png'
import img6 from './images/upwork-removebg-preview.png'
import img7 from './images/github-removebg-preview.png'


 const Platforms = () => {
  return (
    <div className='container-fluid platforms py-5 '>
     <h1 className='px-sm-0 px-2'>Platforms & Institutions <span className='indsH'>We are working</span></h1>
     <p className='p-1'>we are dedicated to transforming the digital landscape for freelancing platforms and institutions, providing tailored web development solutions that empower efficiency, user engagement, and overall success.Elevate the user experience on freelancing platforms with our custom web development solutions. We create intuitive interfaces, implement secure payment gateways, and optimize functionalities to enhance both client and freelancer interactions.</p>
        <div className="cont">
        <div className="left">
            <div className="box1">
                 <img src={img2} alt="" />
                 <p>Elevate your freelancing experience with our cutting-edge platform, designed to empower freelancers and connect them with exciting opportunities</p>
            </div>
            <div className="box1">
                 <img src={img1} alt="" />
                 <p>Unlock endless freelance possibilities on our Upwork-powered platform, connecting skilled professionals with businesses seeking top-tier talent.</p>
            </div>
            <div className="box1">
                 <img src={img6} alt="" />
                 <p>Experience the future of freelance collaboration on our Fiverr-inspired platform, where talent meets opportunity, and projects come to life in just a few clicks</p>
            </div>
        </div>
        <div className="center">
            <img src={img3} alt="" />
        </div>
        <div className="right">
        <div className="box1 box2">
                 <img src={img7} alt="" />
                 <p>Fuel innovation and collaboration with our GitHub-inspired platform, where code becomes a collective masterpiece and developers shape the future together.</p>
            </div>
            <div className="box1 box2">
                 <img src={img5} alt="" />
                 <p>Transform your freelance journey on our PeoplePerHour-inspired platform, connecting businesses with skilled freelancers for unparalleled collaboration and success</p>
            </div>
            <div className="box1 box2">
                 <img src={img4} alt="" />
                 <p>Empower your projects with excellence on our TopDevelopers-inspired freelancing platform, where top-tier talent converges to deliver exceptional digital solutions."</p>
            </div>
        </div>
        </div>
    </div>
  )
}
export default Platforms
