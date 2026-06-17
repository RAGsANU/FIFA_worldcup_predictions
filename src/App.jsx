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
    const handleInteraction = () => {
      if (audioRef.current && audioRef.current.paused) {
        audioRef.current.play()
          .then(() => {
            // Clean up listeners once audio successfully starts
            document.removeEventListener('click', handleInteraction);
            document.removeEventListener('scroll', handleInteraction);
            document.removeEventListener('keydown', handleInteraction);
          })
          .catch(err => console.log('Audio play blocked:', err));
      } else {
        // If it's already playing, clean up listeners
        document.removeEventListener('click', handleInteraction);
        document.removeEventListener('scroll', handleInteraction);
        document.removeEventListener('keydown', handleInteraction);
      }
    };

    // Modern browsers block autoplay without interaction. 
    // We attach listeners to start the music smoothly upon any user action.
    document.addEventListener('click', handleInteraction);
    document.addEventListener('scroll', handleInteraction);
    document.addEventListener('keydown', handleInteraction);

    // Attempt to play immediately (sometimes allowed if user previously interacted)
    if (audioRef.current) {
      audioRef.current.play().catch(err => console.log('Waiting for interaction to play audio:', err));
    }

    return () => {
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('scroll', handleInteraction);
      document.removeEventListener('keydown', handleInteraction);
    };
  }, []);

  return (
    <div style={{ background: '#000', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <audio ref={audioRef} src={bgmFile} loop autoPlay />
      <Header />
      <Footer volume={volume} setVolume={setVolume} />
    </div>
  );
}

export default App;
