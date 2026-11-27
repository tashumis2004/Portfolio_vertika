import { useEffect } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Stats from "./components/Stats.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Education from "./components/Education.jsx";
import Contact from "./components/Contact.jsx";

// Fades sections in as they scroll into view.
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll("section h2,.skill,.proj,.edu div,.contact,.facts li");
    els.forEach((e) => e.classList.add("rv"));
    if (!("IntersectionObserver" in window)) {
      els.forEach((e) => e.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((x) => {
          if (x.isIntersecting) {
            x.target.classList.add("in");
            io.unobserve(x.target);
          }
        }),
      { threshold: 0.12 }
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, []);
}

export default function App() {
  useScrollReveal();
  return (
    <>
      <Header />
      <main id="top" className="wrap">
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <footer>© 2026 Vertika Mishra · +91 84230 89353</footer>
    </>
  );
}
