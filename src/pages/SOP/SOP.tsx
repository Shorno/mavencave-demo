
import SopFirst from "@/pages/SOP/SopFirst.tsx";
import SopPart2 from "@/pages/SOP/SopPart2.tsx";
import SopPart3 from "@/pages/SOP/SopPart3.tsx";
import Testimonial from "@/components/sop/Testimonial.tsx";
import FAQPart from "@/components/sop/FAQPart.tsx";
import CTASection from "@/components/cta.tsx";

const SOP = () => {
   
  return (
    <div >
        <SopFirst/>
        <SopPart2/>
        <SopPart3/>
        <Testimonial/>
        <FAQPart/>
        <CTASection/>
    </div>
  );
}


export default SOP;