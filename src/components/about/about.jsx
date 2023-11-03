import React from 'react'
import "./about.css"
import { GoDot } from "react-icons/go";
import { GiBurningDot } from "react-icons/gi";
import image1 from "./images/tresure-box-icon11.png"
import image2 from "./images/tresure-box-icon21.png"
import image3 from "./images/tresure-box-icon31.png"
import image4 from "./images/tresure-box-icon41.png"
import image5 from "./images/tresure-box-icon51.png"
import image6 from "./images/tresure-box-icon61.png"
const about = () => {
    return (
        <div className="about container-fluid h-auto  p-0 bg-light py-5" >
            {/* <h1 className="a_heading1 text-center fw-bolder mt-5"
    >ABOUT US</h1> */}
            <div className="about-div h-auto container-xl">
                <div className="row border-0">
                    <div className="col-md-6 col-12">
                        <div className="a_row1 row " >
                            <div className="col col-12 col-sm-6 ">
                                <div className="a_box1  px-3  mt-5 " >
                                    <div className="about_circle d-flex justify-content-center align-items-center" >
                                        <img className="about_image w-50 h-50" src={image1} alt="" />
                                    </div>
                                    <h1 className="about_h1 text-center ">4000+</h1>
                                    <p className="about_p text-center  ">Projects Delivered</p>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-6 mt-4 mt-sm-0">
                                <div className="a_box1 px-3 mt-5 " >
                                    <div className="about_circle d-flex justify-content-center align-items-center"  >
                                        <img className="about_image w-50 h-50" src={image2} alt="" />
                                    </div>
                                    <h1 className="about_h1 text-center ">1000+</h1>
                                    <p className="about_p text-center  ">Happy Clients</p>
                                </div>
                            </div>
                        </div>
                        <div className="a_row1 row border-0 border-info mt-4" >
                            <div className="col col-12 col-sm-6">
                                <div className="a_box1 px-3  mt-5 " >
                                    <div className="about_circle d-flex justify-content-center align-items-center" >
                                        <img className="about_image w-50 h-50" src={image3} alt="" />
                                    </div>
                                    <h1 className="about_h1 text-center ">11+</h1>
                                    <p className="about_p text-center  ">Years of Experience</p>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-6 mt-4 mt-sm-0">
                                <div className="a_box1 px-3 mt-5 " >
                                    <div className="about_circle d-flex justify-content-center align-items-center"  >
                                        <img className="about_image w-50 h-50" src={image5} alt="" />
                                    </div>
                                    <h1 className="about_h1 text-center ">200+</h1>
                                    <p className="about_p text-center ">In-house team</p>
                                </div>
                            </div>
                        </div>
                        <div className="a_row1 row border-0 border-info mt-4" >
                            <div className="col col-12 col-sm-6">
                                <div className="a_box1 px-3  mt-5 " >
                                    <div className="about_circle d-flex justify-content-center align-items-center" >
                                        <img className="about_image w-50 h-50 " src={image6} alt="" />
                                    </div>
                                    <h1 className="about_h1 text-center ">1 Million+</h1>
                                    <p className="about_p text-center  ">Billed Hours</p>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-6 mt-4 mt-sm-0">
                                <div className="a_box1 px-3 mt-5 " >
                                    <div className="about_circle d-flex justify-content-center align-items-center"  >
                                        <img className="about_image w-50 h-50" src={image4} alt="" />
                                    </div>
                                    <h1 className="about_h1 text-center">06</h1>
                                    <p className="about_p text-center ">Global Offices</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col h-100 border-0 border-warning mt-5 mt-sm-3 ">
                        <div className="about_rows2 row border-0 border-danger rounded-top w-sm-80 mx-sm-3 min-h-23 py-2 w-100 mx-0">
                            <h3 className="about_headings2 fs-3 mt-2 ">
                                <GiBurningDot className="dot-icon" />
                                About Us</h3>
                            <p className="about_rows_p2 para">
                                <b>Founded in 1989,</b>ScienceSoft is a provider of <span>IT consulting </span>and <span className='sp-2'>software development services</span>. ScienceSoft centers its operations in the US, and delivers services worldwide via offices in the Gulf Cooperation Council and Europe. Throughout the company’s history, we have worked with over 1,200 customers from 75+ countries.
                            </p>
                        </div>
                        <div className="about_rows2 row rounded-top  w-sm-80 mx-sm-3 min-h-23 py-2 w-100 mx-0">
                            <h3 className="about_headings2 fs-3 mt-2 ">
                                <GiBurningDot className="dot-icon" />Whom We Serve
                            </h3>
                            <p className="about_rows_p2  lh-lg">
                                <GoDot className='godot' />
                                <b>Non-IT enterprises,</b>
                                Services to improve business <p className='another-p'>performence,<span>optimize customer service</span>,and tap in digital transformation.</p>
                            </p>
                            <p className="about_rows_p2  lh-lg">
                                <GoDot className='godot' />
                                <b>Software product companies,</b>
                                Services to help bring new <p className='another-p'> products to the market and win customers fast.</p>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default about
