// components/InfoPanel.js

const regionData = {
  1: { 
    title: "Coast Salish", 
    photo: "/images/photos/coast-salish.jpg", 
    desc: "The Coast Salish languages are a group of ethnically and linguistically related Indigenous peoples of the Pacific Northwest Coast.",
    facts: "Includes languages like Squamish (Sḵwx̱wú7mesh) and Halkomelem."
  },
  2: { 
    title: "Interior Salish", 
    photo: "/images/photos/interior-salish.jpg", 
    desc: "The Interior Salish are an Indigenous group located in the Southern Interior of British Columbia and parts of the US.",
    facts: "Known for deep linguistic connections to the plateau regions."
  },
  3: { 
    title: "Northern BC", 
    photo: "/images/photos/northern-bc.jpg", 
    desc: "Home to diverse language groups across the expansive northern landscapes.",
    facts: "Includes the Tsimshianic and Athabaskan language families."
  },
  // Add entries for 4 through 8 as needed
};

// ADDED: onImageClick prop here
export default function InfoPanel({ regionId, onImageClick }) {
  
  const data = regionData[regionId] || {
    title: "Select a Region",
    photo: "/images/SVG/logo.svg",
    desc: "Touch a nameplate in the sidebar or a region on the map to explore the roots of the tongue.",
    facts: "Linguistic and cultural insights will appear here."
  };

  return (
    <aside style={styles.panel}>
      {/* ADDED: onClick and cursor style to trigger the pop-out */}
      <div 
        style={{ ...styles.imageContainer, cursor: 'zoom-in' }} 
        onClick={onImageClick}
      >
        <img
          src={data.photo} 
          alt={data.title}
          style={styles.img}
        />
      </div>

      <div style={styles.card}>
        <h3 style={styles.title}>{data.title}</h3>
        <p style={styles.description}>{data.desc}</p>

        <h4 style={styles.subTitle}>Quick Facts</h4>
        <p style={styles.facts}>{data.facts}</p>
      </div>
    </aside>
  );
}

const styles = {
  panel: {
    width: '300px',
    backgroundColor: '#c8a96e',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    borderLeft: '4px solid #b8941e',
    overflowY: 'auto'
  },
  imageContainer: {
    width: '100%',
    height: '200px',
    position: 'relative',
    borderRadius: '12px',
    overflow: 'hidden',
    backgroundColor: '#6b4c1e',
    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
    transition: 'transform 0.2s ease', // Visual feedback on hover
  },
  img: { 
    width: '100%', 
    height: '100%', 
    objectFit: 'cover',
    transition: 'opacity 0.3s ease'
  },
  card: {
    backgroundColor: '#d4b483',
    borderRadius: '12px',
    padding: '20px',
    color: '#2c1a0e',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
  },
  title: { 
    margin: '0 0 10px 0', 
    fontSize: '24px', 
    fontWeight: '900', 
    textTransform: 'uppercase' 
  },
  description: { 
    margin: '0 0 20px 0', 
    fontSize: '15px', 
    lineHeight: '1.5', 
    opacity: 0.9 
  },
  subTitle: { 
    margin: '0 0 8px 0', 
    fontSize: '18px', 
    fontWeight: '700', 
    borderBottom: '2px solid #6b4c1e', 
    display: 'inline-block' 
  },
  facts: { 
    margin: '10px 0 0 0', 
    fontSize: '14px', 
    fontStyle: 'italic' 
  }
};