"use client";

import { useState } from 'react';
import Header from './src/components/header';
import Sidebar from './src/components/sidebar';
import InfoPanel from './src/components/infoPanel';
import MapSection from './src/components/mapSection';
import EmojiSpawner from './src/components/game_emoji'; 
import BaseMap from './src/images/SVG/googleearth_BC.svg';
import IndigenousImg from './src/images/SVG/Indigenous_people.jpg';

const regionData = {
  1: { 
    title: "Indigenous People", 
    desc: "Indigenous peoples in Canada are the original inhabitants of the land, comprising over 1.8 million people (5% of the population) as of 2021. Recognized in the Constitution as three distinct groups—First Nations, Inuit, and Métis—they possess diverse cultures, languages, and rights. They are the fastest-growing and youngest population, with significant cultural revitalization efforts. ", 
    photo: IndigenousImg.src 
  },
  2: { title: "Interior Salish", desc: "The Interior Salish are an Indigenous group..." },
  3: { title: "Northern BC", desc: "Home to diverse language groups..." },
};

export default function Page() {
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isGameActive, setIsGameActive] = useState(false); // New State

  const activeData = regionData[selectedRegion] || { title: "Details", desc: "No additional info available." };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsGameActive(false);
  };

  return (
    <div style={styles.pageWrapper}>
      <Header />
      <div style={styles.layout}>
        <Sidebar onSelectRegion={setSelectedRegion} />
        <main style={styles.main}>
          <MapSection />
          <img src={BaseMap.src} style={styles.mapImg} alt="Map" />
        </main>
        <InfoPanel
          regionId={selectedRegion}
          onImageClick={() => setIsModalOpen(true)}
          regionData={regionData}
        />
      </div>

      {/* The Pop-out Modal */}
      {isModalOpen && (
        <div style={styles.modalOverlay} onClick={closeModal}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button style={styles.closeBtn} onClick={closeModal}>✕</button>
            <h2 style={styles.modalTitle}>{activeData.title}</h2>
            
            <div style={styles.contentBox}>
              <p style={styles.modalText}>{activeData.desc}</p>
              
              {/* This is the "Level 1" Gallery Placeholder */}
              <div 
                style={styles.galleryPlaceholder} 
                onClick={() => setIsGameActive(true)}
              >
                {isGameActive ? (
                  <EmojiSpawner />
                ) : (
                  <div style={styles.loadTrigger}>
                     <small style={{display:'block', marginTop:'10px', fontSize:'12px'}}>
                       (Click to Start Game)
                     </small>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  pageWrapper: { display: 'flex', flexDirection: 'column', height: '100vh', width: '100vw', backgroundColor: '#8faa6b' },
  layout: { display: 'flex', flex: 1, overflow: 'hidden' },
  main: { flex: 1, position: 'relative', overflow: 'hidden' },
  mapImg: { width: '100%', height: '100%', objectFit: 'cover' },
  modalOverlay: { position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.85)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 },
  modalContent: { backgroundColor: '#6b4c1e', padding: '40px', borderRadius: '16px', width: '70%', maxWidth: '900px', border: '2px solid #d4b483', position: 'relative' },
  modalTitle: { color: '#f5e6c8', fontSize: '32px', textTransform: 'uppercase', borderBottom: '2px solid #d4b483', paddingBottom: '10px' },
  modalText: { color: '#f5e6c8', fontSize: '18px', lineHeight: '1.6' },
  galleryPlaceholder: { 
    backgroundColor: '#d4b483', 
    height: '250px', 
    borderRadius: '8px', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    position: 'relative',
    cursor: 'pointer',
    overflow: 'hidden' 
  },
  loadTrigger: { textAlign: 'center', color: '#6b4c1e', fontWeight: 'bold' },
  closeBtn: { position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none', color: '#f5e6c8', fontSize: '28px', cursor: 'pointer' }
};