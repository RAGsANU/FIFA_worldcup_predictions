import React, { useEffect, useRef, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import bgmFile from './assets/videoplayback.m4a';

function App() {
  const audioRef = useRef(null);
  const [volume, setVolume] = useState(0.35);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    const tryPlay = () => {
      if (audioRef.current && audioRef.current.paused) {
        audioRef.current.play()
          .then(() => {
            removeListeners();
          })
          .catch(err => console.log('Audio play blocked:', err));
      } else if (audioRef.current && !audioRef.current.paused) {
        removeListeners();
      }
    };

    const removeListeners = () => {
      document.removeEventListener('click', tryPlay, { capture: true });
      document.removeEventListener('scroll', tryPlay, { capture: true });
      document.removeEventListener('keydown', tryPlay, { capture: true });
      document.removeEventListener('touchstart', tryPlay, { capture: true });
    };

    // Modern browsers block autoplay without interaction. 
    // We attach capture-phase listeners to start the music smoothly upon any user action.
    document.addEventListener('click', tryPlay, { capture: true });
    document.addEventListener('scroll', tryPlay, { capture: true });
    document.addEventListener('keydown', tryPlay, { capture: true });
    document.addEventListener('touchstart', tryPlay, { capture: true });

    // Attempt to play immediately
    if (audioRef.current) {
      audioRef.current.play().catch(() => {});
    }

    return removeListeners;
  }, []);

  const handleEnded = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(e => console.log('Loop play blocked:', e));
    }
  };

  return (
    <div style={{ background: '#000', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <audio ref={audioRef} src={bgmFile} loop autoPlay onEnded={handleEnded} />
      <Header />
      <Footer volume={volume} setVolume={setVolume} />
    </div>
  );
}

export default App;
