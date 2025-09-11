
import CommonPart from "./CommonPart";
import CommonSection from "./CommonSection";
import FAQ from "./FAQ";
import FeatureFive from "./FeatureFive";
import FeatureFour from "./FeatureFour";
import FeatureThree from "./FeatureThree";
import FeatureTwo from "./FeatureTwo";
import Intro from "./Intro";



const Listening = () => {
    return (
        <div>
           <Intro></Intro>
           
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