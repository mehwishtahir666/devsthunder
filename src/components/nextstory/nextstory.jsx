import React from 'react'
import "./nextstory.css"
import laptop from "./images/lp3.png"

const Nextstory = () => {
  return ( 
    <>
      <div className='nextstory-main'>
        <div className='story-box'>
          <div className='img-box'>
            <img src={laptop} alt="" />
          </div>
          <div className='text-box'>
            <h2>Want To Be Our Next Success Story?</h2>
            <p>Connect with our experts to design web apps that offer a rich
            user experience. Lay down your requirements and join our list
            of success stories.our experts to design web apps that offer a rich
            user experience.</p>
            <button>Talk To Us</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Nextstory