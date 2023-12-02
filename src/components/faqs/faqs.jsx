import React from 'react'
import "./faqs.css"
import { AiFillPushpin } from "react-icons/ai";
const Faqs = () => {
  return (
    <div className='faqcont container-fluid border-0 border-dark w-100'>
      <h1>Frequently Asked<span className='colorspan'> Questions</span></h1>
        <div class="accordion border-0 border-dark accordion-flush" id="accordionFlushExample">
             {/* --------------acc0-------------------- */}
  <div class="accordion-item border-0 mt-4 border-dark">
    <h2 class="accordion-header">
      <button class="fqs_acc accordion-button collapsed border-0 border-dark"  style={{backgroundColor:'#F9F9F9'}} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseZero" aria-expanded="false" aria-controls="flush-collapseZero">
       <div className='fqs_icon h-100 m-0 p-0'><AiFillPushpin className='h-100 m-0 p-0' style={{color:'var(--mainColor)'}}/></div>
       <div className=" ms-3"><h5 className='fqs_heading m-0 p-0'>How much does a new website cost?</h5></div>
      </button>
    </h2>
    <div id="flush-collapseZero" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body border">
      Do you think it’s possible to calculate the exact cost for website development? Website development will be fully customizable, tailoring to the client’s requirements. Nowadays, you can find many options to develop your website.

You can approach a website designer (Freelancer) or contact a website development agency, or you can try developing a website on your own using some well-performing website builders. Depending on the requirements and the method you choose to build your website, the cost keeps varying.

At ColorWhistle, we come up with the pricing after a separate analysis has been conducted on the projects and after brainstorming we work towards achieving the desired results.</div>
    </div>
  </div>
          {/* --------------acc1-------------------- */}
  <div class="accordion-item border-0 mt-3 border-dark ">
    <h2 class="accordion-header">
      <button class="fqs_acc accordion-button collapsed border-0 border-dark"  style={{backgroundColor:'#F9F9F9'}} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
       <div className='fqs_icon h-100 m-0 p-0'><AiFillPushpin className='h-100 m-0 p-0' style={{color:'var(--mainColor)'}}/></div>
       <div className=" ms-3"><h5 className='fqs_heading m-0 p-0'>Will my website be mobile-friendly?</h5></div>
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body border">
Yes, we ensure to develop a responsive website that would make your visitors appealing and deliver an optimized browsing experience.Developing a responsive website will help in increasing the look and feel of your website on both small and large devices. It also increases the number of visitors, rankings in search engines.</div>
    </div>
  </div>
          {/* --------------acc2-------------------- */}

  <div class="accordion-item mt-3 border-0 border-warning">
    <h2 class="accordion-header">
      <button class=" fqs_acc  accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      <div className='fqs_icon h-100 m-0 p-0'><AiFillPushpin className='h-100 m-0 p-0' style={{color:'var(--mainColor)'}}/></div>
       <div className=" ms-3"><h5 className='fqs_heading m-0 p-0'>How long does it take to build a website?</h5></div>
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body border">If you have chosen a professional website development company, then it would take around 1 to 4 months starting from scratch till the end for basic information websites with less functionality.

Website builders can help you in building your website quicker but, it’s quite hard to rely on it as you have to handle everything right from scratch. Advice or opinion from an expert may help in producing better results.</div>
    </div>
  </div>
          {/* --------------acc3-------------------- */}

  <div class="accordion-item mt-3">
    <h2 class="accordion-header">
      <button class=" fqs_acc accordion-button collapsed" style={{backgroundColor:'var(--mainColor)'}} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      <div className='fqs_icon h-100 m-0 p-0'><AiFillPushpin className='h-100 m-0 p-0' style={{color:'var(--mainColor)'}}/></div>
       <div className=" ms-3"><h5 className=' fqs_heading m-0 p-0 '>What types of websites have you designed?</h5></div>
      </button>
    </h2>
    
    <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body border">We have designed service websites for industries like travel, hospitality, healthcare, real estate, e-learning, NGO, and have also designed eCommerce websites.</div>
    </div>
  </div>
          {/* --------------acc4------------------- */}

  <div class="accordion-item mt-3">
    <h2 class="accordion-header">
      <button class=" fqs_acc accordion-button collapsed" style={{backgroundColor:'var(--mainColor)'}} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
      <div className='fqs_icon h-100 m-0 p-0'><AiFillPushpin className='h-100 m-0 p-0' style={{color:'var(--mainColor)'}}/></div>
       <div className=" ms-3"><h5 className=' fqs_heading m-0 p-0 '> Do you redesign existing websites?</h5></div>
      </button>
    </h2>
    
    <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body border">We can, it may take some time but, we can make it with our designers who are creative and productive. Some tweaking to your existing website with the right implementations can help in a successful launch.</div>
    </div>
  </div>
           {/* --------------acc5------------------- */}

           <div class="accordion-item mt-3">
    <h2 class="accordion-header">
      <button class=" fqs_acc accordion-button collapsed" style={{backgroundColor:'var(--mainColor)'}} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapse">
      <div className='fqs_icon h-100 m-0 p-0'><AiFillPushpin className='h-100 m-0 p-0' style={{color:'var(--mainColor)'}}/></div>
       <div className=" ms-3"><h5 className=' fqs_heading m-0 p-0 '>Can you help me write content for my website?</h5></div>
      </button>
    </h2>
    
    <div id="flush-collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body border">Of course, we can help you in adding relevant content to your website. Our team of copywriters can help you in delivering professional content by understanding your requirements and business objectives.</div>
    </div>
  </div>
          {/* --------------acc6------------------- */}

          <div class="accordion-item mt-3">
    <h2 class="accordion-header">
      <button class="fqs_acc accordion-button collapsed" style={{backgroundColor:'var(--mainColor)'}} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapse">
      <div className='fqs_icon h-100 m-0 p-0'><AiFillPushpin className='h-100 m-0 p-0' style={{color:'var(--mainColor)'}}/></div>
       <div className=" ms-3"><h5 className=' fqs_heading m-0 p-0'>What if I need help on my site down the road?</h5></div>
      </button>
    </h2>
    
    <div id="flush-collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body border">You can approach us whenever you need our assistance. Our team can sort it out and bring your site back with its functionality. At ColorWhistle, we first look for the causes behind it and then check with all the technical configurations to provide the best solution for bringing back your website. We would also suggest you with regular maintenance services for your website as it would avoid descending the functionalities of your website.</div>
    </div>
  </div>
{/* --------------------------------------------- */}
</div>
    </div>
  )
}

export default Faqs