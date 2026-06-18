import React from 'react';
import styles from './TournamentFormat.module.css';

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

const groupsDataTop = [
  { name: 'GROUP A', color: '#00d95f', flags: [flagMex, flagRsa, flagKOR, flagCze] },
  { name: 'GROUP B', color: '#ff003c', flags: [flagCan, flagQat, flagSui, flagBih] },
  { name: 'GROUP C', color: '#ff8c00', flags: [flagBra, flagMar, flagHai, flagSco] },
  { name: 'GROUP D', color: '#0044ff', flags: [flagUsa, flagAus, flagPar, flagTur] },
  { name: 'GROUP E', color: '#7b00ff', flags: [flagGer, flagCiv, flagEcu, flagCuw] },
  { name: 'GROUP F', color: '#ccff00', flags: [flagNed, flagSwe, flagJpn, flagTun] },
];

const groupsDataBottom = [
  { name: 'GROUP G', color: '#ff66a3', flags: [flagBel, flagEgy, flagIrn, flagNzl] },
  { name: 'GROUP H', color: '#00ffcc', flags: [flagEsp, flagSau, flagUru, flagCpv] },
  { name: 'GROUP I', color: '#a366ff', flags: [flagFra, flagSen, flagIrq, flagNor] },
  { name: 'GROUP J', color: '#008cff', flags: [flagArg, flagAlg, flagAut, flagJor] },
  { name: 'GROUP K', color: '#ff4400', flags: [flagPor, flagCol, flagUzb, flagCod] },
  { name: 'GROUP L', color: '#00bfff', flags: [flagEng, flagCro, flagPan, flagGha] },
];

const BracketColumn = ({ numPairs, isLeft, isWhite }) => {
  return (
    <div className={styles.bracketColumn}>
      {Array.from({ length: numPairs }).map((_, i) => (
        <div key={i} className={styles.matchNode}>
          <div className={styles.leafPair}>
            <div className={`${styles.leafCard} ${!isWhite ? styles.grey : ''}`} style={{ '--leaf-icon': `url("${leafIcon}")` }} />
            <div className={`${styles.leafCard} ${!isWhite ? styles.grey : ''}`} style={{ '--leaf-icon': `url("${leafIcon}")` }} />
          </div>
          {numPairs > 1 && i % 2 === 0 && (
            <div className={styles.connectorContainer}>
              <div className={styles.connectorOut} />
            </div>
          )}
          {numPairs === 1 && (
            <div className={styles.connectorSingleOut} />
          )}
        </div>
      ))}
    </div>
  );
};

const TournamentFormat = () => {
  return (
    <section className={styles.formatSection}>
      <h2 className={styles.title}>THE FORMAT</h2>
      
      {/* Top Groups */}
      <div className={styles.groupsRow}>
        {groupsDataTop.map(group => (
          <div key={group.name} className={styles.groupCard} style={{ '--group-color': group.color }}>
            <div className={styles.groupFlagsBox}>
              {group.flags.map((flag, idx) => (
                <div key={idx} className={styles.flagWrapper}>
                  <img src={flag} alt="flag" className={styles.flagIcon} />
                </div>
              ))}
            </div>
            <div className={styles.groupLabel}>{group.name}</div>
          </div>
        ))}
      </div>

      {/* Knockout Bracket */}
      <div className={styles.knockoutArea}>
        {/* Left Side */}
        <div className={`${styles.bracketSide} ${styles.bracketSideLeft}`}>
          <BracketColumn numPairs={8} isLeft={true} isWhite={true} />
          <BracketColumn numPairs={4} isLeft={true} isWhite={false} />
          <BracketColumn numPairs={2} isLeft={true} isWhite={false} />
          <BracketColumn numPairs={1} isLeft={true} isWhite={false} />
        </div>

        {/* Center */}
        <div className={styles.centerArea}>
          <div className={styles.centerLabel}>WORLD CHAMPIONS</div>
          <div className={styles.centerLeaf} />
          
          <img src={trophyIcon} alt="World Cup Trophy" className={styles.trophy} />
          
          <div className={styles.centerLabel}>RUNNERS-UP</div>
          <div className={styles.centerLeaf} />
        </div>

        {/* Right Side */}
        <div className={`${styles.bracketSide} ${styles.bracketSideRight}`}>
          <BracketColumn numPairs={8} isLeft={false} isWhite={true} />
          <BracketColumn numPairs={4} isLeft={false} isWhite={false} />
          <BracketColumn numPairs={2} isLeft={false} isWhite={false} />
          <BracketColumn numPairs={1} isLeft={false} isWhite={false} />
        </div>
      </div>

      {/* Bottom Groups */}
      <div className={styles.groupsRow}>
        {groupsDataBottom.map(group => (
          <div key={group.name} className={styles.groupCard} style={{ '--group-color': group.color }}>
            <div className={styles.groupFlagsBox}>
              {group.flags.map((flag, idx) => (
                <div key={idx} className={styles.flagWrapper}>
                  <img src={flag} alt="flag" className={styles.flagIcon} />
                </div>
              ))}
            </div>
            <div className={styles.groupLabel}>{group.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TournamentFormat;
