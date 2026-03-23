'use client';

import Image from 'next/image';
import searchTabIcon from '../images/SVG/searchTab.svg';

export default function SearchButton() {
  return (
    <div style={{
      position: 'relative',
      // 1. Increased width and height (scaled from 320x80)
      width: '450px', 
      height: '110px',
      display: 'flex',
      alignItems: 'center'
    }}>
      <Image 
        src={searchTabIcon} 
        alt="" 
        fill 
        style={{ objectFit: 'contain', zIndex: 1 }} 
        priority
      />

      <input 
        type="text" 
        placeholder="SEARCH..." 
        style={{
          position: 'relative',
          zIndex: 2,
          background: 'transparent',
          border: 'none',
          outline: 'none',
          width: '75%',
          paddingLeft: '35px', 
          fontSize: '28px',
          fontWeight: '900',
          color: '#2c1a0e',
          textTransform: 'uppercase',
          letterSpacing: '2px'
        }}
      />
    </div>
  );
}