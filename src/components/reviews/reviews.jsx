import React, { useState } from 'react'
import Carousel from "react-elastic-carousel";
import './reviews.css'
import { BsBagCheck, BsStarFill } from "react-icons/bs";
import img1 from './images/adil shafiq.png'
import img2 from './images/bg-image-24.jpg'

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 850, itemsToShow: 2},
    // { width: 1450, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1750, itemsToShow: 3 },
];

const Reviews = () => {
    const [items, setItems] = useState(["/images/mango.png", "/images/banana.png", "/images/mango.png", "/images/banana.png", "/images/mango.png", "/images/banana.png", "/images/mango.png"]);

    return (
        <div className='reviews'>
            <div className="right"> 
                <div>
                    <Carousel id='crouseee' className='crousee' breakPoints={breakPoints} >
                        {items.map((item) => (
                            <div className='padd'>
                                <div className="box">
                                    <h2>Adil Shafiq</h2>
                                    <p className='p-2 m-auto p-0 '>Mobile Phones & Tablets Diagnostics, Data Erasure (ADISA Approved) & Validation Software Company. </p>
                                    <p className='p-1'>I was simply amazed by the Devs Thunder team's work and how quickly they completed the given project. Not only that but also the level of understanding they showed pertinent to the project is truly commendable. I highly recommend this company!</p>
                                    {/* <img src={item} alt="" /> */}
                                   <div className='img-div'>
                                   <div className='img'><img src={img1} alt="" /></div>
                                   <ul>
                                   <h3>Adil Shafiq</h3>
                                   <p>Devs client</p>
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