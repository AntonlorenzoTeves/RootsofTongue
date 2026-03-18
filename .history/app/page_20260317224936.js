"use client";

import { useState } from 'react';
import Header from './src/components/header';
import Sidebar from './src/components/sidebar';
import MapView from './src/components/mapView';
import InfoPanel from './src/components/infoPanel';
import MapSection from './src/components/mapSection';
import BaseMap from '/images/SVG/googleearth_BC.svg';


// Import the data so the modal knows what to show
// (Assuming you've exported regionData from your infoPanel.js or a data file)
const regionData = {
  1: { title: "Coast Salish", desc: "The Coast Salish languages are a group of ethnically and linguistically related Indigenous peoples of the Pacific Northwest Coast." },
  2: { title: "Interior Salish", desc: "The Interior Salish are an Indigenous group located in the Southern Interior of British Columbia." },
  3: { title: "Northern BC", desc: "Home to diverse language groups across the expansive northern landscapes." },
  //4: {title}
};



export default function Page() {
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Helper to get current data for the modal
  const activeData = regionData[selectedRegion] || { title: "Details", desc: "No additional info available." };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      width: '100vw',
      margin: 0,
      padding: 0,
      overflow: 'hidden',
      backgroundColor: '#8faa6b',
      position: 'relative'
    }}>

      <Header />

      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        width: '100%',
        overflow: 'hidden'
      }}>

        <Sidebar onSelectRegion={setSelectedRegion} />

        <main style={{
          flex: 1,
          position: 'relative',
          overflow: 'hidden',
          display: 'flex'
        }}>
          <MapSection />
           <img 
                    src={BaseMap} 
                    alt="BC Satellite" 
                    fill 
                    style={{ objectFit: 'contain' }} 
                    priority
                  />
          {/* <MapView
            selectedId={selectedRegion}
            onSelectRegion={setSelectedRegion}
          /> */}
        </main>

        <InfoPanel
          regionId={selectedRegion}
          onImageClick={() => setIsModalOpen(true)}
          regionData={regionData}
        />
      </div>

      {/* 3. The Pop-out (Modal) Overlay */}
      {isModalOpen && (
        <div
          style={styles.modalOverlay}
          onClick={() => setIsModalOpen(false)}
        >
          <div
            style={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button style={styles.closeBtn} onClick={() => setIsModalOpen(false)}>✕</button>

            <h2 style={styles.modalTitle}>{activeData.title}</h2>

            <div style={styles.contentBox}>
              <p style={styles.modalText}>{activeData.desc}</p>
              <div style={styles.galleryPlaceholder}>
                {/* You can add more Level 2 images here later */}
                <span style={{ color: '#6b4c1e' }}>Gallery View Loading...</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  modalOverlay: {
    position: 'absolute',
    inset: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    backdropFilter: 'blur(4px)', // Adds a nice professional touch
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modalContent: {
    backgroundColor: '#6b4c1e',
    padding: '40px',
    borderRadius: '16px',
    width: '70%',
    maxWidth: '900px',
    border: '2px solid #d4b483',
    position: 'relative',
    boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
  },
  modalTitle: {
    color: '#f5e6c8',
    marginTop: 0,
    fontSize: '32px',
    textTransform: 'uppercase',
    borderBottom: '2px solid #d4b483',
    paddingBottom: '10px'
  },
  contentBox: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    marginTop: '20px'
  },
  modalText: {
    color: '#f5e6c8',
    fontSize: '18px',
    lineHeight: '1.6'
  },
  galleryPlaceholder: {
    backgroundColor: '#d4b483',
    height: '250px',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold'
  },
  closeBtn: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    background: 'none',
    border: 'none',
    color: '#f5e6c8',
    fontSize: '28px',
    cursor: 'pointer',
  }
};