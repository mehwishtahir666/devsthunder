import React from 'react'
import './project.css'
import img1 from './images/web1.png'
import img2 from './images/web2.png'
import img3 from './images/web3.png'
import img4 from './images/web4.png'
import img5 from './images/web5.png'
import img6 from './images/web6.png'



const Project = () => {
  return (
    <div className='project'>
      <div className="contianer">
      {/* <h1 className='h1'>What if your website looked like this . . .</h1> */}
        <h1 className='h2'>Suntour Website</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis corporis nobis quam minus sequi dolorum amet architecto <br /> omnis deleniti quos?</p>
        <div className='btn-div'>
          <button>HTML</button>
          <button>CSS</button>
          <button>REACT</button>
          <button>JAVASCRIPT</button>
          <button>BOOSTRAP</button>
        </div>
        <div className="website">      
        <div className="left">
          <img src={img1} alt="" />
        </div>
         <div className="right">
           <img src={img3} alt="" />
           <img src={img4} alt="" />
           <img src={img5} alt="" />
           <img src={img2} alt="" />
           <img src={img6} alt="" />
           
         </div>
         </div>

      </div>
    </div>
  )
}

export default Project