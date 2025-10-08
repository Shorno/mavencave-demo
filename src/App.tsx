import {Route, Routes} from "react-router";
import PublicLayout from "./layout/PublicLayout";
import {
    AboutPage,
    BlogPage,
    HomePage,
    IeltsBooksPage,
    ExamsPage,
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
    KnowledgeCenter,
    MavencaveAdvantage,
    MavencaveFreeClass,
    IeltsExamDate,
    IeltsPractice,
    IeltsFees,
    IeltsTestCenters,
    Speaking,
    PracticeResources,
    Writing,
    StanfordUniversity,
    YaleUniversity,
    OxfordUniversity,
    CambridgeUniversity,
    MIT,
    CostPage,
    FinancePage,
    TOEFLPage,
    GREPage,
    PTEPage,
    ColumbiaUniversity,
    DigestPage,
    CounsellorPage,
    UniversityOfBritishColumbia,
    McGillUniversity,
    UniversityOfAlberta,
    UniversityOfMontreal,
    UniversityOfOttawa,
    MonashUniversity,
    SydneyUniversity,
    QueenslandUniversity,
    MaccuireUniversity,
    MelboureUniversity,
    UniversityOfManchester,
    UniversityOfEdinburgh,
    KingsCollegeLondon,
    ImperialCollegeLondon,
    UniversityOfToronto,
    
} from "@/pages";
import useScrollToTop from "@/hooks/useScrollToTop.tsx";
import TopUniversities from "@/layout/TopUniversities.tsx";
import MastersTopCourses from "@/layout/MastersTopCourses.tsx";
import EventPage from "./components/EventPage/EventPage";
import GreBooks from "@/components/gre_books/GreBooks";
import DuolingoFees from "./components/Duolingo/DuolingFees";
import DuolingoGuidePage from "./components/Duolingo/DuolingoGuidePage";
import SampleQuestionPage from "./components/Duolingo/SampleQuestionPage";
import DuolingoSyllabusPage from "./components/Duolingo/DuolingoSyllabusPage";
import ToeflPrep from "@/components/TOEFL_pages/ToeflPrep";
import ToeflRegistration from "@/components/TOEFL_pages/ToeflRegistration";
import ToeflResult from "@/components/TOEFL_pages/ToeflResult";
import ToeflSyllabus from "@/components/TOEFL_pages/ToeflSyllabus";
import GmatOverviewPage from "./components/GMAT/GmatOverviewPage";
import GmatPrepPage from "./components/GMAT/GmatPrepPage";
import GmatRegistrationPage from "./components/GMAT/GmatRegistrationPage";
import GmatSampleQuesPage from "./components/GMAT/GmatSampleQuesPage";
import GmatSyllabusPage from "./components/GMAT/GmatSyllabusPage";


function App() {
    useScrollToTop()
    return (
        <Routes>
            <Route path={"/"} element={<PublicLayout/>}>
                <Route index element={<HomePage/>}/>
                <Route path={"about"} element={<AboutPage/>}/>
                <Route path={"blog"} element={<BlogPage/>}/>
                {/*<Route path={"/study-abroad/usa/cities/new-york"} element={<StudyAbroad/>}/>*/}
                <Route path={"/study-abroad/:country/cities/:city"} element={<TopUniversities/>}/>
                <Route path={"study-abroad/:country/courses/:course"} element={<MastersTopCourses/>}/>
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
                    {/* Duolingo */}
                      <Route path={"/exams/duolingo/fees"} element={<DuolingoFees/>}/>
                      <Route path={"/exams/duolingo/preparation"} element={<DuolingoGuidePage/>}/>
                      <Route path={"/exams/duolingo/sample"} element={<SampleQuestionPage/>}/>
                      <Route path={"/exams/duolingo/syllabus"} element={<DuolingoSyllabusPage/>}/>
                      {/* GMAT */}
                      <Route path={"/exams/gmat/overview"} element={<GmatOverviewPage/>}/>
                      <Route path={"/exams/gmat/preparation"} element={<GmatPrepPage/>}/>
                      <Route path={"/exams/gmat/registration"} element={<GmatRegistrationPage/>}/>
                      <Route path={"/exams/gmat/sample-question"} element={<GmatSampleQuesPage/>}/>
                      <Route path={"/exams/gmat/syllabus"} element={<GmatSyllabusPage/>}/>
                </Route>
                {/* USA */}
                <Route path="/study-abroad/usa/universities/stanford-university" element={<StanfordUniversity/>}/>
                <Route path="/study-abroad/usa/universities/yale-university" element={<YaleUniversity/>}/>
                <Route path="/study-abroad/usa/universities/columbia-university" element={<ColumbiaUniversity/>}/>
                <Route path="/study-abroad/usa/universities/mit" element={<MIT/>}/>

                {/* UK */}
                <Route path="/study-abroad/uk/universities/oxford-university" element={<OxfordUniversity/>}/>
                <Route path="/study-abroad/uk/universities/cambridge-university" element={<CambridgeUniversity/>}/>
                <Route path="/study-abroad/uk/universities/manchester-university" element={<UniversityOfManchester/>}/>
                <Route path="/study-abroad/uk/universities/edinburgh-university" element={<UniversityOfEdinburgh/>}/>
                <Route path="/study-abroad/uk/universities/kings-college-london" element={<KingsCollegeLondon/>}/>
                <Route path="/study-abroad/uk/universities/imperial-college-london" element={<ImperialCollegeLondon/>}/>

                {/* Canada */}
                <Route path="/study-abroad/canada/universities/ubc" element={<UniversityOfBritishColumbia/>}/>
                <Route path="/study-abroad/canada/universities/mcgill-university" element={<McGillUniversity/>}/>
                <Route path="/study-abroad/canada/universities/university-of-alberta" element={<UniversityOfAlberta/>}/>
                <Route path="/study-abroad/canada/universities/university-of-montreal"
                       element={<UniversityOfMontreal/>}/>
                <Route path="/study-abroad/canada/universities/university-of-ottawa" element={<UniversityOfOttawa/>}/>
                <Route path="/study-abroad/canada/universities/university-of-toronto" element={<UniversityOfToronto/>}/>

                {/* Australia */}
                <Route path="/study-abroad/australia/universities/macquarie-university"
                       element={<MaccuireUniversity/>}/>
                <Route path="/study-abroad/australia/universities/monash-university" element={<MonashUniversity/>}/>
                <Route path="/study-abroad/australia/universities/university-of-sydney" element={<SydneyUniversity/>}/>
                <Route path="/study-abroad/australia/universities/university-of-melbourne"
                       element={<MelboureUniversity/>}/>
                <Route path="/study-abroad/australia/universities/uq" element={<QueenslandUniversity/>}/>

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
                <Route path={"/products/facilities"} element={<MavencaveAdvantage/>}/>
                <Route path={"/mavencave-freeClass"} element={<MavencaveFreeClass/>}/>
                <Route path={"/ielts-resources"} element={<PracticeResources/>}/>
                <Route path={"/calculator/cost"} element={<CostPage/>}/>
                <Route path={"/products/finance"} element={<FinancePage/>}/>
                <Route path={"/mavencave-digest"} element={<DigestPage/>}/>
                <Route path={"/testimonials/counseling"} element={<CounsellorPage/>}/>
                <Route path={"/event"} element={<EventPage/>}/>
                <Route path={"/gre/books"} element={<GreBooks/>}/>
                <Route path={"/exams/toefl/registration"} element={<ToeflRegistration/>}/>
                <Route path={"/exams/toefl/syllabus"} element={<ToeflSyllabus/>}/>
                <Route path={"/exams/toefl/preparation"} element={<ToeflPrep/>}/>
                <Route path={"/exams/toefl/result"} element={<ToeflResult/>}/>
            </Route>
        </Routes>
    )
}

export default App