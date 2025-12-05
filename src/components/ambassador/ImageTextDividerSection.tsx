import React from 'react';
import imgDivider from "../../assets/0de260b66378634809a2d3509bf6f98ca1e17755.png";

export const ImageTextDividerSection = () => {
  return (
    <section className="w-full py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-[1400px]">
        <div className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg">
          <img 
            src={imgDivider} 
            alt="Ulalo Impact" 
            className="w-full h-full object-cover"
          />
          {/* Optional: Add overlay text or gradient if needed */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent flex items-center">
             <div className="px-8 md:px-16 text-white max-w-xl">
                <h3 className="text-2xl md:text-3xl font-medium mb-4">Building a Healthier Future Together</h3>
                <p className="text-lg text-white/90">Join thousands of ambassadors making a real difference in patient data ownership.</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};


