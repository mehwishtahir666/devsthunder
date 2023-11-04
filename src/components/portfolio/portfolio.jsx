import React from 'react'
import './portfolio.css'
import { BsArrowRightShort } from "react-icons/bs";
import display from './images/ezgif.com-optimize__2___2_.gif';
import mobile from './images/mobile2.gif'
import laptop from "./images/displayy.gif"
const Portfolio = () => {
  return (
    <>
     <div className='profile'>
    {/* <h1>Our Portfolio</h1> */}
    <div className="slider">
            <div className="left">
                <div className="cercle">
    <div class="container">
        <div class="screen monitor">
            <div class="display">
              <img className='displayimg' src={display } alt="" />
              {/* <video src="./images/1011.mp4"></video> */}
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
                <h1>Day and Night</h1>
                <p className='p-1'>E-commerece Website</p>
                <ul>
                 <li><button className='btn1'>View Projects</button></li>
                 <li><button className='btn1'>View HTML</button></li>
                 <li><button className='btn1'>View CSS</button></li>                
                 <li><button className='btn1'>JAVA SCRIPT</button></li>
                 <li><button className='btn1'>REACT</button></li>                
                 </ul>
                <div className="boxdiv ">
                 
                <div className='box-1 '>
                 <div className="box-speed box-speed1">
                    <h1>Modern <br />Design </h1>
                    <div className="line"><div className="child"></div></div>
                    <p>100%</p>
                 </div>
                </div>
                <div className='box-1'>
                  <div className="box-speed box-speed2">
                    {/* <h1>Responsive <br /> Design</h1> */}
                    <div className="line"><div className="child"></div></div>        
                    <p>100%</p>
                   </div>
                </div>
                <div className='box-1'>
                 <div className="box-speed box-speed3">
                    <h1>Fair</h1>
                    <div className="line"><div className="child"></div></div>
                    <p>100%</p>
                 </div>
                </div>
                </div>
                <button className='btn-1'>Visit this website</button>
            </div>
        </div>
    </div>
    {/* //////////////////// */}

    </>
   
  )
}

export default Portfolio