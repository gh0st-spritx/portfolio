'use client';

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateHoverState = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovering(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button'
      );
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', updateHoverState);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', updateHoverState);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[100] mix-blend-difference hidden md:block"
      animate={{
        x: position.x - 16,
        y: position.y - 16,
        scale: isHovering ? 1.5 : 1,
      }}
      transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
    >
      <div className="relative w-full h-full">
        {/* Crosshair lines */}
        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-cyan-400 -translate-y-1/2 shadow-[0_0_8px_#00f0ff]" />
        <div className="absolute left-1/2 top-0 w-[2px] h-full bg-cyan-400 -translate-x-1/2 shadow-[0_0_8px_#00f0ff]" />
        {/* Center dot */}
        <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-magenta-500 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-[0_0_8px_#ff003c]" />
        {/* Targeting corners if hovering */}
        {isHovering && (
          <>
            <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-magenta-500" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-magenta-500" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-magenta-500" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-magenta-500" />
          </>
        )}
      </div>
    </motion.div>
  );
}
