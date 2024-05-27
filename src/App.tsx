import NavBar from './components/NavBar'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import Crops from './pages/Crops';
import Fishes from './pages/Fishes';
import Livestock from './pages/Livestock';
import Poultry from './pages/Poultry';
import FooterSection from './components/FooterSection';

function App() {

  return (
    <BrowserRouter>

      <NavBar />

      <div className="routes">
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/products/crops' element={<Crops />} />
          <Route path='/products/fishes' element={<Fishes />} />
          <Route path='/products/livestock' element={<Livestock />} />
          <Route path='/products/poultry' element={<Poultry />} />
        </Routes>
      </div>

      <FooterSection />

    </BrowserRouter>
  )
}

export default App
