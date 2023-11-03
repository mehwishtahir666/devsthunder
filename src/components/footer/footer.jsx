import React from "react";
import "./footer.css"
import logo from "../header/image/WhatsApp_Image_2023-10-25_at_12.09.10_8e72b0d7-removebg-preview.png"
import { LiaFacebookF } from "react-icons/lia";
import { BiLogoLinkedin } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
import { TiSocialSkype } from "react-icons/ti"
const Footer = () => {
  return (
    <div>
      <div className="footer  w-100 h-auto colorblue ">
        <div className="row border-0 footer_row1 border-success w-100 m-0 ">
          {/* ----------- col1 -------------- */}
          <div className="footer_col1 col-12 col-md-6  col-xl-3 text-center border-0 border-warning m-0 p-0">
            <div className="footer_card ">
              <div className="footer_logo m-auto">
                <img className=" m-0 p-0" src={logo} alt="" />
              </div>
              <h6 className="fw-bold coloryellow m-0 mt-3 p-0">TOLL-FREE</h6>
              <p className="parasize  m-0 p-0">(855) 5-GrowMe</p>
              <div className="footer_icons-div m-auto mt-2">
                <div className="footer_icon"><LiaFacebookF /></div>
                <div className="footer_icon"><BiLogoLinkedin/></div>
                <div className="footer_icon"><BiLogoTwitter /></div>
                <div className="footer_icon"><TiSocialSkype /></div>
              </div>
              <div className="footer_lineCol1"></div>
              <p className=" p-0 m-0 mt-3">GrowMe copyright 2023</p>
              <p className="m-0 p-0">All Rights Reserved | Terms</p>
              <p className="m-0 p-0 parasizesmall mt-2">All other registered trademarks are property of their respective owners.</p>
            </div>
          </div>
          {/* ---------------col2---------------- */}
          <div className="col footer_col2 col-12  col-md-6 col-xl-3 border-0 mt-5 mt-lg-3 border-warning d-flex justify-content-center align-items-center">
            <ul className="footer_sec_2 minheight border-0 border-danger m-0 text-center">
            <li><h6 className="fw-bold coloryellow">Our Services</h6></li>
              <li className="parasize mt-3">AptEase Company Ledger</li>
              <li className="parasize  mt-2">AptEase : Ledger Download</li>
            </ul>
          </div>
          {/* ---------------col3---------------- */}

          <div className="col footer_col3 col-12 col-md-6 col-xl-3 border-0 mt-5 mt-lg-3 border-warning d-flex justify-content-center align-items-center">
            <ul className="footer_sec_3 minheight m-0 border-0 border-light m-0 text-center">
              <li className="parasize"><h6 className="fw-bold coloryellow">Our Social Networks</h6></li>
              <li className="parasize mt-3">Follow us on Social media and stay up-to-date with all our news and events</li>
              <li className="parasize  mt-2">(604)210-1553</li>
            </ul>
          </div>
          {/* ---------------col4---------------- */}
          <div className="col footer_col4 col-12 col-md-6 col-xl-3 border-0 border-warning   mt-5 mt-lg-3 d-flex justify-content-center align-items-center">
            <ul className="footer_sec_4 minheight border-0 border-light text-center">
              <li className="parasize"><h6 className="fw-bold coloryellow">Contact Us</h6></li>
              <li className="parasize mt-3">+(00)887766 0098</li>
              <li className="parasize  mt-2">hello@futuremarket.com</li>
              <li className="parasize  mt-2">One Nell Road Singapore</li>

            </ul>
          </div>
          {/* -------------------------------------- */}
        </div>

      </div>
    </div>
  )
}
export default Footer;