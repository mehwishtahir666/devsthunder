import React from 'react'
import { BiSolidUser,BiSolidBook } from "react-icons/bi";
import { IconName } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import {FaMapMarkerAlt} from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";

import   './form.css'
const Form = () => {
  return (
    <div className='form-main'>
       <div className="left">
        <h1>Get a Free Question!  <span className='indsH'>Contact Us Now</span></h1>
        <form className='form' action="">
        <ul>
        <li><p className='user'><BiSolidUser/></p> <input type="text" placeholder='Full Name' /></li>
        <li><p className='user'><FaPhoneAlt/></p> <input type="text" placeholder='Phone Number' /></li>
        <li><p className='user'><BiSolidUser/></p> <input type="text" placeholder='Web Design & Development' /></li>
        <textarea className='text-area'placeholder='More Details/Projects information' ></textarea>
        <button className='btn'>Send Message</button>
        </ul>
        </form>
       </div>
       <div className="right">
        <div className="box-2">
          <p className='icn-2'><IoLogoWhatsapp/></p>
          <li>
            <p>WHATSAPP</p>
             <p>+923013639966</p>
          </li>
        </div>
        <div className="box-2">
          <p className='icn-2 icn-3'><FaMapMarkerAlt/></p>
          <li>
            <p>ADDRESS</p>
             <p>239-2-C1 township, lahore</p>
          </li>
        </div><div className="box-2">
          <p className='icn-2 icn-4'><MdOutgoingMail/></p>
          <li>
            <p>EMAIL ADDRESS</p>
             <p>devsthunder@gmail.com</p>
          </li>
        </div>
        <div className="box-2">
          <p className='icn-2 icn-1'><FaPhoneAlt/></p>
          <li>
            <p>PHONE</p>
             <p>+923013639966</p>
          </li>
        </div>
       </div>
    </div>
  )
}

export default Form