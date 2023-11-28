import './header.css';
import { LiaPhoneSolid } from "react-icons/lia";
import { LiaEnvelopeOpenSolid } from "react-icons/lia";
import { LiaFacebookF } from "react-icons/lia";
import { BiLogoLinkedin } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";

import { Link } from 'react-router-dom';
import logo from "./image/WhatsApp_Image_2023-10-25_at_12.09.10_8e72b0d7-removebg-preview.png"
function Header() {
  return (
    <div className='container-fluid w-100 p-0 m-0'>
    {/*=============== header element =============*/}
    <div className='mainheader p-0 container-lg'>
      <header className='w-100 ps-sm-4 ps-2  text-light  m-0' > 
      <div className='header_infodiv border-0 border-warning d-flex align-items-center p-0 m-0'>

          <div className='header_info1 p-0 m-0 d-flex align-items-center'>
            <LiaEnvelopeOpenSolid className='icon'/>
            <p className='p-0 m-0 ms-1 ms-sm-2'>devsthunder@gmail.com</p>
          </div>
          <div className='header_info2 m-0 ms-1 ms-sm-3 d-none d-sm-flex align-items-center '>
            <LiaPhoneSolid className='icon'/>
            <p  className='p-0 m-0 ms-1 ms-sm-2'>+923013639966</p>
          </div>
        </div>
        <div className='header_sideDiv border-0 border-danger px-sm-4 px-3 d-flex'>
          <div className='header_icondiv fw-bolder d-flex align-items-center justify-content-around px-sm-0'>
          <a href="https://www.facebook.com/profile.php?id=61553260912453" target="_blank"> <div className="header_icon-outline">
            <LiaFacebookF />
            </div>
            </a>
            <a href="https://www.linkedin.com/in/devs-thunder-43a378299/" target="_blank">
            <div className="header_icon-outline">
            <BiLogoLinkedin />
            </div></a>
            <a href="https://twitter.com/devs_thunder " target="_blank">
             <div className="header_icon-outline">
             <BiLogoTwitter />
            </div></a>
          </div>
        </div>
      </header>
      {/* --------navbar-------- */}
      <nav className='w-100  bg-light p-0 m-0'>
        {/* ====nav component===== */}
        <nav class="navbar bg-light border-0 p-0 m-0 navbar-expand-lg navbar-light bg-light">
<div class=" nav_component-main bg-light container-fluid m-0 d-flex align-items-center border-0 border-warning px-4 h-100">
   <div className='nav_logoDiv p-0 m-0 '>
         <img src={logo} className='w-100 h-100 p-0 m-0'/>
        </div>
  <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div className="collapse p-0 m-0 navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <Link  to="/" ><span className='nav-link' data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-expanded="false">Home</span></Link>
      <Link  to="/services"  ><span className='nav-link' data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-expanded="false">Services</span></Link>
      <Link  to="/testimonials"><span className='nav-link' data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-expanded="false">Testimonials</span></Link>
      <Link  to="/portfolio"><span className='nav-link' data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-expanded="false">Portfolio</span></Link>
      <Link  to="/about"><span className='nav-link' data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-expanded="false">About</span></Link>
      <Link  to="/contact"><span className='nav-link' data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-expanded="false">Contact</span></Link>
    </div>
  </div>
</div>
</nav>
      </nav>
    </div>
  </div>
  )
  
}
export default Header;
