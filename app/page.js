"use client";

import { useState } from 'react';
import Header from './src/components/header';
import Sidebar from './src/components/sidebar';
import InfoPanel from './src/components/infoPanel';
import MapSection from './src/components/mapSection';
import EmojiSpawner from './src/components/game_emoji'; 
import HideAndSeek from './src/components/game_hidenseek';
import HideandSeek2 from './src/components/game_hidenseeklvl2';

// Asset Imports
import BaseMap from './src/images/SVG/googleearth_BC.svg';
import IndigenousImg from './src/images/SVG/Indigenous_people.jpg';
import traditionalHouse from './src/images/SVG/traditionalHouse.jpg';
import landTreaty from './src/images/SVG/land_Treaty.jpg'

const regionData = {
  1: { 
    title: "Indigenous People", 
    desc: "Indigenous peoples in Canada are the original inhabitants of the land, comprising over 1.8 million people (5% of the population) as of 2021. Recognized in the Constitution as three distinct groups—First Nations, Inuit, and Métis—they possess diverse cultures, languages, and rights.", 
    photo: IndigenousImg.src 
  },
  2: { 
    title: "Land Treaties in British Columbia", 
    desc: "Treaty negotiations in BC are different from the rest of Canada as most of BC remains as unneeded territory without historical treaties. About 95% is unceded territory, which means it was not legally surrendered through treaty or war. In 1993 the BC Treaty Commission was made to hold negotiations with First Nations people’s to create legally binding documents. The purpose of these treaties are to define ongoing relationships, protect indigenous rights, and to establish sustainable development. Find the territory that BCIT campus resides on in the mini game above!",
    photo: landTreaty.src
  },
  3: { 
    title: "Info about languages:", 
    desc: "English and French are the most common languages spoken in Canada today. Currently there are 36 different indigenous languages spoken in British Columbia. Some of the common language families are Na-Dene, Haida, Tsimshianic, Wakashan, and Salishan. Play the game above to find out the most common language spoken in BC!",
    photo: traditionalHouse.src
  },
};

export default function Page() {
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isGameActive, setIsGameActive] = useState(false);

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
          <img src={BaseMap.src} style={styles.mapImg} alt="Base Map" />
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
              
              <div 
                style={styles.galleryPlaceholder} 
                onClick={() => !isGameActive && setIsGameActive(true)}
              >
                {isGameActive ? (
                  // --- START IF/ELSE SWAP LOGIC ---
                  (() => {
                    if (selectedRegion === 1) {
                      return <EmojiSpawner />;
                    } else if (selectedRegion === 2) {
                      return <HideandSeek2 />;
                    } else if (selectedRegion === 3) {
                      return <HideAndSeek />;
                    } else {
                      return <p style={{color: '#2c1a0e'}}>Press to play the game!</p>;
                    }
                  })()
                  // --- END IF/ELSE SWAP LOGIC ---
                ) : (
                  <div style={styles.loadTrigger}>
                     <p> Play the game here</p>
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
  pageWrapper: { display: 'flex', flexDirection: 'column', height: '100vh', width: '100vw', backgroundColor: '#8faa6b', overflow: 'hidden' },
  layout: { display: 'flex', flex: 1, overflow: 'hidden' },
  main: { flex: 1, position: 'relative', overflow: 'hidden', display: 'flex' },
  mapImg: { width: '100%', height: '100%', objectFit: 'cover' },
  modalOverlay: { position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.85)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 },
  modalContent: { backgroundColor: '#6b4c1e', padding: '40px', borderRadius: '16px', width: '70%', maxWidth: '900px', border: '2px solid #d4b483', position: 'relative' },
  modalTitle: { color: '#f5e6c8', fontSize: '32px', textTransform: 'uppercase', borderBottom: '2px solid #d4b483', paddingBottom: '10px' },
  modalText: { color: '#f5e6c8', fontSize: '18px', lineHeight: '1.6', marginBottom: '20px' },
  galleryPlaceholder: { 
    backgroundColor: '#d4b483', 
    height: '300px', 
    borderRadius: '8px', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    position: 'relative',
    cursor: 'pointer',
    overflow: 'hidden',
    border: '4px solid #6b4c1e'
    
  },
  loadTrigger: { textAlign: 'center', color: '#6b4c1e', fontWeight: 'bold' },
  closeBtn: { position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none', color: '#f5e6c8', fontSize: '28px', cursor: 'pointer' }
};