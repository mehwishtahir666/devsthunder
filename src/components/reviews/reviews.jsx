import React, { useState } from 'react'
import Carousel from "react-elastic-carousel";
import './reviews.css'
import { BsBagCheck, BsStarFill } from "react-icons/bs";
import img1 from './images/gettyimages-1345121223-612x612.jpg'
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
                                    <h2>Clientspeak</h2>
                                    <p className='p-2'>What Happy Clients Say AboutSuffescom.</p>
                                    <p className='p-1'>I have worked with Suffescom on multiple projects, and
                                        Doctor Weight Loss is one of them. The team has lived up to
                                        my expectations with every project. I trust their work and
                                        skills, and I'm convinced that they are experts at what they
                                        do. Great job and it's worth the time and money. I would
                                        recommend Suffescom to anyone looking for a great and
                                        experienced team for their development project.</p>
                                    <img src={item} alt="" />
                                   <div className='img-div'>
                                   <div className='img'> <img src={img1} alt="" /></div>
                                   <ul>
                                   <h3>chairman</h3>
                                   <p>CEO</p>
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