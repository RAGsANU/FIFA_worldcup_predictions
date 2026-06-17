import React, { useState, useEffect, useRef } from 'react';
import styles from './Header.module.css';

import heroVideo  from './assets/videoplayback.webm';
import introVideo   from './assets/f36580250122169.6a1883088c11b.mp4';
import loopOverlayVideo from './assets/d33e60250122169.6a22f2a315c4d.mp4';
import rect46753  from './assets/HeaderSVGs/Rectangle 46753.svg';
import rect46754  from './assets/HeaderSVGs/Rectangle 46754.svg';
import rect46755  from './assets/HeaderSVGs/Rectangle 46755.svg';
import rect46756  from './assets/HeaderSVGs/Rectangle 46756.svg';
import rect46757  from './assets/HeaderSVGs/Rectangle 46757.svg';
import rect46758  from './assets/HeaderSVGs/Rectangle 46758.svg';
import rect46759  from './assets/HeaderSVGs/Rectangle 46759.svg';
import rect46760  from './assets/HeaderSVGs/Rectangle 46760.svg';
import logoIcon   from './assets/HeaderSVGs/Group 1597880973.svg';

// Fallback duration in case video events fail
const INTRO_FALLBACK_MS = 6500;

const Header = () => {
  // false = intro GIF showing, true = navbar showing
  const [navReady, setNavReady] = useState(false);
  // false = expanded, true = collapsed into center
  const [isCollapsed, setIsCollapsed] = useState(true);
  // 0 = videoplayback.webm, 1 = d33e60250122169.6a22f2a315c4d.mp4
  const [activeBgIndex, setActiveBgIndex] = useState(0);
  
  const bgVideo1Ref = useRef(null);
  const bgVideo2Ref = useRef(null);
  const videoRef = useRef(null);

  // Switch to the other video when the current one ends
  const handleBgVideoEnd = () => {
    setActiveBgIndex(prev => (prev === 0 ? 1 : 0));
  };

  useEffect(() => {
    // Ensure the new active video starts from the beginning
    if (activeBgIndex === 0) {
      if (bgVideo1Ref.current) {
        bgVideo1Ref.current.currentTime = 0;
        bgVideo1Ref.current.play().catch(e => console.log('Autoplay prevented', e));
      }
    } else {
      if (bgVideo2Ref.current) {
        bgVideo2Ref.current.currentTime = 0;
        bgVideo2Ref.current.play().catch(e => console.log('Autoplay prevented', e));
      }
    }
  }, [activeBgIndex]);

  useEffect(() => {
    const timer = setTimeout(() => setNavReady(true), INTRO_FALLBACK_MS);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.d33e602501221696a22f2a315c4dParent}>
      {/* Background Video 1 */}
      <video
        ref={bgVideo1Ref}
        className={`${styles.d33e602501221696a22f2a315c4dIcon} ${activeBgIndex === 0 ? styles.activeBg : styles.inactiveBg}`}
        src={heroVideo}
        autoPlay
        muted
        playsInline
        onEnded={handleBgVideoEnd}
      />
      
      {/* Background Video 2 */}
      <video
        ref={bgVideo2Ref}
        className={`${styles.d33e602501221696a22f2a315c4dIcon} ${activeBgIndex === 1 ? styles.activeBg : styles.inactiveBg}`}
        src={loopOverlayVideo}
        muted
        playsInline
        onEnded={handleBgVideoEnd}
      />

      {/* ── Intro Video (plays once at navbar position, then hides) ── */}
      <video
        ref={videoRef}
        className={`${styles.introVideo} ${navReady ? styles.introVideoHidden : ''}`}
        src={introVideo}
        autoPlay
        muted
        playsInline
        onEnded={() => setNavReady(true)}
      />

      {/* ── Navbar (hidden until intro GIF finishes, then rises up) ── */}
      <div className={`${styles.rectangleParent} ${navReady ? styles.navbarVisible : styles.navbarHidden}`}>
        
        {/* Navbar Body (shrinks to center when collapsed) */}
        <div className={`${styles.navBodyWrapper} ${isCollapsed ? styles.collapsed : ''}`}>
          <div className={styles.navBodyInner}>
            {/* 5 stacked SVG colour layers */}
            <img className={styles.frameChild}    src={rect46753} alt="" />
            <img className={styles.frameItem}     src={rect46754} alt="" />
            <img className={styles.frameInner}    src={rect46755} alt="" />
            <img className={styles.rectangleIcon} src={rect46756} alt="" />
            <img className={styles.frameChild2}   src={rect46757} alt="" />

            {/* Nav links */}
            <div className={styles.groupParent}>
              <div className={styles.homeParent}>
                <b className={styles.home}>Home</b>
                <b className={styles.matches}>Matches</b>
                <b className={styles.stats}>stats</b>
              </div>
              <div className={styles.predictionsParent}>
                <b className={styles.home}>predictions</b>
                <b className={styles.table}>Table</b>
                <b className={styles.me}>Me</b>
              </div>
            </div>
          </div>
        </div>

        {/* Crest Wrapper (animates in slightly later, clickable to toggle navbar) */}
        <div 
          className={`${styles.crestWrapper} ${isCollapsed ? styles.collapsed : ''}`}
          onClick={() => navReady && setIsCollapsed(!isCollapsed)}
        >
          {/* Crest tab caps */}
          <img className={styles.frameChild3} src={rect46758} alt="" />
          <img className={styles.frameChild4} src={rect46760} alt="" />
          <img className={styles.frameChild5} src={rect46759} alt="" />
          {/* FIFA logo */}
          <img className={styles.groupIcon} src={logoIcon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
