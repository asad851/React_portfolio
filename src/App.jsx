import React from "react";
import NavBar from "./Components/NavBar";
import HeroBanner from "./Components/HeroBanner";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import { Element } from "react-scroll";

function App() {
  const scrollToElement = (id) => {
    const targetElement = document.querySelector(id);
    console.log(targetElement)
    if (targetElement) {
      const targetPosition = targetElement.offsetTop;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
  };
  return (
    <div className="app">
      
      <Home  scrollToElement={scrollToElement} />

      <Skills  />

      <Projects />

      <Contact />
    </div>
  );
}

export default App;
