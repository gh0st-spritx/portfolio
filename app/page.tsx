import CyberFrame from '@/components/CyberFrame';
import DecryptionText from '@/components/DecryptionText';
import GlitchText from '@/components/GlitchText';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-12rem)] flex flex-col justify-center items-start">
      <div className="max-w-3xl">
        <div className="mb-4 inline-block px-3 py-1 border border-cyan-500/50 bg-cyan-900/20 text-cyan-400 font-mono text-xs tracking-widest uppercase">
          <DecryptionText text="STATUS: ONLINE // SECURE CONNECTION" delay={500} />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-cyber font-bold text-white mb-6 leading-tight uppercase">
          <GlitchText as="div">Soumik Halder</GlitchText>
        </h1>
        
        <h2 className="text-2xl md:text-4xl font-mono text-cyan-400 mb-8">
          <DecryptionText text="> AI PROMPT ENGINEER" delay={1000} />
        </h2>
        
        <CyberFrame className="mb-10 max-w-2xl" label="OVERVIEW">
          <p className="font-mono text-gray-300 leading-relaxed">
            <DecryptionText 
              text="Specializing in advanced prompt optimization and LLM interaction. Skilled at designing structured prompts, synthesizing data insights, and creating high-quality AI-generated content." 
              delay={1500} 
            />
          </p>
        </CyberFrame>

        <div className="flex flex-wrap gap-6">
          <Link href="/works" className="group relative inline-flex items-center justify-center px-8 py-3 font-mono font-bold text-black bg-cyan-400 overflow-hidden transition-all hover:bg-white">
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-magenta-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
            <span className="relative flex items-center gap-2">
              <DecryptionText text="VIEW WORKS" delay={2000} />
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
          
          <Link href="/contact" className="group relative inline-flex items-center justify-center px-8 py-3 font-mono font-bold text-cyan-400 border border-cyan-400 overflow-hidden transition-all hover:text-black hover:bg-cyan-400">
            <span className="relative flex items-center gap-2">
              <DecryptionText text="INITIATE CONTACT" delay={2200} />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
