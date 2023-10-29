
import React from 'react'
import "./banner.css"
import image2 from "./images/mcsa.png"
import image3 from "./images/Rectangle 7@2x.png"
import image4 from "./images/Kubernetes.png"
import image5 from "./images/Rectangle 4@2x.png"
import image6 from "./images/Rectangle 6@2x.png"
// ------technology--------
 import { BiLogoLinkedin } from "react-icons/bi";
 import { BiLogoTwitter } from "react-icons/bi";

 import { FaTwitterSquare } from "react-icons/fa";
 import { BiLogoFacebookSquare } from "react-icons/bi";
 import { BiLogoLinkedinSquare } from "react-icons/bi";


import manlaptop from "./images/Premium_Photo___Handsome_black_man_using_modern_laptop_on_yellow-removebg-preview.png"
import angular from "./images/angular.png"
import jQuery from "./images/jquery.png"
import bootstrap from "./images/bootstrap.png"
import redux from "./images/redux.png"
import html from "./images/231_Web_Development_-_Websites__Applications_and_Software-removebg-preview.png"
import css from "./images/css3.png"
import mdb from "./images/Outsource_Mongodb_Developers__Mongodb_Development_Services__Mongodb_Development_Company__Mongodb_Developers__Mongodb_Development-removebg-preview.png"
import nodejs from "./images/Standardizing_Node_js_Version_in_an_npm_Package-removebg-preview.png"
import group from "./images/Glider_Offers_A_Clean_And_Elegant_Way_To_Compile_And_-_Programming_Languages_Icons_Png_Transparent_PNG_-_798x638_-_Free_Download_on_NicePNG-removebg-preview.png"

import { LiaFacebookF } from "react-icons/lia";
import { LiaGithub } from "react-icons/lia";
import { LiaWhatsapp } from "react-icons/lia";

const banner = () => {
  return (
    <div>
      <div class="banner min-vh-100 mh-auto w-100 d-flex justify-content-center  align-items-center">
        {/* ---------banner component */}
        <div id="carouselExampleIndicators" class=" carousel slide w-100" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner w-100  d-flex align-items-center">
            {/* ============one item========== */}
            <div class="carousel-item border-0 w-100 px-4 active">
            <div className="banner_techno-main px-5 flex-wrap d-flex justify-content-center align-items-center border border-dark w-100">
        <div className="banner_techno-sec1 p-5 text-center border border-danger">
          <div className="banner_circle">
            <img src={manlaptop} alt="" />
            <div className="banner_whiteDiv">
              <h6 className="fw-bold text-center p-0 m-0">Mehwish Tahir</h6>
              <p className="p-0 m-0">Director and Founder</p>
            </div>
            <div className="banner_img-circle ban_c-1 d-flex justify-content-center align-items-center">
              <LiaFacebookF/>
            </div>
            <div className="banner_img-circle ban_c-2 d-flex justify-content-center align-items-center">
            <BiLogoLinkedin/>
            </div>
            <div className="banner_img-circle ban_c-3 d-flex justify-content-center align-items-center">
            <BiLogoTwitter/>
            </div>
          </div>
          <h3 className="fw-bold mt-3">with 100% team support</h3>
        </div>
        <div className="banner_techno-sec2 border border-danger justify-content-center d-flex align-items-center m-0 border-warning">
          <div className="banner_mainWhite d-flex border border-warning  m-auto">
            <div className="wCircleDiv1 d-flex w-100 justify-content-center ">
              <div className="wCircle wcir1"><img className="classimg" src={angular} alt="" /></div>
              <div className="wCircle wcir2 ms-3"><img className="noclassimg" src={css} alt="" /></div>
              <div className="wCircle wcir3 ms-3"><img className="noclassimg" src={jQuery} alt="" /></div>
              <div className="wCircle wcir4 ms-3"><img className="noclassimg" src={bootstrap} alt="" /></div>
            </div>
            <div className="wCircleDiv2 d-flex w-100 justify-content-center">
              <div className="wCircle wcir5"><img className="classimg" src={html} alt="" /></div>
              <div className="wCircle wcir6 ms-3"><img className="classimg" src={redux} alt="" /></div>
              <div className="wCircle wcir7 ms-3"><img className="noclassimg" src={mdb} alt="" /></div>
              <div className="wCircle wcir8 ms-3"><img className="noclassimg" src={nodejs} alt="" /></div>
            </div>
            <div className="wCircleDiv1 d-flex w-100 justify-content-center ">
              <div className="wCircle wcir1"><img className="classimg" src={angular} alt="" /></div>
              <div className="wCircle wcir2 ms-3"><img className="noclassimg" src={css} alt="" /></div>
              <div className="wCircle wcir3 ms-3"><img className="noclassimg" src={jQuery} alt="" /></div>
              <div className="wCircle wcir4 ms-3"><img className="noclassimg" src={bootstrap} alt="" /></div>
            </div>
          </div>
        </div>
      </div>
            </div>
            {/* ============ two item========== */}

            <div class="carousel-item border-0 text-center">
              <div class="two d-flex justify-content-around align-items-center ">
                <div class="two-cont2 w-100 d-flex justify-content-center align-items-center">
                  <div class="img1 img">
                    <div class="three align-content-around d-flex flex-column px-3 justify-content-around ">
                      <h1 className='fw-bolder align-self-center'>Don't know what we <span>offer?</span></h1>
                      <div className="slider-inner h-auto w-100 p-0 border-0 border-dark mt-3 overflow-hidden">
                        <div class="three-images">
                          <div class="image1 image">
                            <img className='w-100 h-100' src={image2} />
                          </div>
                          <div class="image2 image">
                            <img className='w-100 h-100' src={image3} />
                          </div>
                          <div class="image3 image">
                            <img className='w-100 h-100' src={image4} />
                          </div>
                          <div class="image4 image">
                            <img className='w-100 h-100' src={image5} />
                          </div>
                          <div class="image5 image">
                            <img className='w-100 h-100' src={image6} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ============ four item========== */}

            <div class="carousel-item border-0">
              <div class="four h-auto d-flex flex-wrap  justify-content-between align-items-center">
                <div class="heading w-50 d-flex justify-content-center align-items-center">
                  <h1 className='fw-bolder'>Technologies</h1>
                </div>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev " type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        {/* ---------banner component ends */}
      </div>
  
    </div>
  )
}

export default banner;