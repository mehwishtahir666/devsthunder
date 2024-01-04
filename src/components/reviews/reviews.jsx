import React, { useState } from 'react'
import Carousel from "react-elastic-carousel";
import './reviews.css'
import { BsBagCheck, BsStarFill } from "react-icons/bs";
import img1 from './images/adil shafiq.png'
import img2 from './images/nouman.jpeg'
import img3 from './images/mubeen.jpeg'
import img4 from './images/kota.png'
import img5 from './images/ramarao.jpeg'
import img6 from './images/khizar.jpeg'
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 850, itemsToShow: 2},
    // { width: 1450, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1750, itemsToShow: 3 },
];

const Reviews = () => {
    const items=[
    {img:img1,name:"Adil Shafiq",client:"Devs client",
    about:"Mobile Phones & Tablets Diagnostics, Data Erasure (ADISA Approved) & Validation Software Company. ",
    review:"I was simply amazed by the Devs Thunder team's work and how quickly they completed the given project. Not only that but also the level of understanding they showed pertinent to the project is truly commendable. I highly recommend this company!"},
    {img:img2,name:"Noman Asif",client:"Devs client",
    about:"Web Developer at Freelancer",
    review:"Exceptional website services! DevsThunder surpassed expectations with their innovative design, seamless functionality, and responsive customer support. The team demonstrated a keen understanding of our brand, delivering a visually stunning and user-friendly website that perfectly aligns with our goals. From initial consultation to post-launch maintenance, their professionalism and attention to detail were commendable. We highly recommend DevsThunder for their expertise in crafting impactful online experiences. A reliable partner for anyone seeking top-tier website services."},
    {img:img3,name:"Muhammad Mubeen Saqib",client:"Devs client",
    about:"Developer at Software Company. ",
    review:"Devs Thunder Company delivers cutting-edge tech solutions with precision. Their innovative approach and skilled team ensure top-notch services, making them a reliable choice for tech endeavors."},
    {img:img4,name:"kota sirinvasuk",client:"Devs client",
    about:"------------------------------------",
    review:"I was simply amazed by the Devs Thunder team's work and how quickly they completed the given project. Not only that but also the level of understanding they showed pertinent to the project is truly commendable. I highly recommend this company!"},
    {img:img6,name:"Khizar Ali",client:"Devs client",
    about:"Full Stack Engineer | Typescript | NextJS | ReactJS | NestJS | NodeJS | MongoDB ",
    review:"Outstanding custom coding for our e-commerce site! DevsThunder expertly tailored our online store, providing innovative solutions for seamless functionality and enhanced user experience. Their attention to detail, security measures, and prompt communication make DevsThunder the ideal partner for top-notch custom coding in the e-commerce realm. Highly recommended!"},
    {img:img5,name:"Ramarao Satti",client:"Devs client",
    about:"------------------------------------",
    review:"I was simply amazed by the Devs Thunder team's work and how quickly they completed the given project. Not only that but also the level of understanding they showed pertinent to the project is truly commendable. I highly recommend this company!"}
]

    return (
        <div className='reviews'>
            <div className="right"> 
                <div>
                    <Carousel id='crouseee' className='crousee' breakPoints={breakPoints} >
                        {items.map((item) => (
                            <div className='padd'>
                                <div className="box">
                                    <h2>{item.name}</h2>
                                    <p className='p-2 m-auto p-0 '>{item.about}</p>
                                    <p className='p-1'>{item.review}</p>
                                    {/* <img src={item} alt="" /> */}
                                   <div className='img-div'>
                                   <div className='img'><img src={item.img} alt="" /></div>
                                   <ul>
                                   <h3>{item.name}</h3>
                                   <p>{item.client}</p>
                                   <li><BsStarFill className='star'/><BsStarFill className='star'/><BsStarFill className='star'/><BsStarFill className='star'/><BsStarFill className='star'/></li>
                                   </ul>
                                   </div>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
    )
}
export default Reviews