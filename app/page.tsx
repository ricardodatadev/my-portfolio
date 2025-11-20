"use client";

import { useState } from "react";
import Preloader from "./components/Preloader";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  const handleLoadComplete = () => {
    setShowContent(true);
  };

  return (
    <>
      <Preloader onLoadComplete={handleLoadComplete} />
      {showContent && (
        <>
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}
