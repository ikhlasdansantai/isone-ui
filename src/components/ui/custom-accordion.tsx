import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FaqsProps } from "@/data/types/faqs-item.interface";

export default function CustomAccordion({ data }: { data: FaqsProps[] }) {
  return (
    <Accordion type="single" collapsible className="flow-root mt-10">
      {data.map(({ question, answer }, index) => (
        <AccordionItem value={question} key={index}>
          <AccordionTrigger className="text-lg cursor-pointer">
            {question}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground leading-relaxed">
            {answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
