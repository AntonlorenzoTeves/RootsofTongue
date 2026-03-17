'use client';

import Link from 'next/link';
import Image from 'next/image';

// standardizing imports based on your file tree
import NameplateImg from '../images/SVG/nameplate1.svg';
import HomeIcon from '../images/SVG/home1.svg';
import AboutIcon from '../images/SVG/badge.svg';
import SettingsIcon from '../images/SVG/logo.svg';

export default function Sidebar() {
  const menuItems = [
    { name: 'HOME', href: '/', icon: HomeIcon },
    { name: 'ABOUT', href: '/about', icon: AboutIcon },
    { name: 'SETTINGS', href: '/settings', icon: SettingsIcon },
  ];

  return (
    <aside style={styles.sidebar}>
      
      {/* 1. Sidebar Title: Brings user back to Home (page.js) */}
      <Link href="/" style={styles.titleLink}>
        <h2 style={styles.sidebarTitle}>EXPLORE</h2>
        <div style={styles.titleUnderline} />
      </Link>
      
      <nav style={styles.nav}>
        {menuItems.map((item) => (
          <Link key={item.name} href={item.href} style={styles.linkWrapper}>
            <div style={styles.nameplateContainer}>
              <Image 
                src={NameplateImg} 
                alt="" 
                fill 
                style={styles.nameplateBg} 
                priority
              />
              
              <div style={styles.linkContent}>
                <div style={styles.iconCircle}>
                  <Image src={item.icon} alt="" width={22} height={22} />
                </div>
                
                <span style={styles.linkText}>{item.name}</span>
                <span style={styles.arrow}>›</span>
              </div>
            </div>
          </Link>
        ))}
      </nav>
    </aside>
  );
}

const styles = {
  sidebar: {
    width: '280px',
    height: '100%',
    backgroundColor: '#141414',
    display: 'flex',
    flexDirection: 'column',
    padding: '30px 10px', 
    borderRight: '1px solid #333',
    boxSizing: 'border-box',
  },
  // Style for the Title Section
  titleLink: {
    textDecoration: 'none',
    marginBottom: '35px',
    paddingLeft: '15px',
    display: 'block'
  },
  sidebarTitle: {
    color: '#f5e6c8',
    fontSize: '20px',
    fontWeight: '900',
    letterSpacing: '3px',
    margin: 0,
    textTransform: 'uppercase',
  },
  titleUnderline: {
    width: '50px',
    height: '4px',
    backgroundColor: '#6b4c1e', // Matches your header brown
    marginTop: '10px'
  },
  nav: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  linkWrapper: {
    textDecoration: 'none',
  },
  nameplateContainer: {
    position: 'relative',
    width: '100%',
    height: '62px', 
    display: 'flex',
    alignItems: 'center',
  },
  nameplateBg: {
    objectFit: 'contain',
    zIndex: 1,
  },
  linkContent: {
    position: 'relative',
    zIndex: 2,
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    paddingRight: '20px',
  },
  iconCircle: {
    width: '46px',
    height: '46px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '8px',
  },
  linkText: {
    flex: 1,
    paddingLeft: '12px',
    fontSize: '14px',
    fontWeight: '800',
    color: '#f5e6c8',
    letterSpacing: '1px',
    textTransform: 'uppercase',
  },
  arrow: {
    fontSize: '18px',
    color: '#c8a96e',
    fontWeight: 'bold',
  }
};