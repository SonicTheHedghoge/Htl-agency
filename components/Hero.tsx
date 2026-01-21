import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/20 to-slate-950 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1548567117-02328f050eaa?q=80&w=2070&auto=format&fit=crop"
          alt="Luxury Desert"
          className="w-full h-full object-cover opacity-80 animate-[kenburns_20s_ease-out_infinite_alternate] scale-105"
          style={{ animationDuration: '30s' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-6 flex items-center justify-center gap-4">
            <div className="h-[1px] w-12 bg-amber-500/60"></div>
            <p className="text-amber-500 text-xs font-semibold tracking-[0.4em] uppercase">
                Est. 1992
            </p>
            <div className="h-[1px] w-12 bg-amber-500/60"></div>
        </div>
        
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-white mb-8 tracking-tight leading-none drop-shadow-2xl">
          <span className="block font-medium italic opacity-90">Beyond</span>
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-amber-100 via-amber-200 to-amber-500">
            Boundaries
          </span>
        </h1>
        
        <p className="max-w-xl mx-auto text-lg md:text-xl text-slate-300 font-light leading-relaxed mb-12">
          The premiere bridge between the imperial grandeur of <span className="text-white border-b border-amber-500/50">Russia</span> and the golden shores of <span className="text-white border-b border-amber-500/50">Tunisia</span>.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <a
            href="#destinations"
            className="group relative px-8 py-4 overflow-hidden rounded-none bg-transparent text-white transition-all duration-300 border border-white/20 hover:border-amber-500/50"
          >
            <div className="absolute inset-0 w-0 bg-amber-600 transition-all duration-[250ms] ease-out group-hover:w-full opacity-20"></div>
            <span className="relative text-xs uppercase tracking-[0.2em] group-hover:text-amber-200">Discover</span>
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 animate-bounce duration-[2000ms]">
        <a href="#about" className="text-slate-400 hover:text-white transition-colors">
            <ArrowDown strokeWidth={1} className="w-8 h-8 opacity-50" />
        </a>
      </div>
    </section>
  );
};

export default Hero;