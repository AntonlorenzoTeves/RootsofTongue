"use client";

import { useState, useEffect, useRef } from 'react';

export default function HideAndSeek() {
    return (
        <div>
            <div
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
                        background: "rgba(0,0,0,1)",
                    }}
                />

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
        </div>

    );
}