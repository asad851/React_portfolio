import React from 'react'
import NavBar from './Components/NavBar'
import HeroBanner from './Components/HeroBanner'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Home from './Components/Home'

function App() {
  return (
   <div>
    <Home id='home' />
    <Skills id='skills' />
    <Projects id='projects' />
   </div>
  )
}

export default App;