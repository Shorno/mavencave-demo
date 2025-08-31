
import SopFirst from "@/components/sop/SopFirst.tsx";
import SopPart2 from "@/components/sop/SopPart2.tsx";
import SopPart3 from "@/components/sop/SopPart3.tsx";
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