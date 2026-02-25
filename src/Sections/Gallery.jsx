import React from 'react';
import art1 from '../assets/Gallery/mandalaart.jpeg'; 
import art2 from '../assets/Gallery/mirrorart.jpeg';
import art3 from '../assets/Gallery/mudart.jpeg';
import art4 from '../assets/Gallery/mudart2.jpeg';
import art5 from '../assets/Gallery/painting.jpeg';

const Gallery = () => {
  const images = [art1, art2, art3, art4, art5];
  const scrollingImages = [...images, ...images];

  // Local Reusable Section Function
  const ArtSection = ({ title, description, image, reverse = false }) => (
    // Changed h-screen to min-h-[80vh] for better iPad fitting
    <div className="w-full min-h-[80vh] md:min-h-screen bg-[#f2e9d9] flex items-center justify-center p-0 lg:p-12 overflow-hidden border-t border-black/5">
      <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center w-full h-full bg-white/30 backdrop-blur-sm`}>
        
        {/* Image Side - Adjusted height for iPad/Tablet */}
        <div className="w-full lg:w-1/2 h-[45vh] sm:h-[50vh] lg:h-full overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>

        {/* Content Side - Responsive padding and font sizing */}
        <div className="w-full lg:w-1/2 text-left p-8 sm:p-12 md:p-14 lg:p-16 flex flex-col justify-center">
          <div className="space-y-2">
            <span className="text-[#e07a5f] font-bold tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-sm uppercase block">
              Featured Artwork
            </span>
            {/* Title: Scaled down for iPad (text-6xl) and up for Desktop (text-8xl) */}
            <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-serif text-gray-900 leading-tight">
              {title}
            </h3>
          </div>

          <p className="text-gray-700 leading-relaxed font-light text-lg md:text-xl lg:text-2xl max-w-xl mt-4 md:mt-6">
            {description}
          </p>
          
          <div className="pt-6 md:pt-10">
            <button className="group w-full sm:w-auto flex items-center justify-center gap-4 bg-[#e07a5f] text-white px-8 md:px-10 py-4 md:py-5 rounded-full text-base md:text-lg font-medium hover:bg-[#d66d51] transition-all shadow-2xl">
              <a href="#Collection">Explore the Collection</a>
              <span className="text-xl md:text-2xl transition-transform duration-300 group-hover:translate-x-2">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="gallery" className="bg-[#f2e9d9] overflow-hidden">
      {/* 1. Header & Marquee Section */}
      <div className="py-16 text-center px-4">
        <h2 className="text-3xl md:text-5xl font-serif text-gray-900">Inspirational Showcase</h2>
        <p className="text-gray-700 max-w-2xl mx-auto font-light text-base md:text-lg italic mt-4">
          "A gallery of earthly textures and handcrafted forms to inspire your next custom piece."
        </p>
        <div className="w-20 h-1 bg-[#e07a5f] mx-auto mt-6 rounded-full"></div>
      </div>

      {/* Marquee with iPad height adjustment */}
      <div className="flex w-fit animate-scroll hover:[animation-play-state:paused] mb-12">
        {scrollingImages.map((src, index) => (
          <div key={index} className="flex-shrink-0 px-2">
            <img 
              src={src} 
              className="h-[200px] sm:h-[300px] md:h-[350px] lg:h-[400px] w-auto rounded-2xl shadow-md object-cover"
              alt="Gallery Item"
            />
          </div>
        ))}
      </div>

      

      {/* 2. Art Sections */}
      <ArtSection 
        title="Mandala Art"
        image={art1}
        description="A circular, symmetrical art form with repeating patterns, symbolizing balance, unity, and harmony."
      />

      <ArtSection 
        title="Mud Art"
        image={art3}
        reverse={true}
        description="Traditional Lippan Kam uses relief patterns created with clay and camel dung, reflecting the raw soul of the earth."
      />

      <ArtSection 
        title="Mirror Art"
        image={art2}
        description="Intricate clay textures embedded with mirrors that capture light and create a divine sparkle in any space."
      />
    </section>
  );
};

export default Gallery;