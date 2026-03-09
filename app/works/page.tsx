import CyberFrame from '@/components/CyberFrame';
import DecryptionText from '@/components/DecryptionText';
import GlitchText from '@/components/GlitchText';
import { Briefcase, Code } from 'lucide-react';

export default function Works() {
  return (
    <div className="space-y-12">
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-cyber font-bold text-white mb-4 uppercase flex items-center gap-4">
          <Briefcase className="text-cyan-400 w-10 h-10" />
          <GlitchText>Experience_&_Projects</GlitchText>
        </h1>
        <div className="h-[1px] w-full bg-gradient-to-r from-cyan-500 to-transparent" />
      </header>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-mono text-magenta-500 mb-6 flex items-center gap-2">
            <span className="text-white">&gt;</span> WORK_EXPERIENCE
          </h2>
          
          <CyberFrame label="EMPLOYMENT_HISTORY" className="border-magenta-500/30">
            <div className="relative pl-6 border-l-2 border-magenta-500/50 pb-8">
              <div className="absolute w-4 h-4 bg-magenta-500 rounded-sm -left-[9px] top-0 shadow-[0_0_10px_#ff003c]" />
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white font-cyber">Freelance AI Prompt Engineer & Developer</h3>
                  <p className="text-cyan-400 font-mono text-sm">Self-employed</p>
                </div>
                <div className="mt-2 md:mt-0 px-3 py-1 bg-magenta-900/30 border border-magenta-500 text-magenta-400 font-mono text-xs">
                  2025 - 2026
                </div>
              </div>
              
              <ul className="list-disc list-outside ml-4 space-y-3 text-gray-300 font-mono text-sm leading-relaxed">
                <li>
                  <strong className="text-white">Engineered and refined complex, multi-constraint prompts</strong> for Large Language Models (LLMs), significantly improving response accuracy and output quality for diverse client use cases using advanced prompt optimisation techniques.
                </li>
                <li>
                  <strong className="text-white">Accelerated software prototyping and deployment</strong> by integrating AI-assisted development workflows, utilising languages like Python and C to rapidly build, test, and troubleshoot robust applications.
                </li>
                <li>
                  <strong className="text-white">Synthesised complex datasets</strong> and extracted actionable insights using AI-driven data analysis tools, directly supporting and informing client business strategies.
                </li>
                <li>
                  <strong className="text-white">Spearheaded the creation of high-impact multimedia marketing materials</strong>, combining generative AI tools with professional editing software like DaVinci Resolve Studio and Adobe Premiere Pro to deliver polished, engaging content for client marketing campaigns.
                </li>
              </ul>
            </div>
          </CyberFrame>
        </section>

        <section>
          <h2 className="text-2xl font-mono text-cyan-400 mb-6 flex items-center gap-2">
            <span className="text-white">&gt;</span> PROJECTS
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CyberFrame label="PROJECT_01">
              <div className="flex items-center gap-3 mb-4">
                <Code className="text-cyan-400 w-6 h-6" />
                <h3 className="text-lg font-bold text-white font-cyber">Market Alert Bot</h3>
              </div>
              <div className="mb-4 inline-block px-2 py-1 bg-cyan-900/30 border border-cyan-500/50 text-cyan-400 font-mono text-xs">
                Python
              </div>
              <p className="text-gray-400 font-mono text-sm">
                AI-prototyped real-time price tracker.
              </p>
            </CyberFrame>

            <CyberFrame label="PROJECT_02">
              <div className="flex items-center gap-3 mb-4">
                <Code className="text-cyan-400 w-6 h-6" />
                <h3 className="text-lg font-bold text-white font-cyber">Data Scraper Utility</h3>
              </div>
              <div className="mb-4 inline-block px-2 py-1 bg-cyan-900/30 border border-cyan-500/50 text-cyan-400 font-mono text-xs">
                Python
              </div>
              <p className="text-gray-400 font-mono text-sm">
                AI-prototyped tool for automated Telegram data extraction.
              </p>
            </CyberFrame>

            <CyberFrame label="PROJECT_03">
              <div className="flex items-center gap-3 mb-4">
                <Code className="text-cyan-400 w-6 h-6" />
                <h3 className="text-lg font-bold text-white font-cyber">Tic-Tac-Toe Game</h3>
              </div>
              <div className="mb-4 inline-block px-2 py-1 bg-cyan-900/30 border border-cyan-500/50 text-cyan-400 font-mono text-xs">
                C
              </div>
              <p className="text-gray-400 font-mono text-sm">
                Classic game implementation in C.
              </p>
            </CyberFrame>
          </div>
        </section>
      </div>
    </div>
  );
}
