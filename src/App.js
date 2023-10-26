
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Platforms from './components/platforms/Platforms';
import About from "./components/about/About"
import Banner from "/components/banner/Banner"
import Engangment from "./components/engangment/Engangment"
import Footer from "/components/footer/Footer"
import Header from "./components/header/Header"
import Services from "/components/services/Services"
import Trending from "/components/Trending/Trending"
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/platforms" element={<Platforms/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/banner" element={<Banner/>}/>
      <Route path="/engangment" element={<Engangment/>}/>
      <Route path="/footer" element={<Footer/>}/>
      <Route path="/header" element={<Header/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/trending" element={<Trending/>}/>
 
    </Routes>
    </BrowserRouter>
  );
}

export default App;
