import CyberFrame from '@/components/CyberFrame';
import DecryptionText from '@/components/DecryptionText';
import GlitchText from '@/components/GlitchText';
import { Mail, Phone, MapPin, Globe, Linkedin, Facebook, Github } from 'lucide-react';
import Link from 'next/link';

export default function Contact() {
  return (
    <div className="space-y-12">
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-cyber font-bold text-white mb-4 uppercase flex items-center gap-4">
          <Globe className="text-cyan-400 w-10 h-10" />
          <GlitchText>Comm_Link.sys</GlitchText>
        </h1>
        <div className="h-[1px] w-full bg-gradient-to-r from-cyan-500 to-transparent" />
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <CyberFrame label="CONTACT_INFO" className="border-cyan-500/30">
          <h2 className="text-2xl font-mono text-cyan-400 mb-8 border-b border-cyan-900 pb-2">
            <DecryptionText text="> DIRECT_CHANNELS" delay={300} />
          </h2>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
              <div className="p-3 bg-cyan-900/20 border border-cyan-500/30 group-hover:border-cyan-400 transition-colors">
                <Phone className="text-cyan-400 w-6 h-6" />
              </div>
              <div>
                <p className="text-gray-500 font-mono text-xs mb-1">VOICE_COMMS</p>
                <p className="text-white font-mono">+88 01553425102</p>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="p-3 bg-cyan-900/20 border border-cyan-500/30 group-hover:border-cyan-400 transition-colors">
                <Mail className="text-cyan-400 w-6 h-6" />
              </div>
              <div>
                <p className="text-gray-500 font-mono text-xs mb-1">SECURE_MAIL</p>
                <a href="mailto:soumikhalder.edu@gmail.com" className="text-white font-mono hover:text-cyan-400 transition-colors">
                  soumikhalder.edu@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="p-3 bg-cyan-900/20 border border-cyan-500/30 group-hover:border-cyan-400 transition-colors">
                <MapPin className="text-cyan-400 w-6 h-6" />
              </div>
              <div>
                <p className="text-gray-500 font-mono text-xs mb-1">PHYSICAL_LOCATION</p>
                <p className="text-white font-mono">Bashundhara Residential Area</p>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="p-3 bg-cyan-900/20 border border-cyan-500/30 group-hover:border-cyan-400 transition-colors">
                <Globe className="text-cyan-400 w-6 h-6" />
              </div>
              <div>
                <p className="text-gray-500 font-mono text-xs mb-1">NEURAL_NET_NODE</p>
                <a href="http://soumik.me" target="_blank" rel="noopener noreferrer" className="text-white font-mono hover:text-cyan-400 transition-colors">
                  http://soumik.me
                </a>
              </div>
            </div>
          </div>
        </CyberFrame>

        <CyberFrame label="SOCIAL_LINKS" className="border-magenta-500/30">
          <h2 className="text-2xl font-mono text-magenta-500 mb-8 border-b border-magenta-900 pb-2">
            <DecryptionText text="> EXTERNAL_NETWORKS" delay={600} />
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="https://www.linkedin.com/in/soumik-halder-spritx/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 p-4 border border-magenta-500/30 bg-magenta-900/10 hover:bg-magenta-900/30 hover:border-magenta-500 transition-all">
              <Linkedin className="text-magenta-500 w-6 h-6" />
              <span className="font-mono text-white group-hover:text-magenta-400">LinkedIn</span>
            </Link>
            
            <Link href="https://www.facebook.com/soumikhalderop/" className="group flex items-center gap-3 p-4 border border-magenta-500/30 bg-magenta-900/10 hover:bg-magenta-900/30 hover:border-magenta-500 transition-all">
              <Facebook className="text-magenta-500 w-6 h-6" />
              <span className="font-mono text-white group-hover:text-magenta-400">Facebook</span>
            </Link>
            
            <Link href="https://github.com/gh0st-spritx/" className="group flex items-center gap-3 p-4 border border-magenta-500/30 bg-magenta-900/10 hover:bg-magenta-900/30 hover:border-magenta-500 transition-all">
              <Github className="text-magenta-500 w-6 h-6" />
              <span className="font-mono text-white group-hover:text-magenta-400">GitHub</span>
            </Link>
          </div>
        </CyberFrame>
      </div>
    </div>
  );
}
