import React from 'react';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-white py-12 px-6 border-t border-gray-100">
      <div className="container mx-auto max-w-7xl flex flex-col items-center">
        
        {/* Branding */}
        <div className="flex flex-col items-center mb-8">
          <img src={logo} alt="The Raj Art" className="h-16 mb-4" />
          <h2 className="text-2xl font-serif font-bold text-gray-900">The Raj Art</h2>
          <p className="text-gray-500 text-sm mt-2 italic">Handcrafted mud, mandala, mirror art inspired by divine grace.</p>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-8 mb-10 text-gray-600 font-medium text-sm">
          <a href="#home" className="hover:text-[#e07a5f] transition-colors">Home</a>
          <a href="#gallery" className="hover:text-[#e07a5f] transition-colors">Gallery</a>
          <a href="#collection" className="hover:text-[#e07a5f] transition-colors">Collection</a>
          <a href="#contact" className="hover:text-[#e07a5f] transition-colors">Contact</a>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-100 mb-8"></div>

        {/* Mandatory Credit & Copyright */}
        <div className="text-center space-y-2">
          <p className="text-gray-900 font-semibold tracking-wide">
            Copyright by KetalSutariya and design by Ketal Sutariya
          </p>
          <p className="text-gray-400 text-xs">
            © {new Date().getFullYear()} The Raj Art. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;