import React from "react";

import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { Element } from "react-scroll";
import Experience from "./Components/Experience";

function App() {
  const scrollToElement = (id) => {
    const targetElement = document.querySelector(id);
    console.log(targetElement);
    if (targetElement) {
      const targetPosition = targetElement.offsetTop - 100;
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    }
  };
  return (
    <div className="app">
      <Home scrollToElement={scrollToElement} />

      <Skills />
      <Experience />
      <Projects />

      <Contact />
      <Footer />
    </div>
  );
}

export default App;
