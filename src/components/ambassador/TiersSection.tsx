import React from 'react';
import { Check, Trophy } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const TiersSection = () => {
  return (
    <section id="rewards" className="w-full py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-[1400px]">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium text-primary mb-6">
            Rewards, Tiers, and Growth
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The Ulalo Ambassador Network is structured to reward your engagement and outcomes. Progress through tiers and unlock greater rewards!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <TierCard
            name="Bronze"
            color="bg-[#bb4d00]"
            items={[
              "Exclusive training resources",
              "Ambassador numbering",
              "Network opportunities",
              "Recognition"
            ]}
          />
          <TierCard
            name="Silver"
            color="bg-[#99a1af]"
            items={[
              "All Bronze benefits",
              "Priority support",
              "Co-marketing opportunities",
              "Event invitations"
            ]}
          />
          <TierCard
            name="Gold"
            color="bg-[#dac642]"
            items={[
              "All Silver benefits",
              "Revenue sharing",
              "Speaking opportunities",
              "Advisory board access",
              "Premium swag"
            ]}
          />
          <TierCard
            name="Platinum"
            color="bg-[#c27aff]"
            items={[
              "All Gold benefits",
              "Partnership development",
              "Custom solutions",
              "Executive access"
            ]}
          />
        </div>

        <div className="w-full max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-[#35e467] to-[#2dd25b] border-none text-white shadow-lg">
            <CardContent className="flex flex-col md:flex-row items-center p-8 md:p-12 gap-6 text-center md:text-left">
              <div className="p-4 bg-white/20 rounded-full">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-medium mb-2">Top Performance Pool</h3>
                <p className="text-white/90 leading-relaxed">
                  The top performers from the Gold and Platinum tiers are eligible to join our annual profit revenue pool. Ambassadors can earn a monetary bonus based on active referrals (verified signups, patient-generated records, engagement) and driven.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

      </div>
    </section>
  );
};

function TierCard({ name, color, items }: { name: string, color: string, items: string[] }) {
  return (
    <Card className="border-none shadow-sm hover:shadow-md transition-all duration-300 h-full overflow-hidden flex flex-col">
      <div className={`${color} py-4 text-center text-white font-medium text-lg`}>
        {name}
      </div>
      <CardContent className="p-6 flex-grow">
        <ul className="space-y-4">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
              <Check className="w-4 h-4 text-[#35e467] mt-0.5 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}


