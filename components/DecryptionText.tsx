'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}|:"<>?~`-=[]\\;\',./';

export default function DecryptionText({ text, className, delay = 0 }: { text: string, className?: string, delay?: number }) {
  const [displayText, setDisplayText] = useState('');
  const [isDecrypted, setIsDecrypted] = useState(false);

  useEffect(() => {
    let iteration = 0;
    let interval: NodeJS.Timeout;

    const startDecryption = () => {
      interval = setInterval(() => {
        setDisplayText(text.split('').map((char, index) => {
          if (index < iteration) {
            return text[index];
          }
          if (char === ' ') return ' ';
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        }).join(''));

        if (iteration >= text.length) {
          clearInterval(interval);
          setIsDecrypted(true);
        }

        iteration += 1 / 3; // Adjust speed here
      }, 30);
    };

    const timeout = setTimeout(startDecryption, delay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, delay]);

  return (
    <motion.span 
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1, delay: delay / 1000 }}
    >
      {displayText}
    </motion.span>
  );
}
