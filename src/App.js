
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Platforms from './components/platforms/Platforms';
import About from "./components/about/About"
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
