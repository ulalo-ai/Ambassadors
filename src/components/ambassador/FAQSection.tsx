import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => {
  return (
    <section id="faq" className="w-full py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-[900px]">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium text-primary mb-6">
            Frequently Asked Questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem value="item-1" className="border rounded-lg px-4 bg-gray-50 data-[state=open]:bg-white data-[state=open]:shadow-sm transition-all">
            <AccordionTrigger className="text-left text-lg font-medium text-primary hover:no-underline py-6">
              What is the time commitment?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base pb-6 leading-relaxed">
              The time commitment is flexible and designed to fit your schedule. Whether you can dedicate a few hours a week or just want to share updates occasionally, your contribution is valued. We provide resources to help you be effective with whatever time you have available.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border rounded-lg px-4 bg-gray-50 data-[state=open]:bg-white data-[state=open]:shadow-sm transition-all">
            <AccordionTrigger className="text-left text-lg font-medium text-primary hover:no-underline py-6">
              How are my ambassador payments structured in exchange for activities?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base pb-6 leading-relaxed">
              Ambassadors earn rewards based on engagement and tangible outcomes, such as verified user signups and patient data records generated. Our tiered system (Bronze to Platinum) offers increasing benefits, and top performers in Gold and Platinum tiers are eligible for our annual profit revenue pool.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border rounded-lg px-4 bg-gray-50 data-[state=open]:bg-white data-[state=open]:shadow-sm transition-all">
            <AccordionTrigger className="text-left text-lg font-medium text-primary hover:no-underline py-6">
              Can I be an ambassador if I'm not in healthcare?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base pb-6 leading-relaxed">
              Absolutely! While we welcome healthcare professionals, the Ulalo Ambassador Network is open to anyone passionate about patient empowerment and data ownership. Digital health enthusiasts, patients, caregivers, and community leaders are all encouraged to apply.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

      </div>
    </section>
  );
};


