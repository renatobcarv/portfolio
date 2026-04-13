"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  shimmer?: boolean;
  spotlight?: boolean;
}

export const SpotlightCard = ({
  children,
  className = "",
  shimmer = true,
  spotlight = true,
}: SpotlightCardProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setPosition({ x, y });
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative group rounded-3xl overflow-hidden glass ${
        shimmer ? "shimmer-border" : ""
      } ${className}`}
      style={
        {
          "--mouse-x": `${position.x}px`,
          "--mouse-y": `${position.y}px`,
        } as React.CSSProperties
      }
    >
      {/* Spotlight overlay handled by CSS in globals.css (spotlight-target) */}
      {/* But we'll add it here for better control if needed, or stick to the CSS utility */}
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-0"
        style={{
          opacity: spotlight ? opacity : 0,
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(16, 185, 129, 0.04), transparent 40%)`
        }}
      />
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
