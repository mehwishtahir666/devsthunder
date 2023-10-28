
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Platforms from './components/platforms/platforms';
import About from "./components/about/about"
import Banner from "./components/banner/banner"
import Footer from "./components/footer/footer"
import Engangment from './components/engangment/engangment';
import Header from "./components/header/header"
import Services from "./components/services/services"
import Trending from "./components/trending/trending"
import Projects from './components/projects/projects';
import Home from './components/Home';
import Portfolio from './components/portfolio/portfolio';
function App() {
  return (
    <BrowserRouter>
          <Home/>
    <Routes>
      <Route path="/platforms" element={<Platforms/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/banner" element={<Banner/>}/>
      <Route path="/engangment" element={<Engangment/>}/>
      <Route path="/footer" element={<Footer/>}/>
      <Route path="/header" element={<Header/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/trending" element={<Trending/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/portfolio" element={<Portfolio/>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
