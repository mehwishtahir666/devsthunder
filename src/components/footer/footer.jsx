import React from "react";
import "./footer.css"
import {AiOutlineArrowRight} from "react-icons/ai"
import { LiaFacebook, LiaPhoneSolid } from "react-icons/lia";
import { LiaEnvelopeOpenSolid } from "react-icons/lia";
import {BiBeenHere} from "react-icons/bi";
import {TiSocialFacebook} from  "react-icons/ti";
import {TiSocialTwitter} from "react-icons/ti";
import {TiSocialLinkedin} from "react-icons/ti";
import {TiSocialSkype} from "react-icons/ti"
 const Footer =()=>{
    return(
       <div>
<div className="footer w-100 h-auto ">
      <div className="row footer_row w-100  px-5 ">
               <ul className="col-md-4 col-sm-6 col-12  footer_sec1">
            <li><h3 className="fw-bold">Be Future Ready</h3></li>
            <li><p>get exclusive digital marketing updates
                straight to your inbox
            </p></li>
            <li className="p-0 m-0 footer_inplist">
              <input type="email" name="" placeholder="Email address" className="footer_inp" />
            <button className="p-0 m-0 footer_btn"><AiOutlineArrowRight/></button>
            </li>
               </ul>
               <ul className="footer_sec_2 col-md-2 col-sm-6 col-12  ">
                 <li><h5 className="fw-bold">About</h5></li>    
                 <li>Our Team</li>
                 <li> Clients</li>
                 <li> Press</li>
                 <li> Clients</li>
                     <li>Blog</li>
               </ul>
               <ul className="footer_sec_3 col-md-3 col-sm-6 col-12 ">
                 <li><h5 className="fw-bold">Corporate Training</h5></li>    
                 <li>Leaders</li>
                 <li> pracitioner</li>
               </ul>
               <ul className="footer_sec_4 col-md-3 col-sm-6 col-12  border-0 border-danger">
                 <li><h5 className="fw-bold">Contact Us</h5></li>    
                 <li>+(00)88779 0098</li>
                 <li>hello@futuremarket.com</li>
                 <li>One nell Road sinagpore</li>
               </ul>
      </div>


      <div className=" row m-auto footer_line ">
        <div className="col d-flex justify-content-center text-center  border-0 maxConth p-0 footer_row2-col1"><p className="p-0 m-0">@2023FutureMarket Private Ltd.All Right Reserved</p></div>
   
      </div>
</div>
       </div>
    )
 }
 export default Footer;