
import React from "react"
import "./banner.css"
import image2 from "./images/mcsa.png"
import image3 from "./images/Rectangle 7@2x.png"
import image4 from "./images/Kubernetes.png"
import image5 from "./images/Rectangle 4@2x.png"
import image6 from "./images/Rectangle 6@2x.png"
import image10 from "./images/tariq.jpeg"
function banner(){
    return(
<div>
<div class="banner min-vh-100 mh-auto w-100 d-flex justify-content-center  align-items-center">
  {/* ---------banner component */}
  <div id="carouselExampleIndicators" class=" carousel slide w-100" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner w-100  d-flex align-items-center">
      {/* ============one item========== */}
      <div class="carousel-item border-0 w-100 px-4 active">
        <div class="banner_one d-flex flex-column justify-content-between px-5 border-0 border-warning" data-aos="zoom-out" data-aos-duration="600">
          <h2 className='fw-bold'>'Pakistan's First <span style={{ color: "#FAD509" }}>Platform</span></h2>
          <div>
            <div className='banner_texttogether'>
              <h1 className='text-center fw-bolder'>Insitute of Software Engineering</h1>
              <p class="p1 text-center"><i><span class="quote">&#128630;</span> &nbsp;Bringing the revolution like never before.</i></p>
            </div>
          </div>
          <p class="p2 text-end "><span style={{ color: "#FAD509" }}>Setup</span>  Your  <span style={{ color: "#FAD509" }}>Career</span>  Beyond  Your  <span style={{ color: "#FAD509" }}>Imagination;</span></p>
        </div>
      </div>
      {/* ============ two item========== */}

      <div class="carousel-item border-0 text-center">
        <div class="two d-flex justify-content-around align-items-center ">
          <div class="two-cont2 w-100 d-flex justify-content-center align-items-center">
            <div class="img1 img">
              <div class="three align-content-around d-flex flex-column px-3 justify-content-around ">
                <h1 className='fw-bolder align-self-center'>Don't know what we <span>offer?</span></h1>
                <div className="slider-inner h-auto w-100 p-0 border-0 border-dark mt-3 overflow-hidden">
                  <div class="three-images">
                    <div class="image1 image">
                      <img className='w-100 h-100' src={image2} />
                    </div>
                    <div class="image2 image">
                      <img className='w-100 h-100' src={image3} />
                    </div>
                    <div class="image3 image">
                      <img className='w-100 h-100' src={image4} />
                    </div>
                    <div class="image4 image">
                      <img className='w-100 h-100' src={image5} />
                    </div>
                    <div class="image5 image">
                      <img className='w-100 h-100' src={image6} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ============ four item========== */}
      
      <div class="carousel-item border-0">
        <div class="four h-auto d-flex flex-wrap justify-content-between align-items-center">
          <div class="heading w-50 d-flex justify-content-center align-items-center">
            <h1 className='fw-bolder'>Technologies</h1>
          </div>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  {/* ---------banner component ends */}
</div>
</div>
    )
}
export default banner;
