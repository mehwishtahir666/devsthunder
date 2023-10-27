import './header.css';
import { LiaFacebookF } from "react-icons/lia";
import { LiaGithub } from "react-icons/lia";
import { LiaWhatsapp } from "react-icons/lia";
import { LiaPhoneSolid } from "react-icons/lia";
// import logo from "./WhatsApp_Image_2023-10-25_at_12.09.10_8e72b0d7-removebg-preview.png";
import { LiaEnvelopeOpenSolid } from "react-icons/lia";
function Header() {
  return (
    <div className='container-fluid p-0 m-0 border border-dark'>
      {/* header element */}
      <div className='mainheader p-0 container-lg border border-success'>
        <header className='d-flex align-items-center'>  
        <div className='header_infodiv p-0 m-0 '>
            <div className='header_info1 p-0 m-0 border border-danger d-flex align-items-center'>
              <LiaEnvelopeOpenSolid className='icon'/>
              <p>info@yourwebsite.com</p>
            </div>
            <div className='header_info2'>
              <LiaPhoneSolid className='icon'/>
              <p>123456789</p>
            </div>
          </div>
          <div className='header_sideDiv'>
            <div className='header_icondiv'>
              <LiaFacebookF />
              <LiaWhatsapp />
              <LiaGithub />
            </div>
          </div>
        </header>

        {/* --------navbar-------- */}
        <nav>
        <div className='nav_logoDiv'>
           {/* <img src={logo}/> */}
          </div>
          <ul className='nav_ul'>
              <li>Home</li>
            <li className='nav_list'>services</li>
            <li className='nav_list'>portfolio</li>
            <li className='nav_list'>about</li>
            <li className='nav_list'>contact</li>
          </ul>
        </nav>

      </div>
     
    </div>
    
  )
  
}
export default Header;
