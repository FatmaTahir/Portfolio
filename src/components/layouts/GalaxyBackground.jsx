import React, { useEffect, useRef } from 'react';

export const GalaxyBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animationFrameId;
    let stars = [];

    // Scale star count based on screen area to keep density identical on mobile vs desktop
    const getStarCount = () => {
      const area = window.innerWidth * window.innerHeight;
      return Math.max(8, Math.floor(area / 45000)); // Maintains sparse look on mobile
    };

    const resizeCanvas = () => {
      // Handles crisp rendering on high-DPI mobile screens
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;

      ctx.scale(dpr, dpr);
    };

    const initStars = () => {
      stars = [];
      const count = getStarCount();

      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          radius: Math.random() * 1.2 + 0.6, // Minimal dot size kept exact
          color: '#ffffff', // Pure white kept exact
          opacity: Math.random() * 0.7 + 0.3,
          speed: Math.random() * 0.3 + 0.1, // Upward floating speed kept exact
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.globalAlpha = star.opacity;
        ctx.fill();

        star.y -= star.speed;

        if (star.y < 0) {
          star.y = window.innerHeight;
          star.x = Math.random() * window.innerWidth;
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    initStars();
    animate();

    const handleResize = () => {
      resizeCanvas();
      initStars();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#0a0a0c]">
      {/* Responsive Glow: Retains exact red-900/10 color, blur, and opacity */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] max-w-[600px] h-[80vw] max-h-[600px] bg-red-900/10 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none" />

      {/* Canvas */}
    <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
};