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
    <nav
      className={`fixed w-full z-50 transition-all duration-700 ease-in-out ${
        isScrolled
          ? 'bg-slate-950/80 backdrop-blur-md border-b border-white/5 py-4'
          : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center group cursor-pointer">
            <a href="#" className="flex flex-col">
              <span className="text-3xl font-display font-bold tracking-[0.2em] text-white group-hover:text-amber-500 transition-colors duration-500">
                HTL
              </span>
              <span className="text-[0.5rem] uppercase tracking-[0.4em] text-slate-400 group-hover:text-white transition-colors duration-500 text-center">
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
                className="relative text-xs uppercase tracking-[0.2em] text-slate-300 hover:text-white transition-colors duration-300 after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-[1px] after:bg-amber-500 hover:after:w-full after:transition-all after:duration-500"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-4 px-8 py-3 border border-amber-600/50 text-amber-500 hover:bg-amber-600 hover:text-white hover:border-transparent transition-all duration-500 text-xs uppercase tracking-[0.2em]"
            >
              Inquire
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white focus:outline-none hover:text-amber-500 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} strokeWidth={1} /> : <Menu size={24} strokeWidth={1} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-slate-950 border-b border-white/10 transition-all duration-500 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-8 pt-8 pb-12 space-y-6 flex flex-col items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-white text-xl font-serif italic hover:text-amber-500 transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-8 mt-4 border-t border-white/10 w-full flex justify-center">
             <a href="tel:+78123093555" className="flex items-center text-amber-500 text-sm tracking-widest uppercase">
                <Phone size={14} className="mr-3"/> +7 (812) 309 3555
             </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;