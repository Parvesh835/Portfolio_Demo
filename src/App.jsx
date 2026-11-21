import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Resume from './components/Resume'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
const App = () => {
  return (
    <div className="bg-gray-500">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/resume' element={<Resume/>} />
        <Route path='/testimonials' element={<Testimonials/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/portfolio' element={<Portfolio/>} />
      </Routes>
    </div>
  )
}
export default App
