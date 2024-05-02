import './App.css'
import About from './components/about/About';
import Portfolio from "./components/portfolio/Portfolio";
import Header from './components/header/Header';
import Home from './components/home/Home';
import SKill from "./skills/Skill";
import Qulification from './components/qulification/Qulification';
import Service from './components/services/Service';
import Testimonial from './components/Testimonials/Testimonial';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';
import ScrollReveal from 'scrollreveal';
import { useEffect, useState } from 'react';
import "./components/theme/toggle.css";

function App() {
  const [toggle, setToggle] = useState(true);

useEffect(() =>{
  const sr = ScrollReveal({
    origin: "bottom",
    distance: "55px",
    duration: 1000,
    reset:true,
    delay: 250,
  });
  sr.reveal("#header_amination" , {origin: "top", delay:100, duration:500, reset:false });
  sr.reveal("#socail__icon-animaton" , {origin: "left", delay:500 });
  sr.reveal(".about__img" , {origin: "left", delay:300 });
  sr.reveal("#home__img-animation" , {origin: "right" , delay:500});
  sr.reveal("#scroll_down-animation" , { delay:200});
  sr.reveal("#downlaod__btn_animation" , { delay:600});
  sr.reveal("#home_data-animation" , { delay:400 , distance: "30px" , interval:150});
  sr.reveal("#home__description-animation" , { delay:500 , distance: "35px" , interval:200});
  sr.reveal(".section__title" , { distance: "35px" , interval:200});
  sr.reveal(".about__description" , { distance: "35px" , interval:200});
  sr.reveal(".section__subtitle" , { distance: "45px" ,duration: 300 ,interval:300});
  sr.reveal(".about__box" , { distance: "45px" ,duration: 300 ,interval:300});
})

  return (
    <div data-theme={toggle ? "light" : "dark"}>
      <Header />
      <div className='section container gird flex-end' >
        <label class="switch" >
          <span class="sun"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="#ffd43b"><circle r="5" cy="12" cx="12"></circle><path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z"></path></g></svg></span>
          <span class="moon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path></svg></span>
          <input type="checkbox" class="input" onClick={() => setToggle(!toggle)} />
          <span class="slider"></span>
        </label>
      </div>
      <main className="main">
        <Home />
        <About />
        <SKill />
        <Portfolio />
        <Service />
        <Qulification />
        {/* <Testimonial /> */}
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </div>
  )
}

export default App;
