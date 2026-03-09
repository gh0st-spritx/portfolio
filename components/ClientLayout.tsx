'use client';

import { useState, useEffect } from 'react';
import Preloader from './Preloader';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if we've already shown the preloader in this session
    const hasLoaded = sessionStorage.getItem('preloaderShown');
    if (hasLoaded) {
      setTimeout(() => setLoading(false), 0);
    }
  }, []);

  const handleComplete = () => {
    setLoading(false);
    sessionStorage.setItem('preloaderShown', 'true');
  };

  return (
    <>
      {loading && <Preloader onComplete={handleComplete} />}
      <div className={`transition-opacity duration-1000 ${loading ? 'opacity-0 h-screen overflow-hidden' : 'opacity-100'}`}>
        {children}
      </div>
    </>
  );
}
