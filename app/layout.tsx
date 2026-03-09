import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, Space_Grotesk } from 'next/font/google';
import './globals.css';
import CustomCursor from '@/components/CustomCursor';
import InteractiveBackground from '@/components/InteractiveBackground';
import Navigation from '@/components/Navigation';
import ClientLayout from '@/components/ClientLayout';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-cyber' });

export const metadata: Metadata = {
  title: 'Soumik Halder | AI Prompt Engineer',
  description: 'Portfolio of Soumik Halder, AI Prompt Engineer and Developer.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased bg-black text-gray-200 min-h-screen flex flex-col selection:bg-magenta-500 selection:text-white" suppressHydrationWarning>
        <CustomCursor />
        <InteractiveBackground />
        <div className="fixed inset-0 z-50 pointer-events-none crt-overlay"></div>
        <ClientLayout>
          <Navigation />
          <main className="flex-grow pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative z-10">
            {children}
          </main>
        </ClientLayout>
      </body>
    </html>
  );
}
