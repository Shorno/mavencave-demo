import CommonPart from "../Listening/CommonPart";
import CommonSection from "../Listening/CommonSection";
import FAQ from "./FAQ";
import FeatureTwo from "./FeatureTwo";
import Intro from "./Intro";


const Reading = () => {
    return (
        <div>
            <Intro></Intro>
            <FeatureTwo></FeatureTwo>
            <CommonSection></CommonSection>
            <CommonPart></CommonPart>
            <FAQ></FAQ>
        </div>
    );
};

export default Reading;