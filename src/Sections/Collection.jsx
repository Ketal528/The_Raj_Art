import React, { useState } from 'react';
import art1 from '../assets/Gallery/mudart2.jpeg'; 
import mandalaart from '../assets/Gallery/mandalaart.jpeg';
import painting from '../assets/Gallery/painting.jpeg';
import mirrorart from '../assets/Gallery/mirrorart.jpeg';

const Collection = () => {
  // State to track which art piece is clicked
  const [selectedArt, setSelectedArt] = useState(null);

  const mobileNumber = "919510216566"; 

  const collectionData = [
    { 
      id: 1, 
      title: "Mud Art", 
      price: "₹1500", 
      image: art1,
      desc: "A stunning piece of traditional mud work (Lippan Art) featuring intricate geometric patterns and organic textures that bring an earthy soul to any room.",
      dimensions: "24\" x 24\"",
      materials: "Natural clay, mirrors, and wood base"
    },
    { 
      id: 2, 
      title: "Mandala Art", 
      price: "₹2000", 
      image: mandalaart,
      desc: "This circular, symmetrical art form symbolizes balance and harmony. Each stroke is handcrafted to create a meditative visual experience.",
      dimensions: "30\" x 30\"",
      materials: "Ink, acrylic on canvas"
    },
    { 
      id: 3, 
      title: "Painting", 
      price: "₹500", 
      image: painting,
      desc: "A beautiful exploration of colors and modern themes, perfect for adding a creative touch to small spaces or office desks.",
      dimensions: "12\" x 12\"",
      materials: "Oil paint and mixed media"
    },
    { 
      id: 4, 
      title: "Mirror Art", 
      price: "₹500", 
      image: mirrorart,
      desc: "Mirror art combines clay work with hand-cut mirrors that capture light, creating a sparkling divine depth in your spiritual or living space.",
      dimensions: "18\" x 18\"",
      materials: "Clay work with embedded glass mirrors"
    }
  ];

  return (
    <section id="collection" className="bg-[#f2e9d9] py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">Our Collection</h2>
          <p className="text-gray-700 max-w-2xl mx-auto font-light text-lg">
            Each piece is a unique creation, handcrafted with natural materials.
          </p>
          <div className="w-20 h-1 bg-[#e07a5f] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* --- Product Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {collectionData.map((item) => (
            <div 
              key={item.id} 
              onClick={() => setSelectedArt(item)} // Open modal on click
              className="group cursor-pointer flex flex-col items-center"
            >
              <div className="w-full aspect-square overflow-hidden rounded-t-3xl shadow-sm">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="bg-white/80 backdrop-blur-sm py-4 w-full rounded-b-3xl text-center shadow-md border-t border-gray-100">
                <h3 className="text-xl font-medium text-gray-900 leading-none">{item.title}</h3>
                <p className="text-gray-500 text-sm mt-1 leading-none">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- Detailed Modal Overlay --- */}
      {selectedArt && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-md p-4 animate-in fade-in duration-300">
          <div className="bg-[#fdfbf7] w-full max-w-5xl rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row relative">
            
            {/* Close Button */}
            <button 
              onClick={() => setSelectedArt(null)}
              className="absolute top-6 right-6 z-10 bg-white/80 p-3 rounded-full hover:bg-white shadow-md transition-all active:scale-90"
            >
              <span className="text-xl font-bold">✕</span>
            </button>

            {/* Left side: Image */}
            <div className="w-full md:w-3/5 h-[40vh] md:h-[600px]">
              <img 
                src={selectedArt.image} 
                className="w-full h-full object-cover" 
                alt={selectedArt.title} 
              />
            </div>

            {/* Right side: Details */}
            <div className="w-full md:w-2/5 p-8 md:p-12 flex flex-col justify-center bg-[#fdfbf7]">
              <h3 className="text-4xl md:text-5xl font-serif text-gray-900 mb-2">{selectedArt.title}</h3>
              <p className="text-2xl text-[#e07a5f] font-bold mb-6">{selectedArt.price}</p>
              
              <p className="text-gray-600 leading-relaxed mb-8 text-lg font-light">
                {selectedArt.desc}
              </p>

              {/* Inquire on WhatsApp Button */}
              <a 
                href={`https://wa.me/${mobileNumber}?text=I am interested in: ${selectedArt.title} priced at ${selectedArt.price}`}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-[#e07a5f] text-white text-center py-5 rounded-2xl font-bold hover:bg-[#d66d51] transition-all flex items-center justify-center gap-3 shadow-lg shadow-orange-200"
              >
                Inquire on WhatsApp 💬
              </a>

              {/* Dimensions and Materials Footer */}
              <div className="mt-10 pt-6 border-t border-gray-200 space-y-3">
                <p className="text-sm text-gray-500 font-medium">
                  <span className="text-gray-900">Dimensions: </span> {selectedArt.dimensions}
                </p>
                <p className="text-sm text-gray-500 font-medium">
                  <span className="text-gray-900">Materials: </span> {selectedArt.materials}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Collection;