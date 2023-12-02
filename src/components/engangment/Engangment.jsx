import React from 'react'
import "./Engangment.css"
import img1 from "./images/colllegues-.png"
import img2 from './images/70x70-3.png'

 const Engangment = () => {
  return (
    <div className='about_engangment border-0 border-dark'>
       
    <div className="left">  
        <img className='img1' src={img1} alt="" />
        <div className="box-1">
            <ul>
                <li><img src={"https://sp-ao.shortpixel.ai/client/q_glossy,ret_img,w_359/https://www.doyenhub.com/wp-content/uploads/2018/04/dedicated_team_img.png"} alt="" /></li>
                <li className='li1'><p>Dedicated <br /> Theam</p></li>
            </ul>
        </div>
        <div className="box-1 box2">
            <ul>
                <li><img src={"https://png.pngtree.com/png-vector/20230328/ourmid/pngtree-best-price-icon-design-vector-png-image_6673126.png"} alt="" /></li>
                <li className='li1'><p>Non-fixed <br/>Price</p></li>
            </ul>
        </div>
        <div className="box-1 box3">
            <ul>
            <li><img src={"https://cdn-icons-png.flaticon.com/512/2686/2686456.png"} alt="" /></li>
                <li className='li1'><p>Product <br />Development</p></li>
            </ul>
        </div>
    </div>
    <div className="right py-0 px-3  border-0 border-dark">
        <h1>Engagement Models <br/><span> We offer</span></h1>
        <p className='p1'>Your success journey starts with the right engagement model you choose for your business. We offer cost-efficient engagement and result oriented models that help businesses to reduce cost and control expenses. Let’s work together!</p>
        <ul>
           <li> <img className='logo' src={img2} alt="" /></li>
           <li>
                <h2 className='p2'>Dedicated Development Team</h2>
                <p className='p3'>we understand the importance of bringing your digital visions to life. That's why we've assembled a Dedicated Development Team committed to transforming your ideas into reality. Our team consists of seasoned professionals, each handpicked for their expertise and dedication to delivering exceptional results.We adapt to the evolving needs of your project. Whether it's scaling the team or accommodating changes, our flexibility ensures that we meet your expectations at every stage.</p>
            </li>
        </ul>
        <ul>
           <li> <img className='logo' src={img2} alt="" /></li>
            <li>
                <h2 className='p2'>Non-fixed Price</h2>
                <p className='p3'>we understand that every project is unique, and one size doesn't fit all. That's why we've embraced a non-fixed pricing model, giving you the flexibility to tailor your investment based on the specific needs and aspirations of your project.We believe in transparency. With a non-fixed pricing model, you get a clear breakdown of costs, empowering you to make informed decisions throughout the development process.</p>
            </li>
        </ul>
        <ul>
           <li> <img className='logo' src={img2} alt="" /></li>
           <li>
                <h2 className='p2'>Product Development</h2>
                <p className='p3'>we specialize in turning your digital dreams into tangible, user-centric products. Our product development in web development goes beyond just code — it's about crafting immersive experiences that captivate your audience and drive success.Your product's success is our priority. That's why we develop with scalability in mind, ensuring your product can grow seamlessly as your user base expands.</p>
            </li>
        </ul>
  
    </div>
</div>
  )
}

export default Engangment
