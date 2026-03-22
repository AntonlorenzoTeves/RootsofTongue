"use client";

import { useState, useEffect, useRef } from 'react';

export default function EmojiSpawner() {
  const [emojis, setEmojis] = useState([]);
  const containerRef = useRef(null); // Ref to measure the container boundaries

  // --- 1. THE SPAWN LOGIC ---
  const handleSpawn = () => {
    // If we can't measure the container, we can't position them correctly
    if (!containerRef.current) return;
    const { width, height } = containerRef.current.getBoundingClientRect();

    const newEmoji = {
      id: Date.now(),
      // Initial Position (Start small, in the center)
      x: width / 2 - 25, 
      y: height / 2 - 25,
      // Initial Velocity (Random speed and direction)
      vx: (Math.random() - 0.5) * 4, // Horizontal speed (-2 to 2)
      vy: (Math.random() - 0.5) * 4, // Vertical speed (-2 to 2)
      // Rotation (For variety)
      rotation: Math.floor(Math.random() * 30) - 15 
    };

    // We still don't use setTimeout, so they stay!
    setEmojis((prev) => [...prev, newEmoji]);
  };

  // --- 2. THE GAME LOOP (Movement logic) ---
  useEffect(() => {
    // Stop the loop if no emojis are active
    if (emojis.length === 0) return;

    // Use requestAnimationFrame for smoother animation, or a high-frequency interval
    const gameLoop = setInterval(() => {
      // If the container isn't ready, skip this frame
      if (!containerRef.current) return;
      const { width, height } = containerRef.current.getBoundingClientRect();
      const emojiSize = 50; // Approximating the font size + some padding

      setEmojis((prevEmojis) => 
        prevEmojis.map((emoji) => {
          // A. Update the Position
          let newX = emoji.x + emoji.vx;
          let newY = emoji.y + emoji.vy;
          let newVx = emoji.vx;
          let newVy = emoji.vy;

          // B. Boundary Checking & Collision (Bounce)
          // Horizontal Boundaries (width)
          if (newX <= 0 || newX >= width - emojiSize) {
            newVx *= -1; // Reverse horizontal direction
            newX = emoji.x; // Optional: Keep it slightly off the wall to prevent sticking
          }

          // Vertical Boundaries (height)
          if (newY <= 0 || newY >= height - emojiSize) {
            newVy *= -1; // Reverse vertical direction
            newY = emoji.y; // Optional: Keep it slightly off the floor to prevent sticking
          }

          // Return the updated emoji object
          return {
            ...emoji,
            x: newX,
            y: newY,
            vx: newVx,
            vy: newVy
          };
        })
      );
    }, 16); // ~60 frames per second (1000ms / 60)

    // CLEANUP: Stop the loop when the component unmounts or modal closes
    return () => clearInterval(gameLoop);
  }, [emojis.length]); // Only restart the loop if the number of emojis changes


  return (
    <div ref={containerRef} style={styles.gameWrapper}>
      {/* 3. The Pop Animation (Still used for initial entry) */}
      <style>
        {`
          @keyframes emoji-spawn-pop {
            0% { transform: scale(0); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
          }
        `}
      </style>

      {/* The Button */}
      <button onClick={handleSpawn} style={styles.button}>
        Add Person 🧑🏽‍🌾
      </button>

      {/* The Area where they move */}
      <div style={styles.spawnArea}>
        {emojis.map((emoji) => (
          <span
            key={emoji.id}
            style={{
              ...styles.emoji,
              // We use explicit pixel positioning now, not percentage
              left: `${emoji.x}px`,
              top: `${emoji.y}px`,
              transform: `rotate(${emoji.rotation}deg)`
            }}
          >
            🧑🏽‍🌾
          </span>
        ))}
      </div>
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
    justifyContent: 'center',
    position: 'relative'
  },
  button: {
    padding: '10px 20px',
    fontSize: '14px',
    fontWeight: 'bold',
    backgroundColor: '#4a3721',
    color: '#f5e6c8',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    zIndex: 10,
    marginBottom: '10px'
  },
  spawnArea: {
    position: 'absolute',
    inset: 0,
    pointerEvents: 'none', // Critical: lets emojis float over/behind the button
  },
  emoji: {
    position: 'absolute',
    fontSize: '40px',
    userSelect: 'none',
    // Only used for the very first frame to "pop" it in
    animation: 'emoji-spawn-pop 0.3s ease-out forwards',
  },
};