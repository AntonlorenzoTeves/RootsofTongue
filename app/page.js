"use client";

import { useState } from 'react';
import Header from './src/components/header';
import Sidebar from './src/components/sidebar';
import MapView from './src/components/mapView';
import InfoPanel from './src/components/infoPanel';

export default function Page() {
  // 1. State to track which map segment is active
  const [selectedRegion, setSelectedRegion] = useState(null);

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      height: '100vh', 
      width: '100vw',
      margin: 0,
      padding: 0,
      overflow: 'hidden',
      backgroundColor: '#8faa6b' 
    }}>
      
      <Header />

      <div style={{ 
        display: 'flex', 
        flexDirection: 'row', 
        flex: 1, 
        width: '100%',
        overflow: 'hidden' 
      }}>
        
        {/* 2. Sidebar: Pass setter so list clicks can update the map */}
        <Sidebar onSelectRegion={setSelectedRegion} />

        <main style={{ 
          flex: 1, 
          position: 'relative', 
          overflow: 'hidden',
          margin: 0,
          padding: 0,
          display: 'flex' 
        }}>
          {/* 3. MapView: Receives the state and the setter function */}
          <MapView 
            selectedId={selectedRegion} 
            onSelectRegion={setSelectedRegion} 
          />
        </main>

        {/* 4. InfoPanel: Displays the data for the selected ID */}
        <InfoPanel regionId={selectedRegion} />

      </div>
    </div>
  );
}