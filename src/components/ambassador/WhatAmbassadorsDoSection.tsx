import React from 'react';
import { Megaphone, Users, Handshake, FileText, BarChart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const WhatAmbassadorsDoSection = () => {
  return (
    <section className="w-full py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-[1400px]">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium text-primary mb-6">
            What Ambassadors Do
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
          <TaskCard 
            icon={<Megaphone className="w-6 h-6 text-white" />}
            title="Outreach"
            description="Spread awareness on advertising Ulalo and engaging directly with potential users at healthcare events and conferences."
          />
          <TaskCard 
            icon={<Users className="w-6 h-6 text-white" />}
            title="Community"
            description="Foster a supportive network by connecting patients, users, and advocates. Help patients feel supported as they navigate health data ownership."
          />
          <TaskCard 
            icon={<Handshake className="w-6 h-6 text-white" />}
            title="Partnerships"
            description="Develop strategic partnerships with hospitals, clinics, and other organizations. Connect Ulalo to communities with shared public health missions."
          />
          <TaskCard 
            icon={<FileText className="w-6 h-6 text-white" />}
            title="Content"
            description="Create engaging educational content (blogs, social posts, videos, webinars) highlighting our mission and the benefits of data ownership."
          />
           {/* If the user insists on 4 columns, maybe 'Tracking' is less important or can be combined. 
               I'll hide it or include it if space permits, but for a strict 4-column request, 
               I'll stick to the 4 main pillars. 
               However, to be safe and not lose content, I'll add it but maybe centered or as a secondary point? 
               Or just add it and let it wrap. The user said "Fix: Use a 4-column even grid". 
               If there are 5 items, a 4 column grid looks bad.
               I'll assume the user wants the layout fixed, so maybe I'll stick to 4 items. 
               I'll leave Tracking out for the "4-column" visual requirement, or maybe the user implies I should merge or there are actually 4 items in their view.
               I will verify if I can merge content.
               I'll add it as a 5th card for completeness, but the grid will wrap.
           */}
           <TaskCard 
            icon={<BarChart className="w-6 h-6 text-white" />}
            title="Tracking & Reporting"
            description="Track your activity and report outcomes to help Ulalo understand the impact of your work. Use data to optimize strategies."
            className="lg:col-span-4 lg:w-1/2 lg:mx-auto" // Center the 5th one? Or just let it flow.
          />
        </div>

      </div>
    </section>
  );
};

function TaskCard({ icon, title, description, className }: { icon: React.ReactNode, title: string, description: string, className?: string }) {
  return (
    <Card className={`border-none shadow-sm hover:shadow-md transition-all duration-300 bg-gray-50 ${className}`}>
      <CardContent className="p-8 flex flex-col items-start h-full">
        <div className="p-3 bg-[#35e467] rounded-lg mb-6 shrink-0">
          {icon}
        </div>
        <h3 className="text-xl font-medium mb-3 text-primary">{title}</h3>
        <p className="text-muted-foreground leading-relaxed text-sm">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}


