import React from 'react';
import { SERVICES } from '../constants';
import { Plane, Landmark, FileText, Anchor } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  'plane-departure': <Plane strokeWidth={1} className="w-10 h-10" />,
  'landmark': <Landmark strokeWidth={1} className="w-10 h-10" />,
  'passport': <FileText strokeWidth={1} className="w-10 h-10" />,
  'spa': <Anchor strokeWidth={1} className="w-10 h-10" />,
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <span className="text-amber-500 text-xs font-bold uppercase tracking-[0.3em]">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl font-serif text-white mt-4 mb-6">Comprehensive Excellence</h2>
          <p className="text-slate-400 max-w-2xl mx-auto font-light">
            Full-cycle tour operator services tailored for the discerning traveler.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <div 
              key={index} 
              className="group relative p-10 bg-white/5 border border-white/5 hover:border-amber-500/30 hover:bg-white/10 transition-all duration-500 flex flex-col items-center text-center"
            >
              <div className="text-slate-400 group-hover:text-amber-400 transition-colors duration-500 mb-8 transform group-hover:-translate-y-2">
                {iconMap[service.icon]}
              </div>
              
              <h4 className="text-lg font-serif font-medium text-white mb-4 uppercase tracking-widest group-hover:text-amber-100 transition-colors">
                {service.title}
              </h4>
              
              <p className="text-slate-400 text-sm leading-relaxed font-light group-hover:text-slate-300">
                {service.description}
              </p>

              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-amber-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;