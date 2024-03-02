
import './App.css'
import About from './components/about/About';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Qulification from './components/qulification/Qulification';
import Service from './components/services/Service';
import Skill from './components/skills/Skill';
import Testimonial from './components/Testimonials/Testimonial';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';
import ScrollReveal from 'scrollreveal';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "60px",
      duration: 1000,
      reset: true,
    });
    sr.reveal(
      `#about-animation,
      #contact,
      #footer,
      #home,
      #header,
      #qulification,
      #services,
      #testimonials`, {
      opacity: 0,

    }
    )
  })

  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skill />
        <Service />
        <Qulification />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  )
}

export default App
