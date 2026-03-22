"use client";

import { useState, useEffect, useRef } from 'react';
import House from '../images/SVG/traditionalHouse.jpg';
import { useMemo } from "react";

export default function HideAndSeek() {
    const [mouse, setMouse] = useState({ x: -999, y: -999 });
    const [active, setActive] = useState(false);
    const handleMouseMove = (e) => {
        setMouse({
            x: e.clientX,
            y: e.clientY,
        });
    };
    const RADIUS = 200;
    const position = useMemo(() => {
    return {
      top: Math.random() * 90 + "%",
      left: Math.random() * 90 + "%"
    };
  }, []);
    return (
        <div>
            <div
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setActive(true)}
                onMouseLeave={() => setActive(false)}
                style={{
                    position: "relative",
                    width: "100%",
                    aspectRatio: "16/9",
                    // cursor: "none",
                    borderRadius: 4,
                    overflow: "hidden",
                }}
            >
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
                            fontFamily: 'papyrus',
                            fontSize: 30, 
                            fontWeight: 'bold',
                        }}
                    >
                        Dakelh (Carrier): 1500+ speakers
                    </p>
                </div>
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background: active
                            ? `radial-gradient(circle ${RADIUS}px at ${mouse.x}px ${mouse.y}px, transparent 0%, transparent 60%, rgba(0,0,0,1) 100%)`
                            : "rgba(0,0,0,1)",
                    }}
                />
            </div>

        </div>

    );
}