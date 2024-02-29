
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

function App() {


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
        <Footer />
      </main>
    </>
  )
}

export default App
