
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Platforms from './components/platforms/platforms';
import About from "./components/about/about"
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/platforms" element={<Platforms/>}/>
      <Route path="/about" element={<About/>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
