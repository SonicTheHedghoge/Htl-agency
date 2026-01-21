import React from 'react';
import { DESTINATIONS } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const Destinations: React.FC = () => {
  return (
    <section id="destinations" className="py-32 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-slate-300 pb-8">
          <div>
            <span className="text-amber-600 text-xs font-bold uppercase tracking-[0.3em] block mb-2">Curated Locations</span>
            <h2 className="text-4xl md:text-6xl font-serif text-slate-900 leading-none">
              The Collection
            </h2>
          </div>
          <div className="mt-8 md:mt-0">
             <a href="#" className="group flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-slate-900 font-semibold">
                View All Destinations
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
             </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {DESTINATIONS.map((dest, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden aspect-[16/10] mb-6 bg-slate-200">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img
                  src={`https://picsum.photos/seed/${dest.imageSeed}/1200/800`}
                  alt={dest.name}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                />
                
                {/* Floating Badge */}
                <div className="absolute top-6 right-6 z-20 bg-white/10 backdrop-blur-md px-4 py-1 border border-white/20">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white">
                    {dest.country}
                  </span>
                </div>
              </div>
              
              <div className="flex justify-between items-start">
                <div>
                    <h3 className="text-3xl font-serif text-slate-900 mb-2 group-hover:text-amber-600 transition-colors duration-300">
                      {dest.name}
                    </h3>
                    <p className="text-slate-500 font-light text-sm max-w-sm leading-relaxed">
                      {dest.description}
                    </p>
                </div>
                <div className="hidden lg:block opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <div className="flex gap-2">
                        {dest.tags.slice(0, 2).map(tag => (
                            <span key={tag} className="text-[10px] uppercase tracking-wider text-slate-400 border border-slate-300 px-2 py-1">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;