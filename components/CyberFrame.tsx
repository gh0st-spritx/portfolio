'use client';

import { ReactNode } from 'react';
import { motion } from 'motion/react';

export default function CyberFrame({ children, className = '', label = 'SYSTEM_NOMINAL' }: { children: ReactNode, className?: string, label?: string }) {
  return (
    <motion.div 
      className={`relative p-1 bg-black/40 border border-cyan-500/30 group ${className}`}
      whileHover={{ borderColor: 'rgba(0, 240, 255, 0.8)' }}
    >
      {/* Corner brackets */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400 transition-all duration-300 group-hover:w-6 group-hover:h-6 group-hover:border-magenta-500" />
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-400 transition-all duration-300 group-hover:w-6 group-hover:h-6 group-hover:border-magenta-500" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-400 transition-all duration-300 group-hover:w-6 group-hover:h-6 group-hover:border-magenta-500" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-400 transition-all duration-300 group-hover:w-6 group-hover:h-6 group-hover:border-magenta-500" />
      
      {/* Micro-text label */}
      <div className="absolute -top-3 right-2 bg-black px-1 text-[10px] font-mono text-cyan-500 tracking-widest group-hover:text-magenta-500 transition-colors">
        {label}
      </div>

      {/* Decorative data bar */}
      <div className="absolute -bottom-1 left-4 right-4 h-[2px] bg-cyan-900/50 overflow-hidden">
        <motion.div 
          className="h-full bg-cyan-400"
          initial={{ width: '0%' }}
          whileInView={{ width: '100%' }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full h-full bg-black/60 backdrop-blur-sm p-4">
        {children}
      </div>
    </motion.div>
  );
}
