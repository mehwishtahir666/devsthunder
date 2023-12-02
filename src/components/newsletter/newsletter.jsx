import React from 'react'
import "./newsletter.css"

const Newsletter = () => {
  return (
    <div className='newsletter'>
      <div className='text-box'>
        <h2>Join Our <span className='spanText'>Newsletter</span></h2>
        <p>Get fresh news and updates delivered straight to your inbox by subscribing to<br/> our newsletter!</p>
      </div>
      <div className="inp-box">
        <div className="inp-btn">
          <input type="text" placeholder='JOIN US NOW !' className='news-input' /> 
          <button>Subscribe</button>
        </div> 
      </div>
    </div> 
  )
}

export default Newsletter