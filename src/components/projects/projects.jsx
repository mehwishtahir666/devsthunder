import React from 'react'
import "./projects.css"
import img1 from "./images/tab2.webp"
import pc1 from "./images/pc2.jpeg"
import pc2 from "./images/pc3.jpeg"
import pc3 from "./images/pc4.png"
import pc4 from "./images/home_post_2.gif"
import {AiFillEye} from "react-icons/ai";

const Projects = () => {
  return (
    <>
      <div className='projects'>
        <div className='heading-box'>
          <h1>Student projects</h1>
          <p>Our students build real-world projects to put theories into practice.</p>
        </div>
        <div className='button-box'>
          <button>HTML</button>
          <button>CSS</button>
          <button>JavaScript</button>
          <button>React</button>
          <button>Tailwind css</button>
          <button>Git Hub</button>
          <button>Bootstrap</button>
        </div>
        <div className='card-box'>

          <div className="card-1 card-one">
            <img src={pc4} alt="" />
            <h3>Project name</h3>
            <small>HTML CSS</small>
            <p>in frontend</p>
            <div className='button-div'>
              <button>View</button>
              <button>Details</button>
            </div>
          </div>
          <div className="card-1">
            <img src={pc4} alt="" />
            <h3>Project name</h3>
            <small>HTML CSS</small>
            <p>in frontend</p>
            <div className='button-div'>
              <button>View</button>
              <button>Details</button>
            </div>
          </div>
          <div className="card-1">
            <img src={pc4} alt="" />
            <h3>Project name</h3>
            <small>HTML CSS</small>
            <p>in frontend</p>
            <div className='button-div'>
              <button>View</button>
              <button>Details</button>
            </div>
          </div>
          <div className="card-1">
            <img src={pc4} alt="" />
            <h3>Project name</h3>
            <small>HTML CSS</small>
            <p>in frontend</p>
            <div className='button-div'>
              <button>View</button>
              <button>Details</button>
            </div>
          </div>




          <div className="card-1 card-one">
            <img src={pc4} alt="" />
            <h3>Project name</h3>
            <small>HTML CSS</small>
            <p>in frontend</p>
            <div className='button-div'>
              <button>View</button>
              <button>Details</button>
            </div>
          </div>
          <div className="card-1">
            <img src={pc4} alt="" />
            <h3>Project name</h3>
            <small>HTML CSS</small>
            <p>in frontend</p>
            <div className='button-div'>
              <button>View</button>
              <button>Details</button>
            </div>
          </div>
          <div className="card-1">
            <img src={pc4} alt="" />
            <h3>Project name</h3>
            <small>HTML CSS</small>
            <p>in frontend</p>
            <div className='button-div'>
              <button>View</button>
              <button>Details</button>
            </div>
          </div>
          <div className="card-1">
            <img src={pc4} alt="" />
            <h3>Project name</h3>
            <small>HTML CSS</small>
            <p>in frontend</p>
            <div className='button-div'>
              <button>{AiFillEye} View</button>
              <button>Details</button>
            </div>
          </div>


        </div>
      </div>
    </>
  )
}

export default Projects