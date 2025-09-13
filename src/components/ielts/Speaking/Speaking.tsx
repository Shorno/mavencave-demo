import CommonPart from "../Listening/CommonPart";
import CommonSection from "../Listening/CommonSection";
import FAQ from "./FAQ";

import Intro from "./Intro";
import SecondComponent from "./SecondComponent";

const Speaking = () => {
    return (
        <div>
            <Intro></Intro>
            <SecondComponent></SecondComponent>
            <CommonSection></CommonSection>
            <CommonPart></CommonPart>
            <FAQ></FAQ>
        </div>
    );
};

export default Speaking;