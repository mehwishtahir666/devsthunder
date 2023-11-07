import React from 'react'
import './contact.css'
import {BiPlayCircle  } from "react-icons/bi";
import { IoMailSharp} from "react-icons/io5";
import { BiSolidUser,BiSolidBook } from "react-icons/bi";
import {FaBox,FaPencil } from "react-icons/fa6";
import { FaPhone,FaMapMarkerAlt } from "react-icons/fa";

import { HiMapPin } from "react-icons/hi2";

const Contactus = () => {
  return (
    <div className='contactus'>
      <div className="banr">
      <h1>Get in touch</h1>
      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, a!</p>
      <BiPlayCircle className='playbtn'/>
      </div>
      <div className="cont">
        <h1 className='h1'>Contact Us</h1>
        <form className='form' action="">
          <ul>
            <li className='li-inp'><p><BiSolidUser/></p> <input type="text" placeholder='YOUR NAME' /></li>
            <li className='li-inp'><p><IoMailSharp/></p> <input type="text" placeholder='YOUR EMAIL ADDRESS' /></li>
            <li className='li-inp'><p><FaBox/></p> <input type="text" placeholder='YOUR BUSSINESS NAME' /></li>
            <li className='li-inp'><p><FaPhone/></p> <input type="text" placeholder='YOUR PHONE' /></li>
            <li className='li-wi li-inp'><p><BiSolidBook/></p> <input type="text" placeholder='SELECT SERVICE' /></li>
          </ul>
        <li className='li-text'><p><FaPencil/></p>   <textarea name="" placeholder='YOUR MESSAGE' ></textarea></li>
        <div className="div-t">
           <p>Please provide your initial requirements details here to get an instant quote</p>
           <button className='button'>GET QOUTE</button>
           <p className='p2'>We will reply as soon as possible. Thank you!</p>
        </  div>
        </form>

        <div className="box-a">
         <p className='icn-1'><FaMapMarkerAlt/></p>
          <ul>
             <h1>Our Address</h1>
             <p className='p-a'>Lahore (Main Office)</p>
             <p>1108, Kashif Centre Main Shahrah-e-Faisal, near Hotel Mehran, Lahore</p>
             <p className='p-b'>Work time – 24/7</p>
          </ul>
        </div>
        <div className="box-a">
         <p className='icn-1 icn-2'><FaPhone/></p>
          <ul>
             <h1>Our Phones</h1>
             <p className='p-a'>WhatsApp</p>
             <p>+92 345 2065321</p>
             <p className='p-b'>Landline – 24/7</p>
             <p>+92 21 35220318</p>
          </ul>
        </div>
        <div className="box-a">
         <p className='icn-1 icn-3'><FaPencil/></p>
          <ul>
             <h1>About Us</h1>
             <p>CLIXSTA Pvt Ltd. is the new generation IT company based in lahore, Pakistan</p>
             <p>Clixsta is the idea of delivering instant digital B2B and B2C solutions.</p>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Contactus