import React from 'react'
import './portfolio.css'
import { Link } from 'react-router-dom';
import {BiPlayCircle  } from "react-icons/bi";
import display from './images/ezgif.com-optimize__2___2_.gif';
import mobile from './images/mobile2.gif'
import laptop from "./images/displayy.gif"
import projects from "../../projects.json"
const Portfolio = () => {
  return (
    <>
    <div className="profiles">
    <div className="banner">
       <div className="textbox">
        <h1>We Build Beautiful Websites</h1>
        <p className='p2'>Bring in More Leads With a New Website</p>
        <li><p><button className='btnn'>START YOUR PROJECT</button> </p> <p className='playbtn'><BiPlayCircle/></p> </li>
       </div>
      </div>
    </div>
     <div className='profile'>
    {
      projects.map((obj)=>{
        return <div className="slider">
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
              {obj.tags?.map((txt)=>{
                return <li><button className='btn1'>{txt}</button></li>
              })}           
             </ul>
            <div className="boxdiv ">
             
            <div className='box-1 '>
             <div className="box-speed box-speed1">
                <h1>Modern <br />Design</h1>
                <div className="line"><div className="child"></div></div>
                <p>100%</p>
             </div>
            </div>
            <div className='box-1'>
              <div className="box-speed box-speed2">
                <h1>Responsive <br /> Website</h1>
                <div className="line"><div className="child"></div></div>        
                <p>100%</p>
               </div>
            </div>
            <div className='box-1'>
             <div className="box-speed box-speed3">
                <h1>Custom <br /> Website</h1>
                <div className="line"><div className="child"></div></div>
                <p>100%</p>
             </div>
            </div>
            </div>
            <button className='btn-1'>Visit this website</button>
            <Link to="/project"><button className='btn-1 ms-2'>Preview this website</button></Link>
        </div>
    </div>
      })
    }
    </div>
 

    </>
   
  )
}

export default Portfolio