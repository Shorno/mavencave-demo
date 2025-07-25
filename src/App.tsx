import {Route, Routes} from "react-router";
import PublicLayout from "@/layout/PublicLayout.tsx";
import HomePage from "@/pages/HomePage.tsx";
import AboutPage from "@/pages/About.tsx";
import BlogPage from "@/pages/Blogs.tsx";
import StudyAbroad from "@/pages/StudyAbroad.tsx";
import MavenCaveAi from "@/pages/MavenCaveAi.tsx";
import SOP from "@/pages/SOP.tsx";
import VisaPredictor from "@/pages/VisaPredictor.tsx";
import IeltsListening from "@/pages/IeltsListening.tsx";
import ReadingTestStyled from "@/pages/IeltsReading.tsx";
import IeltsWriting from "@/pages/IeltsWriting.tsx";
import IeltsSpeaking from "@/pages/IeltsSpeaking.tsx";

function App() {
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
                <Route path={"/visa-predictor"} element={<VisaPredictor/>}/>
                <Route path={"contact"} element={<div>Contact</div>}/>
            </Route>
        </Routes>
    )
}

export default App