import React from 'react'
import NavBar from './Components/NavBar'
import HeroBanner from './Components/HeroBanner'
import Skills from './Components/Skills'

function App() {
  return (
    <div id='app'>
    <NavBar id="home"/>
    <HeroBanner/>
    <Skills id="skills"/>
    </div>
  )
}

export default App