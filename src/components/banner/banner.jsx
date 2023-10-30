
import React from 'react'
import "./banner.css"
import image2 from "./images/mcsa.png"
import image3 from "./images/Rectangle 7@2x.png"
import image4 from "./images/Kubernetes.png"
import image5 from "./images/Rectangle 4@2x.png"
import image6 from "./images/Rectangle 6@2x.png"
// import manlaptop from "./images/Premium_Photo___Handsome_black_man_using_modern_laptop_on_yellow-removebg-preview.png"
import angular from "./images/angular.png"
import jQuery from "./images/jquery.png"
import bootstrap from "./images/bootstrap.png"
import redux from "./images/redux.png"
import html from "./images/231_Web_Development_-_Websites__Applications_and_Software-removebg-preview.png"
import css from "./images/css3.png"
import mdb from "./images/Outsource_Mongodb_Developers__Mongodb_Development_Services__Mongodb_Development_Company__Mongodb_Developers__Mongodb_Development-removebg-preview.png"
import nodejs from "./images/Standardizing_Node_js_Version_in_an_npm_Package-removebg-preview.png"
import bannerPerson from "./images/bannerPerson.png"
import fiverr from"./images/fiverr.png"
import linkedin from"./images/linkedIn (1).png"
import upwork from"./images/upwork.jpeg"
import freelancer from"./images/freelancerlogo-1.png";
import facebook from"./images/Facebook_PNG_Ícone_Logo_Transparente_Sem_Fundo-removebg-preview.png"
import { LiaFacebookF } from "react-icons/lia";
import { BiLogoLinkedin } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
const Banner = () => {
  return (
    <div>
      <div class="banner min-vh-100 mh-auto w-100 border-0 border-success d-flex justify-content-center  align-items-center">
        {/* ---------banner component */}
        <div id="carouselExampleIndicators" class=" carousel slide w-100" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner w-100  d-flex align-items-center">

            {/* ============one item========== */}

            <div class="carousel-item border-0 w-100 px-sm-4 px-0 active">
            <div className="banner_techno-main px-sm-5 px-0  d-flex justify-content-evenly align-items-center border-0 border-dark w-100">
        <div className="banner_techno-sec1 p-5 text-center border-0 border-danger">
          <div className="banner_circle">
            <img src={bannerPerson} alt="" />
            <div className="banner_textwhiteDiv">
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
        <div className="banner_techno-sec2 border-0 border-danger  m-0 border-warning">
          <div className="banner_sec2-mainWhite border-0 border-warning">
            <div className="wCircleDiv1 d-flex w-auto justify-content-center border-0 border-danger">
              <div className="wCircle wcir1"><img className="classimg" src={angular} alt="" /></div>
              <div className="wCircle wcir2 marginleftCustom"><img className="noclassimg" src={css} alt="" /></div>
              <div className="wCircle wcir3 marginleftCustom"><img className="noclassimg" src={jQuery} alt="" /></div>
              <div className="wCircle wcir4 marginleftCustom"><img className="noclassimg" src={bootstrap} alt="" /></div>
            </div>
            <div className="wCircleDiv2 d-flex w-auto justify-content-center border-0 border-danger">
              <div className="wCircle wcir5"><img className="classimg" src={html} alt="" /></div>
              <div className="wCircle wcir6 marginleftCustom"><img className="classimg" src={redux} alt="" /></div>
              <div className="wCircle wcir7 marginleftCustom"><img className="noclassimg" src={mdb} alt="" /></div>
              <div className="wCircle wcir8 marginleftCustom"><img className="noclassimg" src={nodejs} alt="" /></div>
            </div>
            <div className="wCircleDiv3 d-flex w-auto justify-content-center border-0 border-danger ">
              <div className="wCircle wcir1"><img className="classimg" src={angular} alt="" /></div>
              <div className="wCircle wcir2 marginleftCustom"><img className="noclassimg" src={css} alt="" /></div>
              <div className="wCircle wcir3 marginleftCustom"><img className="noclassimg" src={jQuery} alt="" /></div>
              <div className="wCircle wcir4 marginleftCustom"><img className="noclassimg" src={bootstrap} alt="" /></div>
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
                    <div class="two align-content-around d-flex flex-column px-3 justify-content-around ">
                      <h1 className='fw-bolder align-self-center'><span className='banner3HadingSpan'>Platforms</span> We Serve On</h1>
                      <div className="slider-inner h-auto w-100 p-0 border-0 border-dark mt-3 overflow-hidden">
                        <div class="two-images">
                          <div class="image1 image">
                            <img className='w-100 ' src={fiverr} />
                          </div>
                          <div class="image2  image">
                            <div className="upworkRound">
                            <img className='w-100' src={upwork} />
                            </div>
                          
                          </div>
                          <div class="image3 image">
                            <img className='w-75 ' src={linkedin} />
                          </div>
                          <div class="image4 image">
                            <img className='facebookimg  ' src={facebook} />
                          </div>
                          <div class="image5 image">
                            <img className='w-75 ' src={freelancer} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ============ three item========== */}

            <div class="carousel-item border-0 px-5 border-dark">
              <div className="banner_two-main">
              <div className='banner_pentagon_text  w-100 border-0 border-warning'>
            <h1 className='fw-bolder p-0 m-0'><span className='banner3HadingSpan '>Companies</span> We are Serving</h1>
           </div>
           <div className="banner_pentagon-main d-flex border-0 border-dark">
           <div className='banner_pentagon banner_pen-1'>1</div>
           <div className='banner_pentagon banner_pen-2'>2</div>
           <div className='banner_pentagon banner_pen-3'>3</div>
           <div className='banner_pentagon banner_pen-4'>4</div>
           <div className='banner_pentagon banner_pen-5'>5</div>
           <div className='banner_pentagon banner_pen-6'>6</div>
           <div className='banner_pentagon banner_pen-7'>7</div>
           <div className='banner_pentagon banner_pen-8'>8</div>
           <div className='banner_pentagon banner_pen-9'>9</div>
           </div>
     
              </div>
           
            </div>
          </div>

          {/* ----left right arrow slider */}
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

export default Banner;