import React from 'react';
import { CONTACT_RUSSIA, BRANCH_TUNISIA, SOCIAL_LINKS } from '../constants';
import { Phone, Mail, MapPin, Facebook, Globe, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-slate-950 pt-32 pb-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            {/* Header / Intro */}
            <div className="lg:col-span-1">
                <span className="text-amber-500 text-xs font-bold uppercase tracking-[0.3em] block mb-4">Contact</span>
                <h2 className="text-5xl font-serif text-white mb-8 leading-tight">
                    Begin Your <br/> Journey
                </h2>
                <p className="text-slate-400 font-light text-lg mb-12">
                    Our concierge team is available to tailor your itinerary to perfection.
                </p>

                <a href={`mailto:${CONTACT_RUSSIA.email}`} className="inline-flex items-center gap-3 text-white border-b border-amber-500 pb-2 hover:text-amber-500 transition-colors group">
                    <span className="uppercase tracking-[0.2em] text-sm">Email Us</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform"/>
                </a>
            </div>

            {/* Offices */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Russia */}
                <div className="bg-white/5 p-8 border border-white/5 hover:border-amber-500/30 transition-colors duration-500 group">
                    <div className="flex items-baseline justify-between mb-8">
                        <h4 className="text-2xl font-serif text-white">St. Petersburg</h4>
                        <span className="text-slate-500 text-xs uppercase tracking-widest">HQ</span>
                    </div>
                    
                    <div className="space-y-6 text-sm font-light text-slate-300">
                         <div className="flex gap-4">
                            <MapPin className="w-5 h-5 text-amber-500/70 shrink-0" />
                            <p>{CONTACT_RUSSIA.address}</p>
                         </div>
                         <div className="flex gap-4">
                            <Phone className="w-5 h-5 text-amber-500/70 shrink-0" />
                            <div className="flex flex-col">
                                {CONTACT_RUSSIA.phone.map(phone => (
                                    <span key={phone} className="hover:text-white cursor-pointer transition-colors">{phone}</span>
                                ))}
                            </div>
                         </div>
                    </div>
                </div>

                {/* Tunisia */}
                <div className="bg-white/5 p-8 border border-white/5 hover:border-amber-500/30 transition-colors duration-500 group">
                    <div className="flex items-baseline justify-between mb-8">
                        <h4 className="text-2xl font-serif text-white">Sousse</h4>
                        <span className="text-slate-500 text-xs uppercase tracking-widest">Branch</span>
                    </div>
                    
                    <div className="space-y-6 text-sm font-light text-slate-300">
                         <div className="flex gap-4">
                            <MapPin className="w-5 h-5 text-amber-500/70 shrink-0" />
                            <p>{BRANCH_TUNISIA.name}</p>
                         </div>
                         <div className="flex gap-4">
                            <Phone className="w-5 h-5 text-amber-500/70 shrink-0" />
                            <span className="hover:text-white cursor-pointer transition-colors">{BRANCH_TUNISIA.phone}</span>
                         </div>
                         <div className="flex gap-4 pt-4 border-t border-white/10 mt-6">
                            <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noreferrer" className="p-2 bg-white/10 hover:bg-amber-600 transition-colors">
                                <Facebook className="w-4 h-4 text-white" />
                            </a>
                            <a href={SOCIAL_LINKS.website} target="_blank" rel="noreferrer" className="p-2 bg-white/10 hover:bg-amber-600 transition-colors">
                                <Globe className="w-4 h-4 text-white" />
                            </a>
                         </div>
                    </div>
                </div>

            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;