import React from 'react';
import { GraduationCap, Megaphone, Headphones, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const SupportSection = () => {
  return (
    <section className="w-full py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-[1400px]">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium text-primary mb-6">
            Tools and Support You Get
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide ambassadors with everything you need to succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SupportCard 
            icon={<GraduationCap className="w-6 h-6 text-white" />}
            title="Exclusive Training Portal"
            description="Access in-depth courses, webinars, and certification programs to become an expert on Ulalo and health data ownership."
          />
          <SupportCard 
            icon={<Megaphone className="w-6 h-6 text-white" />}
            title="Marketing & Outreach Kit"
            description="Utilize pre-made content, templates, and social media graphics. Access our brand guidelines and promotional materials."
          />
          <SupportCard 
            icon={<Headphones className="w-6 h-6 text-white" />}
            title="Dedicated Support Team"
            description="Work directly with our ambassador coordination team. Get help with questions, event planning, and technical support."
          />
          <SupportCard 
            icon={<Zap className="w-6 h-6 text-white" />}
            title="Beta Platform Access"
            description="Be the first to experience new features and updates. Provide exclusive feedback to help shape the future of Ulalo."
          />
        </div>

      </div>
    </section>
  );
};

function SupportCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <Card className="border-none shadow-sm hover:shadow-md transition-all duration-300 bg-gray-50 h-full">
      <CardContent className="p-8 flex items-start gap-6">
        <div className="p-3 bg-[#35e467] rounded-lg shrink-0">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-medium mb-3 text-primary">{title}</h3>
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}


