'use client';

import Image from 'next/image';

// Base Background Map
import BaseMap from '../images/SVG/googleearth_BC.svg';

// Import Segments (matching your file tree)
import MapSec1 from '../images/SVG/mapSec1.svg';
import MapSec2 from '../images/SVG/mapSec2.svg';
import MapSec3 from '../images/SVG/mapSec3.svg';
import MapSec4 from '../images/SVG/mapSec4.svg';
import MapSec5 from '../images/SVG/mapSec5.svg';
import MapSec6 from '../images/SVG/mapSec6.svg';
import MapSec7 from '../images/SVG/mapSec7.svg';
import MapSec8 from '../images/SVG/mapSec8.svg';

export default function MapView() {
  const segments = [
    MapSec1, MapSec2, MapSec3, MapSec4, 
    MapSec5, MapSec6, MapSec7, MapSec8
  ];

  return (
    <div style={styles.container}>
      {/* BASE LAYER: Satellite Background */}
      <div style={styles.layer}>
        <Image 
          src={BaseMap} 
          alt="BC Satellite" 
          fill 
          style={{ objectFit: 'contain' }} 
          priority
        />
      </div>

      {/* OVERLAY LAYER: The Interactive Outline Pieces */}
      {/* {segments.map((sec, index) => (
        <div key={index} style={styles.layer}>
          <Image 
            src={sec} 
            alt={`Region ${index + 1}`} 
            fill 
            style={styles.mapPiece}
          />
        </div>
      ))} */}
    </div>
  );
}

const styles = {
  container: {
    position: 'relative',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8faa6b', // Matches your earthy green background
  },
  layer: {
    position: 'absolute',
    // Key Fix: inset: 0 ensures the base map and segments fill the exact same box
    inset: 0, 
    pointerEvents: 'none', // Prevents div boxes from blocking each other
  },
  mapPiece: {
    // Key Fix: objectFit: contain ensures everything scales together precisely
    objectFit: 'contain',
    pointerEvents: 'auto', // Re-enables clicking only on the actual SVG shape
    cursor: 'pointer',
    transition: 'filter 0.3s ease, opacity 0.3s ease',
  }
};