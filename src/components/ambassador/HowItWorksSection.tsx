import React from 'react';
import { CheckCircle2 } from "lucide-react";

export const HowItWorksSection = () => {
  const steps = [
    {
      id: 1,
      title: "Apply & Qualify",
      description: "Submit your application and tell us about your passion for patient empowerment. Our team will review and approve qualified candidates."
    },
    {
      id: 2,
      title: "Onboard & Train",
      description: "Complete our comprehensive training program. Learn about Ulalo's mission, and best practices for ambassadorship."
    },
    {
      id: 3,
      title: "Engage & Impact",
      description: "Begin your work as an ambassador. Spread awareness, build partnerships, create content, and help patients take control of their data."
    },
    {
      id: 4,
      title: "Earn & Grow",
      description: "Track your outcomes, earn rewards, and advance through tiers. Celebrate your contributions to a better healthcare system."
    }
  ];

  return (
    <section className="w-full py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-[1400px]">
        
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-medium text-primary mb-6">
            How the Program Works
          </h2>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-8 left-0 w-full h-0.5 bg-gray-200 -z-10" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {steps.map((step, index) => (
              <div key={step.id} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-full bg-[#35e467] flex items-center justify-center text-white text-2xl font-bold mb-6 shadow-md group-hover:scale-110 transition-transform duration-300 ring-4 ring-white">
                  {step.id}
                </div>
                <h3 className="text-xl font-medium mb-4 text-primary">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};


