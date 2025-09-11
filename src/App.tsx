import {Route, Routes} from "react-router";
import PublicLayout from "./layout/PublicLayout";
import {
    AboutPage,
    BlogPage,
    HomePage,
    IeltsBooksPage,
    ExamsPage,
    IeltsWriting,
    IeltsListening,
    StudyAbroad,
    MavenCaveAi,
    SOP,
    ReadingTestStyled,
    IeltsSpeaking,
    VisaPredictor,
    IeltsOverviewPage,
    IeltsTypesPage,
    IeltsBlogLayout, IeltsEligibilityPage, IeltsResultsPage, IeltsRegistrationPage, IeltsSyllabus, SlotBookingPage,
    HarvardReact, LorMasters, AuthLayout, SignUpPage, LoginPage, CueCardPage, SOPPhD,
} from "@/pages";
import useScrollToTop from "@/hooks/useScrollToTop.tsx";
import Careers from "./pages/Careers";
import KnowledgeCenter from "./components/KnoledgeCenter/KnowledgeCenter.tsx";
import MavencaveAdvantage from "./components/MavencaveAdvantage/MavencaveAdvantage";
import MavencaveFreeClass from "./components/MavencaveFreeClass/MavencaveFreeClass";
import Listening from "./components/ielts/Listening/Listening.tsx";
import Reading from "./components/ielts/Reading/Reading.tsx";


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
                <Route path={"/exams/ielts/practice/listening"} element={<IeltsListening/>}/>
                <Route path={"/exams/ielts/practice/reading"} element={<ReadingTestStyled/>}/>
                <Route path={"/exams/ielts/practice/writing"} element={<IeltsWriting/>}/>
                <Route path={"/exams/ielts/practice/speaking"} element={<IeltsSpeaking/>}/>
                <Route element={<IeltsBlogLayout/>}>
                    <Route path={"/exams/ielts/overview"} element={<IeltsOverviewPage/>}/>
                    <Route path={"/exams/ielts/types"} element={<IeltsTypesPage/>}/>
                    <Route path={"/exams/ielts/books"} element={<IeltsBooksPage/>}/>
                    <Route path={"/exams/ielts/eligibility"} element={<IeltsEligibilityPage/>}/>
                    <Route path={"/exams/ielts/registration"} element={<IeltsRegistrationPage/>}/>
                    <Route path={"/exams/ielts/results"} element={<IeltsResultsPage/>}/>
                    <Route path={"/exams/ielts/syllabus"} element={<IeltsSyllabus/>}/>
                    <Route path={"/exams/ielts/slot-booking"} element={<SlotBookingPage/>}/>
                    <Route path={"/lor-masters"} element={<LorMasters/>}/>
                    <Route path={"/listening-practice"} element={<Listening/>}/>
                    <Route path={"/reading-practice"} element={<Reading/>}/>
                </Route>
                <Route element={<AuthLayout/>}>
                    <Route path={"/signup"} element={<SignUpPage/>}/>
                    <Route path={"/login"} element={<LoginPage/>}/>
                </Route>
                <Route path={"/visa-predictor"} element={<VisaPredictor/>}/>
                <Route path={"/cue-card"} element={<CueCardPage/>}/>
                <Route path={"/exams"} element={<ExamsPage/>}/>
                <Route path={"/sop-phd"} element={<SOPPhD/>}/>
                <Route path={"/harvard-react"} element={<HarvardReact/>}/>

                {/*bristy*/}
                <Route path={"/careers"} element={<Careers/>}/>
                <Route path={"/knowledge-center"} element={<KnowledgeCenter/>}/>
                <Route path={"/mavencave-advantage"} element={<MavencaveAdvantage/>}/>
                <Route path={"/mavencave-freeClass"} element={<MavencaveFreeClass/>}/>
            </Route>
        </Routes>
    )
}

export default App