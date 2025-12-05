import React from 'react';
import imgBreak from "../../assets/9536a7460b036e618fc0d3beb5046c2b9aca7d0a.png";

export const ImageBreakSection = () => {
  return (
    <section className="w-full h-[400px] md:h-[500px] relative overflow-hidden my-12">
      <img 
        src={imgBreak} 
        alt="Ulalo Community" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-[#00ff0d]/20 mix-blend-multiply" />
      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white drop-shadow-md">
            Join a Global Movement
          </h2>
        </div>
      </div>
    </section>
  );
};


