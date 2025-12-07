import React from 'react';
import { Button } from "@/components/ui/button";
import imgHero from "../../assets/f1457afa0a87139648e78366a4e66a633eb27ca7.png";
// Assuming icons are needed, I'll use placeholders or lucid-react if available, 
// but Figma export had them as images. I'll skip specific icons inside buttons for now unless requested or I find them.

export const HeroSection = () => {
  return (
    <section className="relative w-full py-20 lg:py-32 bg-[#384756] overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Text */}
          <div className="flex flex-col space-y-8 text-center lg:text-left">
            <div className="text-4xl md:text-5xl lg:text-[48px] font-normal leading-[1.2] tracking-tight text-white font-sans">
              <p>Empower Patients.</p>
              <p>Champion Data Ownership.</p>
              <p className="mt-2">Join the Ulalo Ambassador Network.</p>
            </div>
            <p className="text-lg md:text-[18px] leading-[28px] text-[#d1d5dc] max-w-xl mx-auto lg:mx-0 font-sans">
              Be a leader in the patient health revolution. Help patients take control of their medical information by introducing them to Ulalo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button
                size="lg"
                className="bg-[#35e467] text-[#384756] hover:bg-[#2dd25b] font-normal h-[49px] px-8 text-[16px] rounded-[4px] font-sans relative"
                onClick={() => document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {/* Icon placeholder */}
                Apply to Become an Ambassador
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 hover:text-white h-[49px] px-8 text-[16px] bg-transparent rounded-[4px] font-sans border-[0.67px]">
                {/* Icon placeholder */}
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="relative rounded-[10px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
            {/* Image container matching Figma dimensions roughly */}
            <img
              src={imgHero}
              alt="Ulalo Ambassador Network"
              className="w-full h-auto object-cover rounded-[10px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
