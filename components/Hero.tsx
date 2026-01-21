import React from 'react';
import { ArrowDown, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#020617]">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#020617]/40 z-10 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-[#020617]/60 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1519225421980-715cb0202128?q=80&w=2600&auto=format&fit=crop"
          alt="Luxury Desert Camp"
          className="w-full h-full object-cover opacity-90 animate-[kenburns_40s_ease-out_infinite_alternate]"
        />
      </div>

      {/* Vertical Lines Decoration */}
      <div className="absolute inset-0 z-10 pointer-events-none flex justify-between px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto opacity-10">
         <div className="w-px h-full bg-white"></div>
         <div className="hidden md:block w-px h-full bg-white"></div>
         <div className="w-px h-full bg-white"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        <div className="mb-8 flex items-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
             <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
             <span className="text-amber-500 text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase">Since 1992</span>
             <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
        </div>
        
        <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-serif text-white mb-6 tracking-tighter leading-[0.9] drop-shadow-2xl mix-blend-overlay opacity-90 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          HTL Voyages
        </h1>
        
        <h2 className="text-xl md:text-3xl lg:text-4xl font-light text-slate-200 mb-12 font-body italic tracking-wide max-w-3xl leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          Bridging the Imperial Grandeur of <span className="text-amber-500 border-b border-amber-500/30 pb-1">Russia</span> and the Golden Shores of <span className="text-amber-500 border-b border-amber-500/30 pb-1">Tunisia</span>
        </h2>
        
        <div className="flex flex-col md:flex-row gap-6 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <a
            href="#destinations"
            className="group relative px-10 py-5 overflow-hidden bg-white text-[#020617] transition-all duration-300 hover:bg-amber-500 hover:text-white"
          >
            <span className="relative z-10 text-xs font-bold uppercase tracking-[0.25em]">Explore Collection</span>
          </a>
          <a
             href="#contact"
             className="px-10 py-5 border border-white/20 text-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
          >
             <span className="text-xs font-bold uppercase tracking-[0.25em]">Concierge</span>
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-4 animate-pulse duration-[3000ms]">
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/50 hidden md:block">Scroll</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-amber-500 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;