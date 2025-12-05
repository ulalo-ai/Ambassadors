import React from 'react';
import { Users, ShieldCheck, HeartHandshake } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const WhatIsSection = () => {
  return (
    <section className="w-full py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-[1400px]">
        
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-blue-50 rounded-full">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-medium mb-6 text-primary">
            What Is the Ulalo Ambassador Network?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The Ulalo Ambassador Network is an exclusive community of healthcare professionals, patient advocates, and engaged individuals passionate about empowering patients through data ownership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ValueCard 
            icon={<ShieldCheck className="w-6 h-6 text-[#35e467]" />}
            title="Champion Ownership"
            description="Help spread awareness about Ulalo's mission to give patients control over their own medical data."
          />
          <ValueCard 
            icon={<Users className="w-6 h-6 text-blue-500" />}
            title="Educate & Empower"
            description="Educate patients and providers about the benefits of a patient-centered health data ecosystem."
          />
          <ValueCard 
            icon={<HeartHandshake className="w-6 h-6 text-purple-500" />}
            title="Build Trust"
            description="Create a culture of transparency and partnership in healthcare through secure data exchange."
          />
        </div>

      </div>
    </section>
  );
};

function ValueCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <Card className="border-none shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-shadow duration-300 h-full">
      <CardContent className="p-8 flex flex-col items-center text-center h-full">
        <div className="p-3 bg-gray-50 rounded-xl mb-6">
          {icon}
        </div>
        <h3 className="text-xl font-medium mb-3 text-primary">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}


