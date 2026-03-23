"use client";

import { useState, useEffect, useRef } from 'react';
// Import your background image here
import IndigenousImg from '../images/SVG/Indigenous_people.jpg';
import BCmap from '../images/SVG/mapofBC.jpg'

export default function EmojiSpawner() {
  const [emojis, setEmojis] = useState([]);
  const containerRef = useRef(null);

  const handleSpawn = () => {
    if (!containerRef.current) return;
    const { width, height } = containerRef.current.getBoundingClientRect();

    const newEmoji = {
      id: Date.now(),
      x: width / 2 - 25, 
      y: height / 2 - 25,
      vx: (Math.random() - 0.5) * 6, // Slightly faster for more "life"
      vy: (Math.random() - 0.5) * 6,
      rotation: Math.floor(Math.random() * 30) - 15 
    };

    setEmojis((prev) => [...prev, newEmoji]);
  };

  useEffect(() => {
    if (emojis.length === 0) return;

    const gameLoop = setInterval(() => {
      if (!containerRef.current) return;
      const { width, height } = containerRef.current.getBoundingClientRect();
      const emojiSize = 50; 

      setEmojis((prevEmojis) => 
        prevEmojis.map((emoji) => {
          let newX = emoji.x + emoji.vx;
          let newY = emoji.y + emoji.vy;
          let newVx = emoji.vx;
          let newVy = emoji.vy;

          if (newX <= 0 || newX >= width - emojiSize) {
            newVx *= -1;
            newX = emoji.x; 
          }

          if (newY <= 0 || newY >= height - emojiSize) {
            newVy *= -1;
            newY = emoji.y; 
          }

          return { ...emoji, x: newX, y: newY, vx: newVx, vy: newVy };
        })
      );
    }, 16); 

    return () => clearInterval(gameLoop);
  }, [emojis.length]);

  return (
    <div ref={containerRef} style={styles.gameWrapper}>
      <style>
        {`
          @keyframes emoji-spawn-pop {
            0% { transform: scale(0); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
          }
        `}
      </style>

      {/* The background is applied to the spawnArea */}
      <div style={{
          ...styles.spawnArea, 
          backgroundImage: `url(${BCmap.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.7)' // Dims background so emojis pop more
      }}>
        {emojis.map((emoji) => (
          <span
            key={emoji.id}
            style={{
              ...styles.emoji,
              left: `${emoji.x}px`,
              top: `${emoji.y}px`,
              transform: `rotate(${emoji.rotation}deg)`
            }}
          >
            🧑🏽‍🌾
          </span>
        ))}
      </div>

      <button onClick={handleSpawn} style={styles.button}>
        Add Person 🧑🏽‍🌾
      </button>
    </div>
  );
}

const styles = {
  gameWrapper: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end', // Moves button to the bottom
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '8px',
    border: '4px solid #4a3721'
  },
  button: {
    padding: '12px 24px',
    fontSize: '16px',
    fontWeight: 'bold',
    backgroundColor: '#d4b483',
    color: '#4a3721',
    border: '2px solid #4a3721',
    borderRadius: '8px',
    cursor: 'pointer',
    zIndex: 10,
    marginBottom: '20px',
    boxShadow: '0 4px 0 #4a3721'
  },
  spawnArea: {
    position: 'absolute',
    inset: 0,
    pointerEvents: 'none',
  },
  emoji: {
    position: 'absolute',
    fontSize: '45px',
    userSelect: 'none',
    animation: 'emoji-spawn-pop 0.3s ease-out forwards',
    textShadow: '2px 2px 4px rgba(0,0,0,0.5)' // Makes emoji visible against busy backgrounds
  },
};