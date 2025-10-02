import { useEffect } from "react";
import fadeUpAnimation from "../animaiton.js";
import About from "./components/About.jsx";
import Header from "./components/Header.jsx";
import Resume from "./components/Resume.jsx";
import WindowSizeProvider from "./store/windowSize.jsx";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Skills from "./components/Skills-Section.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import ScrollTopBtn from "./components/scrollTopBtn.jsx";

function App() {
  useEffect(() => {
    fadeUpAnimation();
    return () => {
      ScrollTrigger.getAll().forEach(scrollTriggerInstance =>
        scrollTriggerInstance.kill()
      );
    };
  }, []);

  return (
    <WindowSizeProvider>
      <Header />
      {/* About Section */}
      <About />
      {/* Resume section */}
      <Resume />
      {/* skills */}
      <Skills />
      {/* projects */}
      <Projects />
      {/* contact me */}
      <Contact />
      <ScrollTopBtn />
    </WindowSizeProvider>
  );
}

export default App;
