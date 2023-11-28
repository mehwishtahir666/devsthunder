import React from "react";
import "./footer.css"
import logo from "../header/image/WhatsApp_Image_2023-10-25_at_12.09.10_8e72b0d7-removebg-preview.png"
import { LiaFacebookF } from "react-icons/lia";
import { BiLogoLinkedin } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
import {GoLocation} from "react-icons/go"
import { LiaEnvelopeOpenSolid } from "react-icons/lia";
import { LiaPhoneSolid } from "react-icons/lia";
import {LiaWhatsapp} from "react-icons/lia"
const Footer = () => {
  return (
    <div>
      <div className="footer  w-100 h-auto colorblue ">
        <div className="row border-0 footer_row1 border-success w-100 m-0 ">
          {/* ----------- col1 -------------- */}
          <div className="footer_col1 col-12 col-md-6  col-xl-3 text-center border-0 border-warning m-0 p-0">
            <div className="footer_card">
              <div className="footer_logo m-auto">
                <img className=" m-0 p-0" src={logo} alt="" />
              </div>
              <p className="p-0 m-0 mt-3 parasize">DevsThunder is a forward-thinking web development company and software house. We specialize in creating cutting-edge digital solutions that empower businesses and individuals.</p>
            
              <div className="footer_lineCol1"></div>
              <h6 className="fw-bold coloryellow m-0 mt-3 p-0">Web Development</h6>
              {/* <p className=" p-0 m-0 mt-3 parasize">DevsThunder copyright 2023</p>
              <p className="m-0 p-0 parasize">All Rights Reserved | Terms</p> */}
            </div>
          </div>
          {/* ---------------col2---------------- */}
          <div className="col footer_col2 col-12  col-md-6 col-xl-3 border-0 mt-5 mt-lg-3 border-warning d-flex justify-content-center align-items-center">
          <ul className="footer_sec_2 minheight border-0 border-danger m-0 text-center">
            <li><h6 className="fw-bold coloryellow">Our Services</h6></li>
              <li className="parasize  mt-3">Web Design</li>
              <li className="parasize mt-2">Web Developing</li>
              <li className="parasize mt-2">Website Maintenance</li>
              <li className="parasize mt-2">Delivering Websites</li>
            </ul>
           
          </div>
          {/* ---------------col3---------------- */}

          <div className="col footer_col3 col-12 col-md-6 col-xl-3 border-0 mt-5 mt-lg-3 border-warning d-flex justify-content-left align-items-center">
          <ul className="footer_sec_3 minheight m-0 border-0 border-light m-0 text-center">
              <li className="parasize"><h6 className="fw-bold coloryellow">Our Social Networks</h6></li>
              <li className="parasize mt-3">Follow us on Social media and stay up-to-date with all our news and events</li>
              <li className="mt-3"><div className="footer_icons-div m-auto  mt-2">
               <a href="https://www.facebook.com/profile.php?id=61553260912453" target="_blank"> <div className="footer_icon"><LiaFacebookF /></div></a>
               <a href="https://www.linkedin.com/in/devs-thunder-43a378299/" target="_blank">  <div className="footer_icon"><BiLogoLinkedin/></div></a>
               <a href="https://twitter.com/devs_thunder " target="_blank">  <div className="footer_icon"><BiLogoTwitter /></div></a>
              </div></li>
            </ul>
          </div>
          {/* ---------------col4---------------- */}
          <div className="col footer_col4 col-12 col-md-6 col-xl-3 border-0 border-warning   mt-5 mt-lg-3 d-flex justify-content-center align-items-center">
            <ul className="footer_sec_4 minheight border-0 border-light text-left">
              <li className="parasize"><h6 className="fw-bold coloryellow">Contact Us</h6></li>
              <li className="p-0 m-0 mt-3 parasize"><LiaPhoneSolid className="fs-5"/>&nbsp;&nbsp;923013639966</li>
              <li className="p-0 m-0 mt-2 parasize"><LiaEnvelopeOpenSolid className="fs-5"/>&nbsp;&nbsp;devsthunder@gmail.com</li>
              <li className="p-0 m-0 mt-2 parasize"><LiaWhatsapp className="fs-5"/>&nbsp;&nbsp;923013639966</li>
<li className="p-0 m-0 mt-2 parasize"><GoLocation/>&nbsp;&nbsp;239-2-C1 township, lahore</li>
            </ul>
          </div>
          {/* -------------------------------------- */}
        </div>
<div className="footer_lastRow row d-flex justify-content-center">
<p className="  p-0 m-0 mt-3 parasize text-center">DevsThunder copyright 2023</p>
          <p className="  m-0 mt-3 ms-2 p-0 parasize text-center">All Rights Reserved | Terms</p>
         
</div>
      </div>
    </div>
  )
}
export default Footer;