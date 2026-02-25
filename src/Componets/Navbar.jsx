import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";

const Menu = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? "bg-[#f2e9d9] shadow-md py-3" // 100% Solid when scrolling
        : "bg-[#f2e9d9]/40 backdrop-blur-sm py-5" // 80% Solid (20% transparent) at top
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        <div className="flex items-center gap-3">
          <img src={logo} alt="The Raj Art" className="h-10 w-auto" />
          <span className="font-bold text-xl tracking-tight text-gray-900">
            The Raj Art
          </span>
        </div>

        <ul className="hidden md:flex gap-8 font-medium text-gray-700">
          <li><a href="#home" className="hover:text-amber-800 transition">Home</a></li>
          <li><a href="#about" className="hover:text-amber-800 transition">About</a></li>
          <li><a href="#gallery" className="hover:text-amber-800 transition">Gallery</a></li>
          <li><a href="#Collection" className="hover:text-amber-800 transition">Shop</a></li>
          <li><a href="#Contact" className="hover:text-amber-800 transition">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;