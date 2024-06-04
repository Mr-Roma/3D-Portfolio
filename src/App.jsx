import { useEffect, useRef } from 'react';
import { BrowserRouter } from "react-router-dom";
import { Contact, Experience, Hero, Navbar, Portfolio } from "./components";
import sound from "./assets/star_citizen.mp3";
import AnimatedCursor from './components/AnimatedCursor';
const App = () => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const audioElement = new Audio(sound);
    audioElement.loop = true; // Set the loop attribute to loop the audio continuously
    audioElement.volume = 0.5; // Set the volume level (from 0 to 1)

    // Start playing the audio
    const playPromise = audioElement.play();
    if (playPromise !== undefined) {
      playPromise
        .then(_ => {
          // Automatic playback started!
        })
        .catch(error => {
          // Auto-play was prevented
          console.log("playback prevented");
        });
    }

    return () => {
      audioElement.pause(); // Pause the audio when the component unmounts
    };
  }, []); // Add an empty dependency array to ensure this effect runs only once

  return (
    <BrowserRouter>
    <AnimatedCursor color = "255, 105, 180"/>
      <div className='relative z-0 bg-primary'>
        <Navbar />
        <div className='wrapper' ref={wrapperRef}>
          <div id="hero" className='z-10'>
            <Hero scrollContainer={wrapperRef} />
          </div>
          <div id="portfolio" className='relative z-30 bg-primary mt-[-2px]'>
            <Portfolio />
          </div>
          <div id="experience" className='relative z-30 bg-primary'>
            <Experience />
          </div>
          <div id="contact" className='relative z-30 bg-primary'>
            <Contact />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;