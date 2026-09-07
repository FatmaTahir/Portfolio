import React from 'react';

export const GridBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 bg-[#06040A]">
      {/* High-visibility Grid Layer */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(168, 85, 247, 0.35) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(168, 85, 247, 0.35) 1px, transparent 1px)
          `,
          backgroundSize: '45px 45px',
        }}
      />
    </div>
  );
};