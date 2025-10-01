import Heading from "@/components/ui/Heading";
import CustomAccordion from "@/components/ui/custom-accordion";
import { FAQS_ITEM } from "@/data/const/faqs-item";

export default function Faq() {
  return (
    <section className="max-w-3xl mx-auto px-4 pt-20 pb-10">
      <div className="titles max-w-lg mx-auto text-center relative mt-4">
        <Heading>If u not ask, maybe someone else will</Heading>
      </div>

      <CustomAccordion data={FAQS_ITEM} />
    </section>
  );
}
