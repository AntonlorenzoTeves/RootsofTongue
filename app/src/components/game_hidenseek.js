"use client";

import { useState, useMemo, useRef } from 'react';
import House from '../images/SVG/traditionalHouse.jpg';

export default function HideAndSeek() {
    const [mouse, setMouse] = useState({ x: 0, y: 0 });
    const [active, setActive] = useState(false);
    const gameContainerRef = useRef(null); // Reference to the game box

    const handleMouseMove = (e) => {
        if (!gameContainerRef.current) return;

        // Get the position of the game box relative to the viewport
        const rect = gameContainerRef.current.getBoundingClientRect();

        setMouse({
            // Subtract the box's position from the global mouse position
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    const RADIUS = 150;

    const position = useMemo(() => {
        return {
            top: Math.random() * 70 + 10 + "%",
            left: Math.random() * 70 + 10 + "%"
        };
    }, []);

    return (
        <div style={{ width: '100%', height: '100%' }}>
            <div
                ref={gameContainerRef} // Attach the ref here
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setActive(true)}
                onMouseLeave={() => setActive(false)}
                style={{
                    position: "relative",
                    width: "100%",
                    height: "300px", // Match your galleryPlaceholder height
                    borderRadius: 8,
                    overflow: "hidden",
                    backgroundColor: "black",
                    cursor: "none" // Hide the default cursor for better immersion
                }}
            >
                {/* 1. The Background Layer (Hidden Content) */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage: `url(${House.src})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <p
                        style={{
                            position: "absolute",
                            top: position.top,
                            left: position.left,
                            margin: 0,
                            fontFamily: 'papyrus, serif',
                            fontSize: 24, 
                            fontWeight: 'bold',
                            color: 'white',
                            textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
                            pointerEvents: 'none' // Ensures text doesn't block mouse movement
                        }}
                    >
                        Dakelh (Carrier): 1500+ speakers
                    </p>
                </div>

                {/* 2. The Flashlight Mask Layer */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        pointerEvents: "none", // Allows mouse events to reach the container below
                        background: active
                            ? `radial-gradient(circle ${RADIUS}px at ${mouse.x}px ${mouse.y}px, transparent 0%, rgba(0,0,0,0.98) 100%)`
                            : "rgba(0,0,0,1)",
                    }}
                />
            </div>
        </div>
    );
}