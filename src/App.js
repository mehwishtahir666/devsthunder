import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Footer from "./components/footer/footer"
import Header from "./components/header/header"
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Pricing from "./components/Pricing"
import Contact from "./components/Contact"
import Project from './components/project/project';
import Servicess from './components/Services';
import Testimonial from './components/Testimonials';

function App() { 
  return (
    <BrowserRouter>
        <Header/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/portfolio" element={<Portfolio/>}/>
    <Route path='/project' element={<Project/>} />
    <Route path="/services" element={<Servicess/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/pricing" element={<Pricing/>}/>
      <Route path="/testimonials" element={<Testimonial/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
