import React from 'react'
import './industries.css'
import img1 from './images/icon-1 (1).png'
import img2 from './images/icon-8.png'
import img3 from './images/icon-10.png'
import img4 from './images/icon-11.png'
import img5 from './images/icon-12.png'
import img6 from './images/icon-2.png'
import img7 from './images/icon-3.png'
import img8 from './images/icon-4.png'
import img9 from './images/icon-5.png'
import img10 from './images/icon-6.png'
import img11 from './images/icon-7.png'
import img12 from './images/icon-9.png'
const Industries = () => {
  return (
    <div className='domain'>
        <div className="center">
            <img src={img11} alt="" />
        <p className='p1'>Industries We Work For</p>
            <h1>Helping</h1>
            <h1>Businesses in <span className='indsH'>all</span> </h1>
            <h1 className='indsH'>Domains</h1>
      
           <p className='p2'>web development services play a crucial role in helping businesses establish a strong online presence, streamline operations, and leverage digital technologies for growth across diverse industry domains.</p>
        </div>
        <div className="right">
        <div className="box">
                <img src={img1} alt="" />
                <p>Construction</p>
            </div>
            
            <div className="box box2">
                <img src={img2} alt="" />
                <p>D'Cluttering</p>
            </div>
            <div className="box box">
                <img src={img3} alt="" />
                <p>Textile</p>
            </div>
            <div className="box box2">
                <img src={img4} alt="" />
                <p>Corporate Business</p>
            </div>
            <div className="box box2">
                <img src={img5} alt="" />
                <p>Education</p>
            </div>
            <div className="box box">
                <img src={img6} alt="" />
                <p>Digital Marketing</p>
            </div>
            <div className="box box2">
                <img src={img7} alt="" />
                <p>Restaurant</p>
            </div>
            <div className="box box">
                <img src={img11} alt="" />
                <p>Retail</p>
            </div>
            <div className="box box">
                <img src={img12} alt="" />
                <p>Chemical</p>
            </div>
            <div className="box box2">
                <img src={img8} alt="" />
                <p>Clothing</p>
            </div>
            <div className="box box">
                <img src={img9} alt="" />
                <p>Trading</p>
            </div>
            <div className="box box2">
                <img src={img10} alt="" />
                <p>Ecommerce Development</p>
            </div>
        </div>
    </div>
  )
}

export default Industries