import React from 'react'
import "./services3.css"
import { BsArrowUpCircleFill,BsArrowRightShort } from "react-icons/bs";
import {AiOutlineSliders,AiOutlineArrowRight,AiOutlineFileSearch} from "react-icons/ai";

const Services3 = () => {
  return (
    <>
      <div className='services3-main'>
        <div className='radius-box'>
          <div className="text-box">
            <h1>Driving Real Results</h1>
          </div>
          <div className='circle-main'>
            <div className='circle-pairnt'>
              <div className='circle-cube'>
                <div className="circle">
                  <div className="small-circle">
                    <h1>3%</h1>
                    <BsArrowUpCircleFill className='arrow-icon' />
                  </div>
                </div>
                <p>Of google advertiser</p>
              </div>
              <div className='circle-cube'>
              <div className="circle">
                <div className="small-circle">
                  <h1>100%</h1>
                  <BsArrowUpCircleFill className='arrow-icon' />
                </div>
              </div>
              <p>Growth Clients</p>
              </div>
              <div className='circle-cube'>
              <div className="circle">
                <div className="small-circle">
                  <h1>15m</h1>
                  <BsArrowUpCircleFill className='arrow-icon' />
                </div>
              </div>
              <p>Managed budgets</p>
              </div>
            </div>
            <div className='round-box'>
              <div className='inner-box'>
                <h1>282,000+</h1>
                <p>Leads genrated so far </p>
                <button>CONTACT US <BsArrowRightShort className='go'/></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* next component */}
      <div className='ForMain'>
            <div className='background-box'>
                <div className='content-box'>
                    <div className='blue-circle'>
                        <AiOutlineSliders/>
                    </div>
                    <h3>Have Any Project <br /> On Minds ? </h3>
                    <div className='white-circle'>
                        <AiOutlineArrowRight/>
                    </div>
                </div>
                <div className='content-box'>
                    <div className='blue-circle'>
                    <AiOutlineFileSearch/>
                    </div>
                    <h3>Your Bussiness need <br />SEO Optimization ? </h3>
                    <div className='white-circle'>
                    <AiOutlineArrowRight/>
                    </div>
                </div>
            </div>
        </div>
    </> 
  )
}

export default Services3