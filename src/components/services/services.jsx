import React, { useState } from 'react'
import { BsBagCheck, BsDot, BsFillRocketFill, BsSearchHeartFill } from "react-icons/bs";
import Carousel from "react-elastic-carousel";
import { BiPlayCircle, BiSolidSearchAlt2 } from "react-icons/bi";
import { IoMailSharp, IoShareSocial, IoLogoGoogle } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { AiOutlineAmazon } from "react-icons/ai";
import img1 from './img7.webp'
import './services.css'
import Spliter from '../spliter/spliter';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
  { width: 850, itemsToShow: 3 },
  { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
  { width: 1450, itemsToShow: 5 },
  { width: 1750, itemsToShow: 6 },
];
const Servicess = () => {
  const [items, setItems] = useState(["/images/mango.png", "/images/banana.png", "/images/mango.png", "/images/banana.png","/images/mango.png", "/images/banana.png", "/images/mango.png"]);
  return (
    <div className='services-1'>
      <div className="banner"> 
        <div className="textbox"> 
          <h1>We Build Beautiful Websites</h1>
          <p className='p2'>Bring in More Leads With a New Website</p>
          <li><p><button className='btnn'>START YOUR PROJECT</button> </p> <p className='playbtn'><BiPlayCircle /></p> </li>
        </div>
      </div>
      <div className="cont">
        <div className="left">
          <h1>Our <span>Real Estate</span></h1>
          <h1>Digital Marketing</h1>
          <h1>Services</h1>
          <p >At BrandCurb, we offer a comprehensive suite of digital marketing services tailored specifically to the needs of real estate businesses. From search engine optimization to social media marketing, we have the expertise and experience to help you succeed online.</p>
          <button>Book a free Consultation</button>
        </div>
        <div className="right">
          <div >
            <Carousel id='crouseee' className='crousee' breakPoints={breakPoints} >
              {items.map((item) => (
                <div className='padd'>
                  <div className="box">
                    <h3>Website Design &</h3>
                    <h3>Development</h3>
                    <p className='p-1'>Website Design & Development</p>
                    <img src={item} alt="" />
                    <li><p> <span>from</span> $480 month</p> <BsBagCheck className='icon' />  </li>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
      <Spliter />
      <div className="container-2">
        <div className="box-1">
          <p className='icn-2'><BiSolidSearchAlt2 /></p>
          <h1>Paid Search </h1>
          <div className="line"></div>
          <ul>
            <li><BsDot /> Access to subject matter expert</li>
            <li><BsDot /> Talent scalability</li>
            <li><BsDot /> Log term cost savings </li>
            <li><BsDot /> Easy and fast hiring</li>
          </ul>
          <button className='lern'>LEARN MORE</button>
        </div>
        <div className="box-1">
          <p className='icn-2 icn-3 '><BsSearchHeartFill /></p>
          <h1>Search engine </h1>
          <div className="line line2"></div>
          <ul>
            <li><BsDot /> Access to subject matter expert</li>
            <li><BsDot /> Talent scalability</li>
            <li><BsDot /> Log term cost savings </li>
            <li><BsDot /> Easy and fast hiring</li>
          </ul>
          <button className='lern lern2'>LEARN MORE</button>
        </div>
        <div className="box-1">
          <p className='icn-2 icn-4'><IoMailSharp /></p>
          <h1>Email marketing </h1>
          <div className="line line3"></div>
          <ul>
            <li><BsDot /> Access to subject matter expert</li>
            <li><BsDot /> Talent scalability</li>
            <li><BsDot /> Log term cost savings </li>
            <li><BsDot /> Easy and fast hiring</li>
          </ul>
          <button className='lern lern3'>LEARN MORE</button>
        </div>
        <div className="box-1">
          <p className='icn-2 icn-5'><BsFillRocketFill /></p>
          <h1>Conversion rate </h1>
          <div className="line line4"></div>
          <ul>
            <li><BsDot /> Access to subject matter expert</li>
            <li><BsDot /> Talent scalability</li>
            <li><BsDot /> Log term cost savings </li>
            <li><BsDot /> Easy and fast hiring</li>
          </ul>
          <button className='lern lern4'>LEARN MORE</button>
        </div>
        <div className="box-1">
          <p className='icn-2 icn-6'><IoShareSocial /></p>
          <h1>Social media </h1>
          <div className="line line5"></div>
          <ul>
            <li><BsDot /> Access to subject matter expert</li>
            <li><BsDot /> Talent scalability</li>
            <li><BsDot /> Log term cost savings </li>
            <li><BsDot /> Easy and fast hiring</li>
          </ul>
          <button className='lern lern5'>LEARN MORE</button>
        </div>
        <div className="box-1">
          <p className='icn-2 icn-7'><IoLogoGoogle /></p>
          <h1>Google shopping </h1>
          <div className="line line6"></div>
          <ul>
            <li><BsDot /> Access to subject matter expert</li>
            <li><BsDot /> Talent scalability</li>
            <li><BsDot /> Log term cost savings </li>
            <li><BsDot /> Easy and fast hiring</li>
          </ul>
          <button className='lern lern6'>LEARN MORE</button>
        </div>
        <div className="box-1">
          <p className='icn-2 icn-8'><FaUsers /></p>
          <h1>influencer marketing </h1>
          <div className="line line7"></div>
          <ul>
            <li><BsDot /> Access to subject matter expert</li>
            <li><BsDot /> Talent scalability</li>
            <li><BsDot /> Log term cost savings </li>
            <li><BsDot /> Easy and fast hiring</li>
          </ul>
          <button className='lern lern7'>LEARN MORE</button>
        </div>
        <div className="box-1">
          <p className='icn-2 icn-9'><AiOutlineAmazon /></p>
          <h1>Amazon shopping </h1>
          <div className="line line8"></div>
          <ul>
            <li><BsDot /> Access to subject matter expert</li>
            <li><BsDot /> Talent scalability</li>
            <li><BsDot /> Log term cost savings </li>
            <li><BsDot /> Easy and fast hiring</li>
          </ul>
          <button className='lern lern8'>LEARN MORE</button>
        </div>
      </div>
    </div>
  )
}
export default Servicess