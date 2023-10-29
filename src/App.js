
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Banner from "./components/banner/banner"
import Footer from "./components/footer/footer"
import Header from "./components/header/header"
import Projects from './components/projects/projects';

import Home from './components/Home';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Services from "./components/Services";
import Pricing from "./components/Pricing"
import Contact from "./components/Contact"
function App() {
  return (
    <BrowserRouter>
        <Header/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/portfolio" element={<Portfolio/>}/>
    <Route path="/services" element={<Services/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/pricing" element={<Pricing/>}/>
      {/* -------------------------------- */}
      <Route path="/banner" element={<Banner/>}/>
      <Route path="/footer" element={<Footer/>}/>
      <Route path="/projects" element={<Projects/>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
