'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const bootSequence = [
  "INITIALIZING BIOS...",
  "MEMORY CHECK: 640K OK",
  "LOADING KERNEL...",
  "MOUNTING DRIVES /dev/sda1...",
  "ESTABLISHING SECURE CONNECTION...",
  "BYPASSING FIREWALL...",
  "DECRYPTING USER DATA...",
  "SYSTEM NOMINAL.",
  "WELCOME, SOUMIK HALDER."
];

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [lines, setLines] = useState<string[]>([]);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < bootSequence.length) {
        setLines(prev => [...prev, bootSequence[currentLine]]);
        currentLine++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setIsComplete(true);
          setTimeout(onComplete, 500);
        }, 1000);
      }
    }, 200);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex flex-col items-start justify-end p-8 bg-black font-mono text-green-500 text-sm md:text-base pointer-events-none"
        >
          <div className="absolute inset-0 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,255,0,0.1)]"></div>
          <div className="flex flex-col gap-1 w-full max-w-3xl">
            {lines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-2"
              >
                <span className="text-green-700">{`>`}</span>
                <span>{line}</span>
              </motion.div>
            ))}
            <motion.div
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="w-3 h-5 bg-green-500 mt-1"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
