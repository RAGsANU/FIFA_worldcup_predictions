import React from 'react';
import styles from './Footer.module.css';
import logoSvg from './assets/HeaderSVGs/Group 1597880973.svg';
import fadedOutlineSvg from './assets/FooterSVGs/Group 1597880975.svg';
import VolumeSlider from './VolumeSlider';

const Footer = ({ volume, setVolume }) => {
  return (
    <div className={styles.lineParent}>
      <VolumeSlider volume={volume} setVolume={setVolume} />
      <div className={styles.frameChild} />
      <img className={styles.frameItem} alt="" src={logoSvg} />
      <img className={styles.frameInner} alt="" src={fadedOutlineSvg} />
      <div className={styles.parent}>
        <div className={styles.div}>2<br/></div>
        <div className={styles.div2}>6</div>
      </div>
      <div className={styles.thisWebsiteIs}>{`*This website is not affiliated with FIFA `}</div>
      <div className={styles.fifa2026AllContainer}>
        <span className={styles.fifa2026}>{`FIFA 2026 `}</span>
        <span className={styles.allRightsReserved}>all rights reserved</span>
      </div>
      <div className={styles.home}>Home</div>
      <div className={styles.matches}>Matches</div>
      <div className={styles.predictions}>Predictions</div>
      <div className={styles.stats}>Stats</div>
      <div className={styles.table}>Table</div>
      <div className={styles.me}>me</div>
    </div>
  );
};

export default Footer;
