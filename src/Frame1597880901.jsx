import React from 'react';
import styles from './Frame1597880901.module.css';

// Flags
import flagArg from './assets/flags/Flag_of_Argentina.svg.webp';
import flagAus from './assets/flags/Flag-Australia.webp';
import flagAut from './assets/flags/Flag_of_Austria.svg.webp';
import flagBel from './assets/flags/Flag_of_Belgium.svg.png';
import flagBih from './assets/flags/Flag_of_Bosnia_and_Herzegovina.svg.webp';
import flagBra from './assets/flags/Flag-Brazil.webp';
import flagCan from './assets/flags/Flag_of_Canada_(Pantone).svg.webp';
import flagCiv from './assets/flags/Flag-Cote-dIvoire.webp';
import flagCol from './assets/flags/Flag-Colombia.webp';
import flagCro from './assets/flags/Flag_of_Croatia.svg.webp';
import flagCpv from './assets/flags/Flag-Cabo-Verde.webp';
import flagCuw from './assets/flags/Flag_of_Curaçao.svg.png';
import flagCod from './assets/flags/CongoDR.png';
import flagEcu from './assets/flags/flag-design-similarities-Ecuador-Colombia-flags-Venezuela.webp';
import flagEgy from './assets/flags/Flag-Egypt.webp';
import flagEng from './assets/flags/Flag_of_England.svg.webp';
import flagFra from './assets/flags/Flag_of_France.svg.webp';
import flagGer from './assets/flags/Flag_of_Germany.svg.webp';
import flagGha from './assets/flags/ghana-officially-flag-free-vector.jpg';
import flagHai from './assets/flags/ht.png';
import flagIrn from './assets/flags/Flag_of_Iran.svg.webp';
import flagIrq from './assets/flags/Flag_of_Iraq.svg.webp';
import flagJpn from './assets/flags/Flag-Japan.webp';
import flagJor from './assets/flags/Flag-Jordan.webp';
import flagKOR from './assets/flags/Flag_of_South_Korea.svg.webp';
import flagMex from './assets/flags/mexico-162359_1280.png';
import flagMar from './assets/flags/Flag_of_Morocco_hexagram.svg.png';
import flagNed from './assets/flags/Flag_of_the_Netherlands.svg.png';
import flagNzl from './assets/flags/Flag_of_New_Zealand.svg.webp';
import flagNor from './assets/flags/Flag_of_Norway.svg.webp';
import flagPan from './assets/flags/Flag_of_Panama.svg.webp';
import flagPar from './assets/flags/Flag-Paraguay.webp';
import flagPor from './assets/flags/Flag_of_Portugal_(official).svg.webp';
import flagQat from './assets/flags/Flag_of_Qatar.svg.webp';
import flagSau from './assets/flags/Flag_of_Saudi_Arabia_(type_2).svg.png';
import flagSco from './assets/flags/Flag_of_Scotland.svg.png';
import flagSen from './assets/flags/Flag_of_Senegal.svg.png';
import flagRsa from './assets/flags/Flag-South-Africa.webp';
import flagEsp from './assets/flags/Flag_of_Spain.svg.png';
import flagSwe from './assets/flags/sweden_flag.png';
import flagSui from './assets/flags/switzerland.webp';
import flagTun from './assets/flags/Flag_of_Tunisia.svg.webp';
import flagTur from './assets/flags/Flag_of_Turkey.svg.webp';
import flagUsa from './assets/flags/Flag_of_the_United_States.svg.png';
import flagUru from './assets/flags/Flag_of_Uruguay.svg.png';
import flagUzb from './assets/flags/Flag-Uzbekistan.webp';
import flagAlg from './assets/flags/Flag_of_Algeria.svg.png';
import flagCze from './assets/flags/Flag_of_the_Czech_Republic.svg.png';

import leafIcon from './assets/trophy and card types/Rectangle 46765.svg';
import trophyIcon from './assets/trophy and card types/Katman 1 Görüntü.svg';

const BracketColumn = ({ numPairs, isLeft, isWhite, isSingle }) => {
  return (
    <div className={styles.bracketColumn}>
      {Array.from({ length: numPairs }).map((_, i) => (
        <div key={i} className={styles.matchNode}>
          {isSingle ? (
            <div className={`${styles.leafCard} ${!isWhite ? styles.grey : ''}`} />
          ) : (
            <div className={styles.leafPair}>
              <div className={`${styles.leafCard} ${!isWhite ? styles.grey : ''}`} />
              <div className={`${styles.leafCard} ${!isWhite ? styles.grey : ''}`} />
            </div>
          )}
          {!isSingle && numPairs > 1 && i % 2 === 0 && (
            <div className={styles.connectorContainer}>
              <div className={styles.connectorOut} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const Frame1597880901 = () => {
  return (
    <div className={styles.worldChampionsParent} style={{ '--leaf-icon': `url("${leafIcon}")` }}>
      <b className={styles.worldChampions}>WORLD CHAMPIONS</b>
      <b className={styles.theFormat}>THE FORMAT</b>
      <b className={styles.runnersUp}>RUNNERS-UP</b>
      <img className={styles.katman1GrntIcon} src={trophyIcon} alt="World Cup Trophy" />
      
      {/* Right Bracket (Replacing empty frameChild img) */}
      <div className={`${styles.frameChild} ${styles.bracketSideRight}`}>
        <BracketColumn numPairs={8} isLeft={false} isWhite={true} />
        <BracketColumn numPairs={4} isLeft={false} isWhite={false} />
        <BracketColumn numPairs={2} isLeft={false} isWhite={false} />
        <BracketColumn numPairs={1} isLeft={false} isWhite={false} isSingle={true} />
      </div>

      {/* Left Bracket (Replacing empty frameItem img) */}
      <div className={`${styles.frameItem} ${styles.bracketSideLeft}`}>
        <BracketColumn numPairs={8} isLeft={true} isWhite={true} />
        <BracketColumn numPairs={4} isLeft={true} isWhite={false} />
        <BracketColumn numPairs={2} isLeft={true} isWhite={false} />
        <BracketColumn numPairs={1} isLeft={true} isWhite={false} isSingle={true} />
      </div>

      {/* Finalist Center Leaves (Replacing empty inner images) */}
      <div className={styles.frameInner} />
      <div className={styles.rectangleIcon} />

      <div className={styles.groupParent}>
        <div className={styles.groupWrapper}>
          <div className={styles.groupWrapper}>
            <div className={styles.frameGroup}>
              <div className={styles.frameIcon}>
                <img src={flagMex} alt="" className={styles.flagCell} />
                <img src={flagRsa} alt="" className={styles.flagCell} />
                <img src={flagKOR} alt="" className={styles.flagCell} />
                <img src={flagCze} alt="" className={styles.flagCell} />
              </div>
              <b className={styles.groupA}>Group A</b>
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.frameIcon}>
                <img src={flagCan} alt="" className={styles.flagCell} />
                <img src={flagQat} alt="" className={styles.flagCell} />
                <img src={flagSui} alt="" className={styles.flagCell} />
                <img src={flagBih} alt="" className={styles.flagCell} />
              </div>
              <b className={styles.groupA}>Group b</b>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.frameIcon}>
                <img src={flagBra} alt="" className={styles.flagCell} />
                <img src={flagMar} alt="" className={styles.flagCell} />
                <img src={flagHai} alt="" className={styles.flagCell} />
                <img src={flagSco} alt="" className={styles.flagCell} />
              </div>
              <b className={styles.groupA}>Group C</b>
            </div>
            <div className={styles.frameParent2}>
              <div className={styles.frameIcon}>
                <img src={flagUsa} alt="" className={styles.flagCell} />
                <img src={flagAus} alt="" className={styles.flagCell} />
                <img src={flagPar} alt="" className={styles.flagCell} />
                <img src={flagTur} alt="" className={styles.flagCell} />
              </div>
              <b className={styles.groupA}>Group d</b>
            </div>
            <div className={styles.frameParent3}>
              <div className={styles.frameIcon}>
                <img src={flagGer} alt="" className={styles.flagCell} />
                <img src={flagCiv} alt="" className={styles.flagCell} />
                <img src={flagEcu} alt="" className={styles.flagCell} />
                <img src={flagCuw} alt="" className={styles.flagCell} />
              </div>
              <b className={styles.groupE}>Group e</b>
            </div>
            <div className={styles.frameParent4}>
              <div className={styles.frameIcon}>
                <img src={flagNed} alt="" className={styles.flagCell} />
                <img src={flagSwe} alt="" className={styles.flagCell} />
                <img src={flagJpn} alt="" className={styles.flagCell} />
                <img src={flagTun} alt="" className={styles.flagCell} />
              </div>
              <b className={styles.groupE}>Group f</b>
            </div>
          </div>
        </div>
        <div className={styles.groupContainer}>
          <div className={styles.groupWrapper}>
            <div className={styles.frameParent5}>
              <div className={styles.frameIcon}>
                <img src={flagBel} alt="" className={styles.flagCell} />
                <img src={flagEgy} alt="" className={styles.flagCell} />
                <img src={flagIrn} alt="" className={styles.flagCell} />
                <img src={flagNzl} alt="" className={styles.flagCell} />
              </div>
              <b className={styles.groupA}>Group g</b>
            </div>
            <div className={styles.frameParent6}>
              <div className={styles.frameIcon}>
                <img src={flagEsp} alt="" className={styles.flagCell} />
                <img src={flagSau} alt="" className={styles.flagCell} />
                <img src={flagUru} alt="" className={styles.flagCell} />
                <img src={flagCpv} alt="" className={styles.flagCell} />
              </div>
              <b className={styles.groupA}>Group h</b>
            </div>
            <div className={styles.frameParent7}>
              <div className={styles.frameIcon}>
                <img src={flagFra} alt="" className={styles.flagCell} />
                <img src={flagSen} alt="" className={styles.flagCell} />
                <img src={flagIrq} alt="" className={styles.flagCell} />
                <img src={flagNor} alt="" className={styles.flagCell} />
              </div>
              <b className={styles.groupI}>Group i</b>
            </div>
            <div className={styles.frameParent8}>
              <div className={styles.frameIcon}>
                <img src={flagArg} alt="" className={styles.flagCell} />
                <img src={flagAlg} alt="" className={styles.flagCell} />
                <img src={flagAut} alt="" className={styles.flagCell} />
                <img src={flagJor} alt="" className={styles.flagCell} />
              </div>
              <b className={styles.groupA}>Group j</b>
            </div>
            <div className={styles.frameParent9}>
              <div className={styles.frameIcon}>
                <img src={flagPor} alt="" className={styles.flagCell} />
                <img src={flagCol} alt="" className={styles.flagCell} />
                <img src={flagUzb} alt="" className={styles.flagCell} />
                <img src={flagCod} alt="" className={styles.flagCell} />
              </div>
              <b className={styles.groupK}>Group k</b>
            </div>
            <div className={styles.frameParent10}>
              <div className={styles.frameIcon}>
                <img src={flagEng} alt="" className={styles.flagCell} />
                <img src={flagCro} alt="" className={styles.flagCell} />
                <img src={flagPan} alt="" className={styles.flagCell} />
                <img src={flagGha} alt="" className={styles.flagCell} />
              </div>
              <b className={styles.groupE}>Group l</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame1597880901;
