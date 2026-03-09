import CyberFrame from '@/components/CyberFrame';
import DecryptionText from '@/components/DecryptionText';
import GlitchText from '@/components/GlitchText';
import { Terminal } from 'lucide-react';

export default function About() {
  return (
    <div className="space-y-12">
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-cyber font-bold text-white mb-4 uppercase flex items-center gap-4">
          <Terminal className="text-magenta-500 w-10 h-10" />
          <GlitchText>About_Me.exe</GlitchText>
        </h1>
        <div className="h-[1px] w-full bg-gradient-to-r from-cyan-500 to-transparent" />
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <CyberFrame label="PROFILE_SUMMARY">
            <h2 className="text-xl font-mono text-cyan-400 mb-4 border-b border-cyan-900 pb-2">
              <DecryptionText text="> WHOAMI" delay={300} />
            </h2>
            <p className="font-mono text-gray-300 leading-relaxed mb-4">
              <DecryptionText 
                text="AI prompt engineer and certified AI professional specializing in advanced prompt optimization and LLM interaction." 
                delay={500} 
              />
            </p>
            <p className="font-mono text-gray-300 leading-relaxed mb-4">
              <DecryptionText 
                text="Skilled at designing structured prompts, synthesizing data insights, and creating high-quality AI-generated content." 
                delay={800} 
              />
            </p>
            <p className="font-mono text-gray-300 leading-relaxed">
              <DecryptionText 
                text="Proven ability to develop evaluation criteria and meet deadlines in independent research settings." 
                delay={1100} 
              />
            </p>
          </CyberFrame>

          <CyberFrame label="EDUCATION" className="border-magenta-500/30">
            <h2 className="text-xl font-mono text-magenta-500 mb-6 border-b border-magenta-900 pb-2">
              <DecryptionText text="> ACADEMIC_RECORDS" delay={1400} />
            </h2>
            
            <div className="space-y-6">
              <div className="relative pl-6 border-l border-magenta-500/50">
                <div className="absolute w-3 h-3 bg-magenta-500 rounded-full -left-[6.5px] top-1 shadow-[0_0_10px_#ff003c]" />
                <h3 className="text-lg font-bold text-white font-cyber">NORTH SOUTH UNIVERSITY</h3>
                <p className="text-cyan-400 font-mono text-sm mb-2">BSc in CSE | 2025 - Ongoing</p>
              </div>
              
              <div className="relative pl-6 border-l border-magenta-500/50">
                <div className="absolute w-3 h-3 bg-magenta-500 rounded-full -left-[6.5px] top-1 shadow-[0_0_10px_#ff003c]" />
                <h3 className="text-lg font-bold text-white font-cyber">SUNARBAN ADARSHA COLLEGE</h3>
                <p className="text-cyan-400 font-mono text-sm mb-2">HSC in Science | 2022 - 2024</p>
                <p className="text-gray-400 font-mono text-sm">GPA 5.00/5.00</p>
              </div>
            </div>
          </CyberFrame>
        </div>

        <div className="space-y-8">
          <CyberFrame label="SKILLS_MATRIX" className="border-yellow-400/30">
            <h2 className="text-xl font-mono text-yellow-400 mb-6 border-b border-yellow-900 pb-2">
              <DecryptionText text="> CORE_COMPETENCIES" delay={1700} />
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-white font-mono font-bold mb-2">Artificial Intelligence</h3>
                <ul className="list-disc list-inside text-gray-400 font-mono text-sm space-y-1">
                  <li>Advanced Prompt Engineering</li>
                  <li>LLM Interaction</li>
                  <li>AI-Assisted App Building</li>
                  <li>AI Data Analysis</li>
                  <li>Generative Content Strategy</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-white font-mono font-bold mb-2">Programming & Dev</h3>
                <ul className="list-disc list-inside text-gray-400 font-mono text-sm space-y-1">
                  <li>C, Python</li>
                  <li>Rapid Prototyping</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-white font-mono font-bold mb-2">IT Infrastructure & Sec</h3>
                <ul className="list-disc list-inside text-gray-400 font-mono text-sm space-y-1">
                  <li>IT Fundamentals</li>
                  <li>Hardware & Software Troubleshooting</li>
                  <li>Linux (Debian, Kali, Arch, Fedora, Pop!_OS)</li>
                  <li>Network Reconnaissance (Nmap, Metasploit)</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-white font-mono font-bold mb-2">Multimedia & Production</h3>
                <ul className="list-disc list-inside text-gray-400 font-mono text-sm space-y-1">
                  <li>Professional Video Editing</li>
                  <li>DaVinci Resolve Studio</li>
                  <li>Adobe Premiere Pro</li>
                </ul>
              </div>
            </div>
          </CyberFrame>

          <CyberFrame label="LANGUAGES">
            <h2 className="text-xl font-mono text-cyan-400 mb-4 border-b border-cyan-900 pb-2">
              <DecryptionText text="> LINGUISTICS" delay={2000} />
            </h2>
            <ul className="space-y-2 font-mono text-sm">
              <li className="flex justify-between">
                <span className="text-white">Bengali</span>
                <span className="text-cyan-400">Native</span>
              </li>
              <li className="flex justify-between">
                <span className="text-white">English</span>
                <span className="text-cyan-400">Prof. Working</span>
              </li>
            </ul>
          </CyberFrame>
        </div>
      </div>
    </div>
  );
}
