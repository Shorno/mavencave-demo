import {Route, Routes} from "react-router";
import PublicLayout from "@/layout/PublicLayout.tsx";
import HomePage from "@/pages/HomePage.tsx";
import AboutPage from "@/pages/About.tsx";
import BlogPage from "@/pages/Blogs.tsx";
import StudyAbroad from "@/pages/StudyAbroad.tsx";
import MavenCaveAi from "@/pages/MavenCaveAi.tsx";
import SOP from "@/pages/SOP/SOP.tsx";
import VisaPredictor from "@/pages/VisaPredictor.tsx";

function App() {
    return (
        <Routes>
            <Route path={"/"} element={<PublicLayout/>}>
                <Route index element={<HomePage/>}/>
                <Route path={"about"} element={<AboutPage/>}/>
                <Route path={"blog"} element={<BlogPage/>}/>
                <Route path={"study-abroad"} element={<StudyAbroad/>}/>
                <Route path={"mavencave-ai"} element={<MavenCaveAi/>}/>
                <Route path={"resources/sop"} element={<SOP/>}/>
                <Route path={"/visa-predictor"} element={<VisaPredictor/>}/>
                <Route path={"contact"} element={<div>Contact</div>}/>
            </Route>
        </Routes>
    )
}

export default App