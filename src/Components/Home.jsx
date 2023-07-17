import React from 'react'
import NavBar from './NavBar'
import HeroBanner from './HeroBanner'

function Home({scrollToElement}) {
  return (
    <>
    <NavBar scrollToElement={scrollToElement}/>
    <HeroBanner/>
    </>
  )
}

export default Home