import React from 'react'
import NavBar from './Components/NavBar'
import HeroBanner from './Components/HeroBanner'
import Skills from './Components/Skills'
import Projects from './Components/Projects'

function App() {
  return (
    <div id='app'>
    <NavBar id="home"/>
    <HeroBanner/>
    <Skills id="skills"/>
    <Projects id="projects"/>
    </div>
  )
}

export default App