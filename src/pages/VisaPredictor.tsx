import SopPart2 from "@/pages/SOP/SopPart2.tsx";
import Testimonial from "@/components/sop/Testimonial.tsx";
import SopPart3 from "@/pages/SOP/SopPart3.tsx";
import CTASection from "@/components/cta.tsx";
import VisaPredictorPart1 from "@/components/visa-predictor/VisaPredictorPart1.tsx";

const VisaPredictor = () => {
    return (
        <div>
            <VisaPredictorPart1/>
            <SopPart2/>
            <Testimonial/>
            <SopPart3/>
            <CTASection/>
        </div>
    );
};

export default VisaPredictor;