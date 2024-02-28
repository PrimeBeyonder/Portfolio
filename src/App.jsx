
import './App.css'
import About from './components/about/About';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Service from './components/services/Service';

function App() {


  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Service />
      </main>
    </>
  )
}

export default App
