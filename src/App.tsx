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
    IeltsBlogLayout, IeltsEligibilityPage, IeltsResultsPage, IeltsRegistrationPage, IeltsSyllabus, SlotBookingPage
} from "@/pages";
import useScrollToTop from "@/hooks/useScrollToTop.tsx";


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
                    {/*these */}
                </Route>
                <Route path={"/visa-predictor"} element={<VisaPredictor/>}/>
                <Route path={"/exams"} element={<ExamsPage/>}/>
                <Route path={"contact"} element={<div>Contact</div>}/>
            </Route>
        </Routes>
    )
}

export default App