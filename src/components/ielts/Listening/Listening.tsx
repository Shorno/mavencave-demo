
import CommonPart from "./CommonPart";
import CommonSection from "./CommonSection";
import FAQ from "./FAQ";
import FeatureFive from "./FeatureFive";
import FeatureFour from "./FeatureFour";
import FeatureThree from "./FeatureThree";
import FeatureTwo from "./FeatureTwo";
import Intro from "./Intro";
import IeltsCarouselSection from "@/components/ielts/Ielts-carousel-section.tsx";
import {ieltsCarouselData} from "@/data/carousle-data.ts";



const Listening = () => {
    return (
        <div>
           <Intro></Intro>
            <IeltsCarouselSection data={ieltsCarouselData}/>
            <FeatureTwo></FeatureTwo>
           <FeatureThree></FeatureThree>
           <FeatureFour></FeatureFour>
           <FeatureFive></FeatureFive>
           <CommonSection></CommonSection>
           <CommonPart></CommonPart>
           <FAQ></FAQ>
        </div>
    );
};

export default Listening;