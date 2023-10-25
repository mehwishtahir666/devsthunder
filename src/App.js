
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Platforms from './components/platforms/platforms';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/platforms" element={<Platforms/>}/>
    </Routes>
    </BrowserRouter>

  );
}

export default App;
