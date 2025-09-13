import CommonPart from "../Listening/CommonPart";
import CommonSection from "../Listening/CommonSection";
import { FAQ1, FeatureSeven } from "./FAQ";
import Intro from "./Intro";
import { FeatureFive, FeatureFour, FeatureSix } from "./SecondComponent";

const IeltsExamDate = () => {
    return (
        <div>
            <Intro></Intro>
            <FeatureFour></FeatureFour>
            <FeatureFive></FeatureFive>
            <FeatureSix></FeatureSix>
            <FeatureSeven></FeatureSeven>
            <CommonSection></CommonSection>
            <CommonPart></CommonPart>
            <FAQ1></FAQ1>
        </div>
    );
};

export default IeltsExamDate;