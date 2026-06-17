import React, { useState } from 'react';
import styles from './VolumeSlider.module.css';
import { VolumeSliderThumb } from './VolumeSliderThumb';

const VolumeSlider = ({ volume, setVolume }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const handleSliderChange = (e) => {
    setVolume(parseFloat(e.target.value));
  };

  const handlePointerDown = () => setIsDragging(true);
  const handlePointerUp = () => setIsDragging(false);

  const active = isHovered || isDragging;

  return (
    <div 
      className={styles.sliderContainer}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.trackArea}>
        {/* Background Left Thick Line */}
        <div 
          className={styles.thickLine} 
          style={{
            width: `calc(${volume * 100}% - 10px)`,
            opacity: 0.2
          }} 
        />
        {/* Animated Left Thick Line */}
        <div 
          className={styles.thickLine} 
          style={{
            width: `calc(${volume * 100}% - 10px)`,
            transform: `scaleX(${active ? 1 : 0})`
          }} 
        />

        {/* Background Right Thin Line */}
        <div 
          className={styles.thinLine} 
          style={{
            left: `calc(${volume * 100}% + 13px)`,
            width: `calc(100% - (${volume * 100}% + 13px))`,
            opacity: 0.2
          }} 
        />
        {/* Animated Right Thin Line */}
        <div 
          className={styles.thinLine} 
          style={{
            left: `calc(${volume * 100}% + 13px)`,
            width: `calc(100% - (${volume * 100}% + 13px))`,
            transform: `scaleX(${active ? 1 : 0})`
          }} 
        />

        {/* Thumb Text */}
        <div 
          className={`${styles.thumbWrapper} ${active ? styles.thumbActive : ''}`}
          style={{
            left: `calc(${volume * 100}%)`,
          }}
        >
          <VolumeSliderThumb />
        </div>
      </div>

      {/* Invisible range input for interaction */}
      <input 
        type="range" 
        min="0" 
        max="1" 
        step="0.01" 
        value={volume} 
        onChange={handleSliderChange}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        className={styles.rangeInput}
      />
    </div>
  );
};

export default VolumeSlider;
