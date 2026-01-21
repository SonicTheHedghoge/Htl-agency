import React from 'react';
import { AGENCY_LEGAL_NAME, LEGAL_DETAILS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 lg:col-span-2">
            <h5 className="text-white text-lg font-serif font-bold mb-4">HTL Travel Agency</h5>
            <p className="max-w-xs text-sm">
              Connecting cultures through exceptional travel experiences since 1992.
            </p>
          </div>
          
          <div>
            <h6 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Legal (Russia)</h6>
            <ul className="space-y-2 text-sm">
              <li>{AGENCY_LEGAL_NAME}</li>
              <li>INN: {LEGAL_DETAILS.inn}</li>
              <li>OGRN: {LEGAL_DETAILS.ogrn}</li>
              <li>Reg: {LEGAL_DETAILS.regDate}</li>
            </ul>
          </div>
          
          <div>
            <h6 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Quick Links</h6>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-amber-500 transition-colors">Home</a></li>
              <li><a href="#destinations" className="hover:text-amber-500 transition-colors">Destinations</a></li>
              <li><a href="#contact" className="hover:text-amber-500 transition-colors">Contact</a></li>
              <li><a href="https://htl.ru" target="_blank" rel="noreferrer" className="hover:text-amber-500 transition-colors">Old Website</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} HTL Travel Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;