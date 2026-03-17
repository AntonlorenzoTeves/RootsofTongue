export default function InfoPanel() {
  return (
    <aside style={{
      width: '300px', // Slightly wider for better readability
      backgroundColor: '#c8a96e', // Page background color
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      borderLeft: '4px solid #b8941e', // Defined Sidebar gold as a border
      overflowY: 'auto'
    }}>
      {/* Feature Image */}
      <div style={{
        width: '100%',
        height: '200px',
        position: 'relative',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
      }}>
        <img
          src="/images/SVG/nameplate1.svg" // Replace with dynamic community photo later
          alt="Community Focus"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      {/* Info Card */}
      <div style={{
        backgroundColor: '#d4b483', // Info card background
        borderRadius: '12px',
        padding: '20px',
        color: '#2c1a0e', // Dark brown text
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        <h3 style={{ 
          margin: '0 0 10px 0', 
          fontSize: '24px', 
          fontWeight: '900',
          textTransform: 'uppercase' 
        }}>
          Region Details
        </h3>
        <p style={{ 
          margin: '0 0 20px 0', 
          fontSize: '15px', 
          lineHeight: '1.5',
          opacity: 0.9 
        }}>
          Select a region on the map to learn more about the Indigenous languages and traditions of this area.
        </p>

        <h4 style={{ 
          margin: '0 0 8px 0', 
          fontSize: '18px', 
          fontWeight: '700',
          borderBottom: '2px solid #6b4c1e',
          display: 'inline-block'
        }}>
          Quick Facts
        </h4>
        <p style={{ margin: '10px 0 0 0', fontSize: '14px', fontStyle: 'italic' }}>
          Historical data and linguistic information will appear here.
        </p>
      </div>
    </aside>
  )
}