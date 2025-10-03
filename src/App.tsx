import {Route, Routes} from "react-router";
import PublicLayout from "./layout/PublicLayout";
import {
    AboutPage,
    BlogPage,
    HomePage,
    IeltsBooksPage,
    ExamsPage,
    StudyAbroad,
    MavenCaveAi,
    SOP,
    VisaPredictor,
    IeltsOverviewPage,
    IeltsTypesPage,
    IeltsBlogLayout,
    IeltsEligibilityPage,
    IeltsResultsPage,
    IeltsRegistrationPage,
    IeltsSyllabus,
    SlotBookingPage,
    HarvardReact,
    LorMasters,
    AuthLayout,
    SignUpPage,
    LoginPage,
    CueCardPage,
    SOPPhD,
    Listening,
    Reading,
    Careers,
    KnowledgeCenter, MavencaveAdvantage, MavencaveFreeClass,
} from "@/pages";
import useScrollToTop from "@/hooks/useScrollToTop.tsx";
import IeltsExamDate from "./components/ielts/IeltsExamDate/IeltsExamDate";
import IeltsPractice from "./components/ielts/IeltsPractice/IeltsPractice";
import IeltsFees from "./components/ielts/IeltsFees/IeltsFees";
import IeltsTestCenters from "./components/ielts/IeltsTestCenters/IeltsTestCenters";
import Speaking from "./components/ielts/Speaking/Speaking";
import PracticeResources from "./components/ielts/PracticeResources/PracticeResources";
import Writing from "./components/ielts/Writing/Writing";
import StanfordUniversity from "@/pages/Universities/StanfordUniversity.tsx";
import YaleUniversity from "@/pages/Universities/YaleUniversity.tsx";
import OxfordUniversity from "./pages/Universities/OxfordUniversity";
import CambridgeUniversity from "./pages/Universities/CambridgeUnversity";
import MIT from "./pages/Universities/MIT";
import CostPage from "@/pages/CostPage.tsx";
import FinancePage from "@/pages/FinancePage.tsx";
import TOEFLPage from "@/pages/TOEFLPage.tsx";
import GREPage from "@/pages/GREPage.tsx";
import PTEPage from "@/pages/PTEPage.tsx";
import ColumbiaUniversity from "@/pages/Universities/ColumbiaUniversity.tsx";
import DigestPage from "@/pages/DigestPage.tsx";
import USAMastersPage from "@/pages/USAMastersPage.tsx";
import CounsellorPage from "@/pages/CounsellorPage.tsx";
import UniversityOfBritishColumbia from "@/pages/Universities/BritishColumbia.tsx";
import McGillUniversity from "@/pages/Universities/McGillUniversity.tsx";
import UniversityOfAlberta from "@/pages/Universities/UniversityOfAlberta.tsx";
import UniversityOfMontreal from "@/pages/Universities/UniversityOfMontreal.tsx";
import UniversityOfOttawa from "@/pages/Universities/UniversityOfOttawa.tsx";

import MonashUniversity from "./pages/Universities/MonashUniversity";
import SydneyUniversity from "./pages/Universities/SydneyUniversity";


import QueenslandUniversity from "./pages/Universities/QueenslandUniversity";
import MaccuireUniversity from "./pages/Universities/MaccuireUniversiy";
import MelboureUniversity from "./pages/Universities/MelbourneUniversity";
import UniversityOfManchester from "@/pages/Universities/Manchester.tsx";
import UniversityOfEdinburgh from "@/pages/Universities/UniversityOfEdinburgh.tsx";
import KingsCollegeLondon from "@/pages/Universities/KingsCollegeLondon.tsx";
import ImperialCollegeLondon from "@/pages/Universities/ImperialCollegeLondon.tsx";
import UniversityOfToronto from "@/pages/Universities/UniversityOfToronto.tsx";
import BerlineCity from "./components/Citywise-University/BerlineCity";


function App() {
    useScrollToTop()
    return (
        <Routes>
            <Route path={"/"} element={<PublicLayout/>}>
                <Route index element={<HomePage/>}/>
                <Route path={"about"} element={<AboutPage/>}/>
                <Route path={"blog"} element={<BlogPage/>}/>
                <Route path={"/study-abroad/usa/cities/new-york"} element={<StudyAbroad/>}/>
                <Route path={"mavencave-ai"} element={<MavenCaveAi/>}/>
                <Route path={"resources/sop"} element={<SOP/>}/>
                <Route element={<IeltsBlogLayout/>}>
                    <Route path={"/exams/ielts/overview"} element={<IeltsOverviewPage/>}/>
                    <Route path={"/exams/ielts/types"} element={<IeltsTypesPage/>}/>
                    <Route path={"/exams/ielts/books"} element={<IeltsBooksPage/>}/>
                    <Route path={"/exams/ielts/eligibility"} element={<IeltsEligibilityPage/>}/>
                    <Route path={"/exams/ielts/registration"} element={<IeltsRegistrationPage/>}/>
                    <Route path={"/exams/ielts/results"} element={<IeltsResultsPage/>}/>
                    <Route path={"/exams/ielts/syllabus"} element={<IeltsSyllabus/>}/>
                    <Route path={"/exams/ielts/slot-booking"} element={<SlotBookingPage/>}/>
                    <Route path={"/resources/recommendation-letter/masters"} element={<LorMasters/>}/>
                    <Route path={"/exams/ielts/practice/listening"} element={<Listening/>}/>
                    <Route path={"/exams/ielts/practice/reading"} element={<Reading/>}/>
                    <Route path={"/exams/ielts/dates"} element={<IeltsExamDate/>}/>
                    <Route path={"/exams/ielts/fees"} element={<IeltsFees/>}/>
                    <Route path={"/exams/ielts/centers"} element={<IeltsTestCenters/>}/>
                    <Route path={"/exams/ielts/practice/speaking"} element={<Speaking/>}/>
                    <Route path={"/exams/ielts/practice/writing"} element={<Writing/>}/>
                    <Route path={"/exams/ielts/practice/all-in-one"} element={<IeltsPractice/>}/>
                    <Route path={"/exams/toefl/overview"} element={<TOEFLPage/>}/>
                    <Route path={"/exams/gre/overview"} element={<GREPage/>}/>
                    <Route path={"/exams/pte/overview"} element={<PTEPage/>}/>
                </Route>
                {/* USA */}
                <Route path="/study-abroad/usa/universities/stanford-university" element={<StanfordUniversity />} />
                <Route path="/study-abroad/usa/universities/yale-university" element={<YaleUniversity />} />
                <Route path="/study-abroad/usa/universities/columbia-university" element={<ColumbiaUniversity />} />
                <Route path="/study-abroad/usa/universities/mit" element={<MIT />} />

                {/* UK */}
                <Route path="/study-abroad/uk/universities/oxford-university" element={<OxfordUniversity />} />
                <Route path="/study-abroad/uk/universities/cambridge-university" element={<CambridgeUniversity />} />
                <Route path="/study-abroad/uk/universities/manchester-university" element={<UniversityOfManchester />} />
                <Route path="/study-abroad/uk/universities/edinburgh-university" element={<UniversityOfEdinburgh />} />
                <Route path="/study-abroad/uk/universities/kings-college-london" element={<KingsCollegeLondon />} />
                <Route path="/study-abroad/uk/universities/imperial-college-london" element={<ImperialCollegeLondon />} />

                {/* Canada */}
                <Route path="/study-abroad/canada/universities/ubc" element={<UniversityOfBritishColumbia />} />
                <Route path="/study-abroad/canada/universities/mcgill-university" element={<McGillUniversity />} />
                <Route path="/study-abroad/canada/universities/university-of-alberta" element={<UniversityOfAlberta />} />
                <Route path="/study-abroad/canada/universities/university-of-montreal" element={<UniversityOfMontreal />} />
                <Route path="/study-abroad/canada/universities/university-of-ottawa" element={<UniversityOfOttawa />} />
                <Route path="/study-abroad/canada/universities/university-of-toronto" element={<UniversityOfToronto />} />
                {/* Germany */}
                <Route path="/berline-university" element={<BerlineCity />} />

                {/* Australia */}
                <Route path="/study-abroad/australia/universities/macquarie-university" element={<MaccuireUniversity />} />
                <Route path="/study-abroad/australia/universities/monash-university" element={<MonashUniversity />} />
                <Route path="/study-abroad/australia/universities/university-of-sydney" element={<SydneyUniversity />} />
                <Route path="/study-abroad/australia/universities/university-of-melbourne" element={<MelboureUniversity />} />
                <Route path="/study-abroad/australia/universities/uq" element={<QueenslandUniversity />} />

                <Route element={<AuthLayout/>}>
                    <Route path={"/signup"} element={<SignUpPage/>}/>
                    <Route path={"/login"} element={<LoginPage/>}/>
                </Route>
                <Route path={"/visa-predictor"} element={<VisaPredictor/>}/>
                <Route path={"/resources/books/ielts"} element={<CueCardPage/>}/>
                <Route path={"/exams/overview"} element={<ExamsPage/>}/>
                <Route path={"/resources/sop/phd"} element={<SOPPhD/>}/>
                <Route path={"/study-abroad/usa/universities/harvard-university"} element={<HarvardReact/>}/>
                <Route path={"/careers"} element={<Careers/>}/>
                <Route path={"/knowledge-center"} element={<KnowledgeCenter/>}/>
                <Route path={"/mavencave-advantage"} element={<MavencaveAdvantage/>}/>
                <Route path={"/mavencave-freeClass"} element={<MavencaveFreeClass/>}/>
                <Route path={"/ielts-resources"} element={<PracticeResources/>}/>
                <Route path={"/cost"} element={<CostPage/>}/>
                <Route path={"/finance"} element={<FinancePage/>}/>
                <Route path={"/mavencave-digest"} element={<DigestPage/>}/>
                <Route path={"/us-masters"} element={<USAMastersPage/>}/>
                <Route path={"/counsellor"} element={<CounsellorPage/>}/>
            </Route>
        </Routes>
    )
}

export default App