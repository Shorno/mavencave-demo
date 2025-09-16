import CommonPart from "../Listening/CommonPart";
import CommonSection from "../Listening/CommonSection";
import FAQ from "./FAQ";
import Intro from "./Intro";
import SecondComponent from "./SecondComponent";
import ThirdComponent from "./ThirdComponent";


const IeltsFees = () => {
    return (
        <div>
            <Intro></Intro>
            <SecondComponent></SecondComponent>
            <ThirdComponent></ThirdComponent>
            <CommonSection></CommonSection>
            <CommonPart></CommonPart>
            <FAQ></FAQ>
        </div>
    );
};

export default IeltsFees;