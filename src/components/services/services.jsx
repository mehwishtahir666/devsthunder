import React,{useState} from 'react'
import { BsBagCheck } from "react-icons/bs";
import Carousel from "react-elastic-carousel";
import img1 from './img7.webp'
import './services.css'

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
];

const Servicess = () => {
    const [items, setItems] = useState([1, 2, 3, 4, 5, 6,7]);
    return (
        <div className='realstate'>
            <div className="left">
                <h1>Our <span>Real Estate</span></h1>
                <h1>Digital Marketing</h1>
                <h1>Services</h1>
                <p >At BrandCurb, we offer a comprehensive suite of digital marketing services tailored specifically to the needs of real estate businesses. From search engine optimization to social media marketing, we have the expertise and experience to help you succeed online.</p>
                <button>Book a free Consultation</button>
            </div>
            <div className="right">
                <div >
                    <Carousel id='crouseee' className='crousee' breakPoints={breakPoints} >
                        {items.map((item) => (
                            <div className='padd'>
                              <div  className="box">
                              <h3>Website Design &</h3>
                              <h3>Development</h3>
                              <p className='p-1'>Website Design & Development</p>
                              <img src={img1} alt="" />
                              <li><p> <span>from</span> $480 month</p> <BsBagCheck className='icon'/>  </li>
                          </div>
                          </div>
                        ))}
                    </Carousel>
                    </div>
            </div>
        </div>
    )
}
export default Servicess