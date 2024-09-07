import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export function FAQ() {
    return (
     <section className="flex flex-col items-center justify-center w-screen">
        <h1 className="text-2xl font-semibold">
            FAQs on ESG, Sustainability & CSRD
        </h1>
         <Accordion type="single" collapsible className="p-10 lg:w-2/3">
            <AccordionItem value="item-1" className="px-5">
            <AccordionTrigger>What is ESG rating?</AccordionTrigger>
            <AccordionContent>
                ESG rating is a score given to a company based on its performance in three key areas: Environmental, Social, and Governance. It evaluates how well a company manages its environmental impact, social responsibilities, and corporate governance practices.
            </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
            </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if you prefer.
            </AccordionContent>
            </AccordionItem>
        </Accordion>
     </section>
    )
  }
  