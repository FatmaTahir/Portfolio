import React, { useEffect, useState } from 'react';

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-50 rounded-full transition-transform duration-75 ease-out hidden md:block"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: '140px',
        height: '140px',
        transform: 'translate(-50%, -50%)',
        background: 'radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, rgba(139, 92, 246, 0.18) 40%, rgba(0,0,0,0) 70%)',
      }}
    />
  );
};