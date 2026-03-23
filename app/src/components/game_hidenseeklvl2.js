"use client";

import { useState, useMemo, useRef, useEffect } from 'react';
import treaty2 from '../images/SVG/treaties_2.jpg';

export default function HideAndSeek({ difficulty = "medium" }) {
    const [mouse, setMouse] = useState({ x: 0, y: 0 });
    const [active, setActive] = useState(false);
    // Dynamic position state for movement
    const [targetPos, setTargetPos] = useState({ top: "50%", left: "50%" });
    const gameContainerRef = useRef(null);

    // Function to generate a new random position
    const moveTarget = () => {
        setTargetPos({
            top: Math.random() * 70 + 10 + "%",
            left: Math.random() * 70 + 10 + "%"
        });
    };

    // Difficulty Logic: Move the target every X seconds
    useEffect(() => {
        const speed = difficulty === "hard" ? 1500 : 3000;
        const interval = setInterval(moveTarget, speed);
        return () => clearInterval(interval);
    }, [difficulty]);

    const handleMouseMove = (e) => {
        if (!gameContainerRef.current) return;
        const rect = gameContainerRef.current.getBoundingClientRect();
        setMouse({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    const RADIUS = difficulty === "hard" ? 100 : 150; // Smaller light for harder difficulty

    return (
        <div style={{ width: '100%', height: '100%' }}>
            <div
                ref={gameContainerRef}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setActive(true)}
                onMouseLeave={() => setActive(false)}
                style={{
                    position: "relative",
                    width: "100%",
                    height: "300px",
                    borderRadius: 8,
                    overflow: "hidden",
                    backgroundColor: "black",
                    cursor: "none"
                }}
            >
                {/* 1. Background Layer */}
                <div style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `url(${treaty2.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}>
                    <p
                        style={{
                            position: "absolute",
                            top: targetPos.top,
                            left: targetPos.left,
                            margin: 0,
                            fontFamily: 'papyrus, serif',
                            fontSize: 20, 
                            fontWeight: 'bold',
                            color: 'white',
                            textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
                            pointerEvents: 'none',
                            // Smoothly transition the position so it "glides"
                            transition: 'top 1.5s ease-in-out, left 1.5s ease-in-out',
                            whiteSpace: 'nowrap'
                        }}
                    >
                        Territories of the Coast Salish Nations of Musqueam, Squamish, Tsleil-Waututh
                    </p>
                </div>

                {/* 2. The Flashlight Mask Layer */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        pointerEvents: "none",
                        background: active
                            ? `radial-gradient(circle ${RADIUS}px at ${mouse.x}px ${mouse.y}px, transparent 0%, rgba(0,0,0,0.99) 100%)`
                            : "rgba(0,0,0,1)",
                        // Adds a slight flicker effect to the flashlight
                        opacity: active ? (0.95 + Math.random() * 0.05) : 1
                    }}
                />
            </div>
        </div>
    );
}