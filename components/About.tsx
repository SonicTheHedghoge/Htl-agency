import React from 'react';
import { FOUNDER } from '../constants';
import { Quote } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-40 bg-[#050b1d] relative overflow-hidden">
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-12 bg-amber-600"></div>
                <span className="text-amber-500 text-xs font-bold uppercase tracking-[0.4em]">The Visionary</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-serif text-white mb-10 leading-[1] tracking-tight">
              A Legacy of <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-600 italic pr-2">Excellence</span>
            </h2>
            
            <div className="space-y-8 text-slate-400 font-body text-xl leading-relaxed">
              <p>
                Established in 1992 by <strong className="text-white font-medium border-b border-amber-500/40">{FOUNDER}</strong>, HTL Voyages transcends the traditional definition of a travel agency. We are the architects of cultural diplomacy between Russia and Tunisia.
              </p>
              <p>
                From the private reception halls of St. Petersburg to the sun-drenched thalasso retreats of Hammamet, our bespoke itineraries are curated for those who demand the exceptional.
              </p>
            </div>

            <div className="mt-16 relative">
              <div className="absolute -top-6 -left-6 text-amber-500/10">
                <Quote size={80} />
              </div>
              <blockquote className="relative z-10 pl-8 border-l-2 border-amber-500/50 italic text-2xl font-serif text-slate-300">
                "We do not sell tickets. We grant access to worlds otherwise unreachable."
              </blockquote>
              <footer className="mt-6 pl-8 text-amber-500 text-xs uppercase tracking-[0.2em] font-bold">
                — {FOUNDER}, Founder & CEO
              </footer>
            </div>
          </div>

          {/* Image Composition */}
          <div className="lg:col-span-6 order-1 lg:order-2 relative">
            <div className="relative aspect-[3/4] group">
                <div className="absolute inset-0 bg-amber-500/20 transform translate-x-4 translate-y-4 transition-transform duration-700 group-hover:translate-x-6 group-hover:translate-y-6"></div>
                <img 
                    src="https://images.unsplash.com/photo-1534234828563-025c27636e05?q=80&w=1587&auto=format&fit=crop" 
                    alt="Lotfi Kebayer Vision" 
                    className="relative w-full h-full object-cover filter sepia-[0.2] contrast-110 grayscale transition-all duration-700 group-hover:grayscale-0 shadow-2xl"
                />
                
                {/* Overlay details */}
                <div className="absolute bottom-0 left-0 bg-[#020617] p-8 max-w-xs border-t border-r border-amber-500/30">
                    <p className="text-amber-500 text-[10px] uppercase tracking-[0.3em] mb-2">Since 1992</p>
                    <p className="text-white font-serif text-2xl">St. Petersburg • Sousse</p>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;