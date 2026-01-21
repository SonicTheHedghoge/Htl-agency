import React from 'react';
import { FOUNDER } from '../constants';
import { Quote } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-slate-950 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-900/30 skew-x-12 transform origin-top pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Text Side */}
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-amber-600"></span>
                <span className="text-amber-600 text-xs font-bold uppercase tracking-[0.3em]">The Visionary</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-serif text-white mb-8 leading-[1.1]">
              Crafting Memories <br/>
              <span className="italic text-slate-500 text-4xl md:text-5xl">Since 1992</span>
            </h2>
            
            <div className="space-y-6 text-slate-400 font-light text-lg leading-relaxed">
              <p>
                Founded by <strong className="text-white font-medium">{FOUNDER}</strong>, a Tunisian national educated in Russia, HTL stands as a testament to the power of cultural exchange.
              </p>
              <p>
                What began in 1992 has evolved into a premier full-cycle tour operator. We do not simply book trips; we architect experiences. From the White Nights of St. Petersburg to the Thalasso spas of Hammamet, we ensure every moment is imbued with elegance.
              </p>
            </div>

            <div className="mt-12 relative p-8 border-l border-amber-500/30 bg-white/5 backdrop-blur-sm">
              <Quote className="absolute top-4 left-4 text-amber-500/20 w-12 h-12 transform -translate-x-1/2 -translate-y-1/2" />
              <p className="text-xl font-serif italic text-slate-200 relative z-10">
                "True luxury is not just in the destination, but in the seamless artistry of the journey."
              </p>
              <footer className="mt-4 text-amber-500/80 text-xs uppercase tracking-widest font-semibold">
                — {FOUNDER}, General Director
              </footer>
            </div>
          </div>

          {/* Image Side */}
          <div className="order-1 lg:order-2 relative group">
            <div className="absolute -inset-4 border border-amber-500/20 rounded-none z-0 transition-transform duration-700 group-hover:translate-x-2 group-hover:translate-y-2"></div>
            <div className="absolute -inset-4 border border-white/5 rounded-none z-0 transition-transform duration-700 group-hover:-translate-x-2 group-hover:-translate-y-2"></div>
            
            <div className="relative z-10 aspect-[3/4] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000">
              <img 
                src="https://images.unsplash.com/photo-1552858725-2758b5fb1286?q=80&w=1770&auto=format&fit=crop" 
                alt="Desert Landscape" 
                className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
              
              <div className="absolute bottom-8 left-8 right-8">
                 <div className="text-xs text-amber-500 uppercase tracking-widest mb-2">Philosophy</div>
                 <div className="text-2xl font-serif text-white">Bridging Continents</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;