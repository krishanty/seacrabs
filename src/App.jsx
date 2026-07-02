import { useState, useRef } from 'react';
import './App.css';
import MapComponent from './MapComponent';
import TitleBar from './TitleBar';
import About from './About';
import News from './News';
import Contact from './Contact';

function App() {
  const [count, setCount] = useState(0);
  return (
  <div className="app-wrapper">
    <TitleBar/>
    <section id="map">
        <div className="hero">
          <MapComponent />
        </div>
    </section>
    <section id="about">
      <About />
    </section>
    <section id="news" >
      <News />
    </section>
    <section id="contact">
      <Contact />
    </section>
  </div>
  )
}

export default App
