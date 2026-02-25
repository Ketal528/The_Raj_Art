import React from 'react';
import heroBg from '../assets/heroBg.jpeg'; 

const Hero = () => {
  return (
    <section 
      className="relative min-h-[80vh] md:h-screen flex items-center justify-center bg-fixed bg-center bg-cover pt-20"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Overlay - adjusted opacity for better mobile readability */}
      <div className="absolute inset-0 bg-white/40 md:bg-white/40 backdrop-blur-[2px]"></div>

      {/* Content Container */}
      <div className="relative z-10 text-center px-6 md:px-12 max-w-5xl">
        {/* Responsive Heading: smaller on mobile, larger on desktop */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif text-gray-900 mb-4 md:mb-6 tracking-tight leading-tight">
          Art from the Earth
        </h1>
        
        {/* Responsive Text: limited width for readability */}
        <p className="text-base sm:text-lg md:text-xl text-gray-800 mb-8 md:mb-10 leading-relaxed max-w-2xl mx-auto font-medium">
          Discover unique, handcrafted mud art, paintings, mirror art pieces that bring natural texture and timeless elegance to your space.
        </p>

        {/* Responsive Button: full width on tiny screens, auto width on larger */}
        <div className="flex justify-center">
          <div className="flex justify-center mt-8">
            <button className="
              /* Layout & Size */
              inline-flex items-center justify-center 
              min-w-[200px] md:min-w-[250px]
              px-8 py-3 md:px-10 md:py-4
              
              /* Typography */
              text-base md:text-lg font-medium tracking-wide text-white
              
              /* Branding & Style */
              bg-[#e07a5f] rounded-lg shadow-md
              
              /* Interactions */
              transition-all duration-300 ease-in-out
              hover:bg-[#d66d51] hover:shadow-xl hover:-translate-y-1
              active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#e07a5f] focus:ring-opacity-50
            " ><a href="#Collection">Explore the Collection</a>
              
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;