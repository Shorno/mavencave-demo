import CommonPart from "../Listening/CommonPart";
import CommonSection from "../Listening/CommonSection";
import Intro, { IeltsReading, IeltsSummary } from "./Intro";
import { FAQ, SecondComponent } from "./SecondComponent";


const IeltsPractice = () => {
    return (
        <div>
            <Intro></Intro>
            <IeltsReading></IeltsReading>
            <IeltsSummary></IeltsSummary>
            <SecondComponent></SecondComponent>
            <CommonSection></CommonSection>
            <CommonPart></CommonPart>
            <FAQ></FAQ>
        </div>
    );
};

export default IeltsPractice;