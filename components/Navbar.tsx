import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Destinations', href: '#destinations' },
    { name: 'Expertise', href: '#services' },
    { name: 'Legacy', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isScrolled
            ? 'bg-[#020617]/90 backdrop-blur-xl border-b border-white/5 py-4 shadow-2xl'
            : 'bg-gradient-to-b from-black/80 to-transparent py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="relative group cursor-pointer z-50">
              <a href="#" className="flex flex-col items-center">
                <span className="text-3xl md:text-4xl font-display font-bold tracking-[0.15em] text-white group-hover:text-amber-500 transition-colors duration-500 drop-shadow-lg">
                  HTL
                </span>
                <span className="text-[0.6rem] uppercase tracking-[0.4em] text-amber-500/80 group-hover:text-amber-400 transition-colors duration-500 mt-1">
                  Voyages
                </span>
              </a>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center space-x-12">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative group py-2"
                >
                  <span className="relative z-10 text-xs uppercase tracking-[0.25em] text-slate-300 group-hover:text-white transition-colors duration-300 font-medium">
                    {link.name}
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-amber-500 transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100"></span>
                </a>
              ))}
              <a
                href="#contact"
                className="ml-6 px-8 py-3 bg-white/5 border border-white/10 text-amber-500 hover:bg-amber-600 hover:text-white hover:border-transparent transition-all duration-500 text-[10px] uppercase tracking-[0.3em] font-bold backdrop-blur-sm shadow-[0_0_20px_rgba(180,83,9,0.1)] hover:shadow-[0_0_30px_rgba(180,83,9,0.4)]"
              >
                Private Access
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center z-50">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white focus:outline-none hover:text-amber-500 transition-colors"
              >
                {isMobileMenuOpen ? <X size={24} strokeWidth={1} /> : <Menu size={24} strokeWidth={1} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#020617] transition-all duration-700 ease-[cubic-bezier(0.7,0,0.3,1)] ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link, idx) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-3xl font-serif text-white/80 hover:text-amber-500 transition-all duration-500 hover:scale-110 italic"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {link.name}
            </a>
          ))}
          <div className="h-px w-16 bg-white/10 my-8"></div>
           <a href="tel:+78123093555" className="flex items-center text-amber-500 text-sm tracking-widest uppercase animate-pulse">
              <Phone size={14} className="mr-3"/> +7 (812) 309 3555
           </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;