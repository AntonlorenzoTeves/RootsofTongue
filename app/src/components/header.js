import logoImg from '../images/SVG/logo.svg';
// 1. Import it with a Capital Letter
import SearchButton from './searchButton'; 

export default function Header() {
  return (
    <header style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between', 
      backgroundColor: '#6b4c1e',
      padding: '0 60px',
      height: '180px',      
      position: 'relative',
      zIndex: 10,
      borderBottom: '4px solid #523a17',
      overflow: 'visible' 
    }}>
      {/* Left Group: Logo & Title */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img 
          src={logoImg.src} 
          alt="Logo" 
          style={{ 
            position: 'absolute',
            left: '20px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '160px',               
            height: '160px', 
            objectFit: 'contain',
            zIndex: 20,
            filter: 'drop-shadow(0px 4px 8px rgba(0,0,0,0.4))'
          }} 
        />

        <div style={{ marginLeft: '180px' }}> 
          <h1 style={{ 
            fontSize: '64px', 
            margin: 0, 
            fontWeight: '900', 
            color: '#f5e6c8',
            textTransform: 'uppercase',
            lineHeight: '0.9',
            letterSpacing: '2px'
          }}>
            Roots of the Tongue
          </h1>
          <p style={{ 
            fontSize: '24px', 
            margin: '10px 0 0 0', 
            color: '#f5e6c8', 
            opacity: 0.9,
            fontWeight: '500'
          }}>
            Indigenous languages of British Columbia
          </p>
        </div>
      </div>

      {/* 2. Use the Capitalized component name here */}
      <div style={{ marginRight: '20px', zIndex: 30 }}>
        <SearchButton />
      </div>
    </header>
  );
}