import React from 'react';
import { Button } from "@/components/ui/button";
import ulaloLogo from "../../assets/UlaloLogo.png";

export const Navbar = () => {
  return (
    <nav className="w-full h-20 bg-[#384756] border-b border-[#384756] sticky top-0 z-50 transition-all">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-[1400px] h-full flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-[1px]">
          {/* <span className="text-[36px] font-bold tracking-tight text-[#f4f4f4] leading-none font-sans">UL</span> */}
          <div className="h-[150px] w-[150px] relative top-[2px] mx-0.5">
            <img src={ulaloLogo} alt="Ulalo Logo" className="w-full h-full object-contain" />
          </div>
          {/* <span className="text-[36px] font-bold tracking-tight text-[#f4f4f4] leading-none font-sans">LO</span> */}
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-[16px] font-normal text-white hover:text-[#35e467] transition-colors font-sans bg-transparent border-none cursor-pointer">Home</button>
          <button onClick={() => document.getElementById('rewards')?.scrollIntoView({ behavior: 'smooth' })} className="text-[16px] font-normal text-white hover:text-[#35e467] transition-colors font-sans bg-transparent border-none cursor-pointer">Rewards Program</button>
          <button onClick={() => document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' })} className="text-[16px] font-normal text-white hover:text-[#35e467] transition-colors font-sans bg-transparent border-none cursor-pointer">Benefits</button>
          <button onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })} className="text-[16px] font-normal text-white hover:text-[#35e467] transition-colors font-sans bg-transparent border-none cursor-pointer">FAQ</button>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <Button
            className="bg-[#35e467] text-[#384756] hover:bg-[#2dd25b] font-normal h-10 px-6 text-[16px] font-sans rounded-[4px]"
            onClick={() => document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Join Now
          </Button>
        </div>

      </div>
    </nav>
  );
};
