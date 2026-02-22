import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import EntradasPage from './pages/EntradasPage'
import HomePage from './pages/HomePage'
import Navbar from './Components/nav/NavbarComponent'
// import DatesPage from './pages/DatePage'
import LoveNotePageManager from './pages/NotesPage'
import Footer from './Components/FooterComponent'
import FilmesPage from './pages/FilmesPage'

function App() {
  // https://back-travel.onrender.com

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/entradas' element={<EntradasPage />} />
        {/* <Route path='/dates' element={<DatesPage />} /> */}

        <Route path='/filmezinhos' element={<FilmesPage />} />        
        <Route path='/notinhas' element={<LoveNotePageManager />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
