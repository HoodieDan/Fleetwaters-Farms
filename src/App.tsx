import NavBar from './components/NavBar'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import FooterSection from './components/FooterSection';

function App() {

  return (
    <BrowserRouter>

      <NavBar />

      <div className="routes">
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </div>

      <FooterSection />
      
    </BrowserRouter>
  )
}

export default App
