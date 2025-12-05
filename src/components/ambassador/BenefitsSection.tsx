import React from 'react';
import { Stethoscope, Heart, Activity } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const BenefitsSection = () => {
  return (
    <section className="w-full py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-[1400px]">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium text-primary mb-6">
            Who Can Become an Ambassador
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We welcome passionate individuals from all areas of healthcare and patient advocacy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <BenefitCard 
            icon={<Stethoscope className="w-8 h-8 text-white" />}
            title="Healthcare Professionals"
            items={[
              "Physicians and Nurses",
              "Clinical Researchers",
              "Patient Advocates"
            ]}
          />
          <BenefitCard 
            icon={<Heart className="w-8 h-8 text-white" />}
            title="Patient Advocates"
            items={[
              "Caregiver Ambassadors",
              "Support Group Leaders",
              "Patient Advocates"
            ]}
          />
          <BenefitCard 
            icon={<Activity className="w-8 h-8 text-white" />}
            title="Digital Health Enthusiasts"
            items={[
              "Health Tech Professionals",
              "Medical Innovators",
              "Telehealth Advocates"
            ]}
          />
        </div>

      </div>
    </section>
  );
};

function BenefitCard({ icon, title, items }: { icon: React.ReactNode, title: string, items: string[] }) {
  return (
    <Card className="h-full border-none shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
      <CardHeader className="flex flex-row items-center gap-4 pb-4">
        <div className="p-3 bg-[#35e467] rounded-lg shadow-sm">
          {icon}
        </div>
        <CardTitle className="text-xl font-medium text-primary">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-3 text-muted-foreground">
              <div className="w-1.5 h-1.5 rounded-full bg-[#35e467]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}


