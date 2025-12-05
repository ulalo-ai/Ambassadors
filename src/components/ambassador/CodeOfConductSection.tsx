import React from 'react';
import { Shield, Heart, UserCheck, FileCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const CodeOfConductSection = () => {
  return (
    <section className="w-full py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-[1400px]">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium text-primary mb-6">
            Code of Conduct
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ConductCard 
            icon={<Shield className="w-6 h-6 text-white" />}
            title="Integrity & Honesty"
            description="Represent Ulalo truthfully and transparently in all communications."
          />
          <ConductCard 
            icon={<Heart className="w-6 h-6 text-white" />}
            title="Respect & Inclusivity"
            description="Treat all individuals with respect and promote an inclusive environment."
          />
          <ConductCard 
            icon={<UserCheck className="w-6 h-6 text-white" />}
            title="Patient-First Approach"
            description="Always prioritize the needs and well-being of patients."
          />
          <ConductCard 
            icon={<FileCheck className="w-6 h-6 text-white" />}
            title="Accuracy of Information"
            description="Ensure all information shared about Ulalo is accurate and up-to-date."
          />
        </div>

      </div>
    </section>
  );
};

function ConductCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <Card className="border-none shadow-sm hover:shadow-md transition-all duration-300 h-full text-center">
      <CardContent className="p-8 flex flex-col items-center">
        <div className="p-3 bg-[#35e467] rounded-full mb-6">
          {icon}
        </div>
        <h3 className="text-lg font-medium mb-3 text-primary">{title}</h3>
        <p className="text-muted-foreground leading-relaxed text-sm">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}


