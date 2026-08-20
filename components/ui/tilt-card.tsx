'use client';

import React, { useRef, useState } from 'react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  glareColor?: string;
  tiltMaxAngleX?: number;
  tiltMaxAngleY?: number;
}

export function TiltCard({
  children,
  className = '',
  glareColor = 'rgba(0, 240, 255, 0.15)',
  tiltMaxAngleX = 8,
  tiltMaxAngleY = 8,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transformStyle, setTransformStyle] = useState('');
  const [glareStyle, setGlareStyle] = useState({ opacity: 0, x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -tiltMaxAngleX;
    const rotateY = ((x - centerX) / centerX) * tiltMaxAngleY;
    
    setTransformStyle(`perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.015, 1.015, 1.015)`);
    
    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;
    setGlareStyle({ opacity: 1, x: glareX, y: glareY });
  };

  const handleMouseLeave = () => {
    setTransformStyle('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    setGlareStyle((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden transition-transform duration-200 ease-out ${className}`}
      style={{
        transform: transformStyle,
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Dynamic Glare Reflection */}
      <div
        className="pointer-events-none absolute inset-0 z-20 transition-opacity duration-300 ease-out"
        style={{
          opacity: glareStyle.opacity,
          background: `radial-gradient(circle 280px at ${glareStyle.x}% ${glareStyle.y}%, ${glareColor}, transparent 80%)`,
        }}
      />
      {children}
    </div>
  );
}
