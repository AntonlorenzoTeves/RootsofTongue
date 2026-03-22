"use client";

import { useState, useEffect, useRef } from 'react';

export default function HideAndSeek() {
    const [mouse, setMouse] = useState({ x: -999, y: -999 });
    const [active, setActive] = useState(false);
    const handleMouseMove = (e) => {
        setMouse({
            x: e.clientX,
            y: e.clientY,
        });
    };
    const RADIUS = 500;
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
                    borderRadius: 4,
                    overflow: "hidden",
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage: "url(https://placecats.com/500/500)",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                />
            </div>
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(0,0,0,1)",
                }}
            />
        </div>

    );
}