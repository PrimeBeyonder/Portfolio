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
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(()=>{
   document.body.setAttribute("data-theme" , theme);
    localStorage.setItem("theme" , theme);
  }, [theme]);
  
  const changeTheme = () =>{
    setTheme((prevTheme) => prevTheme === "light" ? "dark" : "light");
  }

useEffect(() =>{
  const sr = ScrollReveal({
    origin: "bottom",
    distance: "55px",
    duration: 1000,
    reset:false,
    delay: 250,
  });
  sr.reveal("#header_amination" , {origin: "top", delay:100, duration:500, reset:false });
  sr.reveal("#socail__icon-animaton" , {origin: "left", delay:500 });
  sr.reveal("#footer" , {delay:500 });
  sr.reveal(".about__img" , {origin: "left", delay:300 });
  sr.reveal(".talkToMe" , {origin: "left", delay:300 });
  sr.reveal(".Education" , {origin: "left", delay:300 });
  sr.reveal("#home__img-animation" , {origin: "right" , delay:500});
  sr.reveal(".Experience" , {origin: "right" , delay:500});
  sr.reveal(".writeMe" , {origin: "right" , delay:500});
  sr.reveal("#scroll_down-animation" , { delay:200});
  sr.reveal("#downlaod__btn_animation" , { origin:"bottom" ,delay:600});
  sr.reveal("#home_data-animation" , { delay:400 , distance: "30px" , interval:150});
  sr.reveal("#home__description-animation" , { delay:500 , distance: "35px" , interval:200});
  sr.reveal(".contact__form" , { delay:500 , distance: "35px" , interval:200});
  sr.reveal(".section__title" , { distance: "35px" , interval:200});
  sr.reveal(".section__title" , { distance: "35px" , interval:200});
  sr.reveal(".about__description" , { distance: "35px" , interval:200});
  sr.reveal(".section__subtitle" , { distance: "45px" ,duration: 300 ,interval:300});
  sr.reveal(".abt-btn" , { distance: "45px" ,duration: 300 ,interval:300});
  sr.reveal(".qulification__sections" , { distance: "45px" ,duration: 300 ,interval:300});
  sr.reveal(".about__box" , { distance: "45px" ,duration: 300 ,interval:300});
  sr.reveal(".contact__card" , { distance: "45px" ,duration: 300 ,interval:300});
  sr.reveal(".contact__form" , { distance: "45px" ,duration: 300 ,interval:300});
  sr.reveal(".portfolio__content" , { distance: "45px" ,duration: 300 ,interval:300});
  
  sr.reveal(".skill__content" , { origin: "left"});
  sr.reveal(".certi__container" , { origin: "right"});
})

  return (
    <div data-theme={theme ? "light" : "dark"} className='themed-div'>
      <Header />
      <div className='section container toogle_theme-btn' >
      <div class="toggle-switch">
  <label class="switch-label">
    <input type="checkbox" class="checkbox" onClick={changeTheme}/>
    <span class="slider"></span>
  </label>
</div>  
      </div>
      <main className="main">
        <Home />
        <About />
        <SKill />
        <Portfolio />
        <Service />
        {/* <Qulification /> */}
        {/* <Testimonial /> */}
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </div>
  )
}

export default App;
