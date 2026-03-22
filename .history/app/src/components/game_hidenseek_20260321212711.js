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
            </div>
        </div>
    );
}