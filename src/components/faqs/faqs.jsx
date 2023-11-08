import React from 'react'
import "./faqs.css"
import { AiFillPushpin } from "react-icons/ai";
const Faqs = () => {
  return (
    <div className='cont container-fluid p-sm-5 p-1 border-0 border-dark w-100'>
        <div class="accordion border-0 border-dark accordion-flush" id="accordionFlushExample">
  <div class="accordion-item ">
    <h2 class="accordion-header">
      <button class="fqs_acc accordion-button collapsed  "  style={{backgroundColor:'var(--mainColor)'}} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
       <div className='fqs_icon h-100 m-0 p-0'><AiFillPushpin className='h-100 m-0 p-0' style={{color:'var(--subColor)'}}/></div>
       <div className=" ms-3"><h5 className='fqs_heading m-0 p-0 text-light'>Web Designing and Development</h5></div>
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body border">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
    </div>
  </div>
  <div class="accordion-item border-0 mt-3 border-danger">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" style={{backgroundColor:'var(--mainColor)'}} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      <div className='fqs_icon h-100 m-0 p-0'><AiFillPushpin className='h-100 m-0 p-0' style={{color:'var(--subColor)'}}/></div>
       <div className=" ms-3"><h5 className='fqs_heading m-0 p-0 text-light'>Graphic and Design</h5></div>
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body border">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div class="accordion-item mt-3">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" style={{backgroundColor:'var(--mainColor)'}} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      <div className='fqs_icon h-100 m-0 p-0'><AiFillPushpin className='h-100 m-0 p-0' style={{color:'var(--subColor)'}}/></div>
       <div className=" ms-3"><h5 className=' fqs_heading m-0 p-0  text-light'>Brand Creation and Management</h5></div>
      </button>
    </h2>
    
    <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body border">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Faqs