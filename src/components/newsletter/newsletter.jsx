import React from 'react'
import "./newsletter.css"

const Newsletter = () => {
  return (
    <div className='newsletter'>
      <div className='text-box'>
        <h3>Join Our Newsletter</h3>
        <p>Get fresh news and updates delivered straight to your inbox by subscribing to<br/> our newsletter!</p>
      </div>
      <div className="inp-box">
        <div className="inp-btn">
          <input type="text" className='news-input' /> 
          <button>Subscribe</button>
        </div> 
      </div>
    </div> 
  )
}

export default Newsletter