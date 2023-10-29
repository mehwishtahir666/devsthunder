import React from 'react'
import './portfolio.css'
import { BsArrowRightShort } from "react-icons/bs";
import display from './images/ezgif.com-optimize__2___2_.gif';
import mobile from './images/mobile2.gif'
import laptop from "./images/displayy.gif"

const Portfolio = () => {
  return (
    <div className='profile'>
    <h1>Our Portfolio</h1>
    <div className="slider">
            <div className="left">
                <div className="cercle">
    <div class="container">
        <div class="screen monitor">
            <div class="display">
              {/* <img className='displayimg' src={display } alt="" /> */}
              <video src="./images/1011.mp4"></video>
            </div>
          <div class="base">
            <div class="grey-shadow"></div>
            <div class="foot top"></div>
            <div class="foot bottom"></div>
            <div class="shadow"></div>
   
          </div>
        </div>
          <div class="laptop">
                <div class="display">
                  <img src={laptop} alt="" />
                </div>
            <div class="btm"></div>
            <div class="shadow"></div>
          </div>
          <div class="phone">
            <div class="display">
              <img className='mobileimg' src={mobile} alt=""/>
            </div>   
         
          <div class="shadow"></div>        
          </div>
          
        </div>
                </div>
            </div>
            <div className="right">
                <h1>medAge</h1>
                <p className='p-1'>Healthcare Website</p>
                <div className="boxdiv ">
                <div className='box-1 '>
                 <li><p>View projects</p> <BsArrowRightShort/></li>
                 <div className="box-speed box-speed1">
                    <h1>98<span>/ 100</span></h1>
                    <div className="line"><div className="child"></div></div>
                    <p>Page Speed</p>
                 </div>
                </div>
                <div className='box-1'>
                 <li><p>View HTML</p> <BsArrowRightShort/></li>
                 <div className="box-speed box-speed2">
                    <h1>Passed</h1>
                    <p>W3C <br /> validation</p>
                 </div>
                </div>
                <div className='box-1'>
                 <li><p>View CS</p> <BsArrowRightShort/></li>
                 <div className="box-speed box-speed3">
                    <h1>Fair</h1>
                    <p>Mobile <br /> friendly</p>
                 </div>
                </div>
                </div>
                <button>Visit our Profile</button>
            </div>
        </div>
    </div>
  )
}

export default Portfolio