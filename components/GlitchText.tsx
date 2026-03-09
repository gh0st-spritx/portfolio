'use client';

import { ReactNode } from 'react';

export default function GlitchText({ children, className = '', as: Component = 'span' }: { children: ReactNode, className?: string, as?: any }) {
  return (
    <Component className={`relative inline-block group ${className}`}>
      <span className="relative z-10">{children}</span>
      <span className="absolute top-0 left-0 -ml-[2px] text-cyan-400 opacity-0 group-hover:opacity-100 group-hover:animate-glitch-1 z-0 mix-blend-screen" aria-hidden="true">
        {children}
      </span>
      <span className="absolute top-0 left-0 ml-[2px] text-magenta-500 opacity-0 group-hover:opacity-100 group-hover:animate-glitch-2 z-0 mix-blend-screen" aria-hidden="true">
        {children}
      </span>
    </Component>
  );
}
