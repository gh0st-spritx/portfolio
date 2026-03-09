import CyberFrame from '@/components/CyberFrame';
import DecryptionText from '@/components/DecryptionText';
import GlitchText from '@/components/GlitchText';
import { Award, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function Certifications() {
  const certs = [
    {
      title: "IELTS Band 7",
      issuer: "British Council",
      link: "/ielts.pdf"
    },
    {
      title: "CompTIA ITF+",
      issuer: "CompTIA",
      link: "https://www.credly.com/badges/68e47d7c-0fbc-4641-99ba-014990668bde/public_url"
    },
    {
      title: "Google AI Professional Certificate",
      issuer: "Google",
      link: "/ai.pdf"
    }
  ];

  return (
    <div className="space-y-12">
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-cyber font-bold text-white mb-4 uppercase flex items-center gap-4">
          <Award className="text-yellow-400 w-10 h-10" />
          <GlitchText>Certifications.dat</GlitchText>
        </h1>
        <div className="h-[1px] w-full bg-gradient-to-r from-yellow-400 to-transparent" />
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certs.map((cert, index) => (
          <Link href={cert.link} key={index} className="block group">
            <CyberFrame label={`CERT_0${index + 1}`} className="h-full border-yellow-400/30 group-hover:border-yellow-400">
              <div className="flex flex-col h-full justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <Award className="text-yellow-400 w-8 h-8" />
                    <ExternalLink className="text-gray-500 w-5 h-5 group-hover:text-yellow-400 transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-cyber mb-2 group-hover:text-yellow-400 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-gray-400 font-mono text-sm">
                    {cert.issuer}
                  </p>
                </div>
                <div className="mt-6">
                  <div className="h-[2px] w-full bg-yellow-900/30 overflow-hidden">
                    <div className="h-full bg-yellow-400 w-0 group-hover:w-full transition-all duration-500" />
                  </div>
                </div>
              </div>
            </CyberFrame>
          </Link>
        ))}
      </div>
    </div>
  );
}
