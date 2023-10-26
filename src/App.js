
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Platforms from './components/Platforms/Platforms';
import About from "./components/About/About"
import Banner from "/components/Banner/Banner"
import Engangment from "./components/Engangment/Engangment"
import Footer from "/components/Footer/Footer"
import Header from "./components/Header/Header"
import Services from "/components/Services/Services"
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
