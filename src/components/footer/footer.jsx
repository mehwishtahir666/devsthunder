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
<div className="footer py-4 w-100 h-auto bg-light">
      <div className="row footer_row w-100  px-5 ">
               <ul className="col-md-4 col-sm-6 col-12  footer_sec1 border border-warning ">
            <li><h3 className="fw-bolder">Be Future Ready</h3></li>
            <li><p>get exclusive digital marketing updates
                straight to your inbox
            </p></li>
            <li className="p-0 m-0 footer_inplist"><input type="email" name="" placeholder="Email address" className="footer_inp" />
            <button className="p-0 m-0 footer_btn"><AiOutlineArrowRight/></button></li>
               </ul>
               <ul className="footer_sec_2 text-center col-md-2 col-sm-6 col-12   border border-danger ">
                 <li><h5 className="fw-bold">About</h5></li>    
                 <li>Our Team</li>
                 <li> Clients</li>
                 <li> Press</li>
                 <li> Clients</li>
                     <li>Blog</li>
               </ul>
               <ul className="footer_sec_3 text-center col-md-3 col-sm-6 col-12  border border-danger">
                 <li><h5 className="fw-bold">Corporate Training</h5></li>    
                 <li>Leaders</li>
                 <li> pracitioner</li>
               </ul>
               <ul className="footer_sec_4 text-center col-md-3 col-sm-6 col-12  border-0 border-danger">
                 <li><h5 className="fw-bold">Contact Us</h5></li>    
                 <li>+(00)88779 0098</li>
                 <li>hello@futuremarket.com</li>
                 <li>One nell Road sinagpore</li>
               </ul>
      </div>
      <div className=" row pt-3 px-5 border border-dark footer_line">
        <div className="col border maxConth p-0"><p className="p-0 m-0">@2023FutureMarket Private Ltd.All Right Reserved</p></div>
        <div className="col border-0 maxConth text-center">
            <div className="footer_insideiconCol d-flex border border-dark ">
            <div className="footer_icon-circle d-flex justify-content-center align-items-center"><TiSocialFacebook/></div>
            <div className="footer_icon-circle d-flex ms-3 justify-content-center align-items-center"><TiSocialLinkedin/></div>
            <div className="footer_icon-circle d-flex ms-3 justify-content-center align-items-center"><TiSocialSkype/></div>
            <div className="footer_icon-circle d-flex ms-3 justify-content-center align-items-center"><TiSocialTwitter/></div>
            </div>
           
        </div>
        <div className="col maxConth border-0  d-flex justify-content-center">
            <p className="m-0">Terms Of Services</p>
            <p className="m-0 ms-3  ">Privacy Policy</p>
        </div>
      </div>
</div>
       </div>
    )
 }
 export default Footer;