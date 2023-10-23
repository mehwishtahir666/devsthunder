import './App.css';
import { LiaFacebookF } from "react-icons/lia";
import { LiaGithub } from "react-icons/lia";
import { LiaWhatsapp } from "react-icons/lia";
import { LiaPhoneSolid } from "react-icons/lia";
import { LiaEnvelopeOpenSolid } from "react-icons/lia";
function App() {
  return (
    <div className='container'>
      {/* ------------------------- */}
      <header>
        <div className='header'>
          <div className='logoDiv'>
            LOGO
          </div>
          <ul className='navul'>
            <li>Home</li>
            <li className='leftlist'>services</li>
            <li className='leftlist'>portfolio</li>
            <li className='leftlist'>about</li>
            <li className='leftlist'>contact</li>
          </ul>

        </div>
        {/* ---------------- */}
        <nav>
          <div className='sideDiv'>
            <div className='icondiv'>
              <LiaFacebookF />
              <LiaWhatsapp />
              <LiaGithub />
            </div>
          </div>
          <div className='infodiv'>
            <div className='info1'>
              <LiaEnvelopeOpenSolid className='icon'/>
              <p>info@yourwebsite.com</p>
            </div>
            <div className='info2'>
              <LiaPhoneSolid className='icon'/>
              <p>123456789</p>
            </div>
          </div>
        </nav>

      </header>
      <div className='banner'>
        <div className='mainsection'>
        </div>
      </div>
    </div>
  )
}

export default App;
