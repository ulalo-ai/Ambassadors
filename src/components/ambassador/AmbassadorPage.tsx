import React from 'react';
import { Navbar } from './Navbar';
import { HeroSection } from './HeroSection';
import { WhatIsSection } from './WhatIsSection';
import { BenefitsSection } from './BenefitsSection';
import { ImageBreakSection } from './ImageBreakSection';
import { WhatAmbassadorsDoSection } from './WhatAmbassadorsDoSection';
import { TiersSection } from './TiersSection';
import { SupportSection } from './SupportSection';
import { ImageTextDividerSection } from './ImageTextDividerSection';
import { HowItWorksSection } from './HowItWorksSection';
import { CodeOfConductSection } from './CodeOfConductSection';
import { FAQSection } from './FAQSection';
import { ApplicationFormSection } from './ApplicationFormSection';
import { Footer } from './Footer';

export const AmbassadorPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-[#384756]">
      <Navbar />
      <main>
        <HeroSection />
        <WhatIsSection />
        <BenefitsSection />
        <ImageBreakSection />
        <WhatAmbassadorsDoSection />
        <TiersSection />
        <SupportSection />
        <ImageTextDividerSection />
        <HowItWorksSection />
        <CodeOfConductSection />
        <FAQSection />
        <ApplicationFormSection />
      </main>
      <Footer />
    </div>
  );
};


