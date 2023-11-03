import React from 'react'
import "./results.css"
import { BsArrowUpCircleFill,BsArrowRightShort } from "react-icons/bs";

const Results = () => {
  return (
    <div className='services3-main'>
    <div className='radius-box'>
      {/* <div className="text-box">
        <h1>Driving Real Results</h1>
      </div> */}
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
  )
}

export default Results