import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Bio from './components/Bio'
import Music from './components/Music'
import Videos from './components/Videos'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <Bio />
        <Music />
        <Videos />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
