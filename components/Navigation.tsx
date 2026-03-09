'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import GlitchText from './GlitchText';
import { motion } from 'motion/react';

const navItems = [
  { name: 'HOME', path: '/' },
  { name: 'ABOUT', path: '/about' },
  { name: 'WORKS', path: '/works' },
  { name: 'CERTIFICATIONS', path: '/certifications' },
  { name: 'CONTACT', path: '/contact' },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 w-full z-40 bg-black/80 backdrop-blur-md border-b border-cyan-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="font-mono text-xl font-bold text-white tracking-tighter flex items-center gap-2">
              <span className="text-magenta-500">&lt;</span>
              <GlitchText>SOUMIK.H</GlitchText>
              <span className="text-cyan-400">/&gt;</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    href={item.path}
                    className={`relative px-3 py-2 text-sm font-mono tracking-widest transition-colors ${
                      isActive ? 'text-cyan-400' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <GlitchText>{item.name}</GlitchText>
                    {isActive && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-cyan-400 shadow-[0_0_8px_#00f0ff]"
                      />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* Mobile nav */}
      <div className="md:hidden flex overflow-x-auto px-4 py-2 border-t border-cyan-500/10 gap-4 no-scrollbar">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.name}
              href={item.path}
              className={`whitespace-nowrap px-3 py-1 text-xs font-mono tracking-widest transition-colors border ${
                isActive ? 'text-cyan-400 border-cyan-400 bg-cyan-900/20' : 'text-gray-400 border-transparent hover:text-white'
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
