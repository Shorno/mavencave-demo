import {Route, Routes} from "react-router";
import PublicLayout from "@/layout/PublicLayout.tsx";
import HomePage from "@/pages/HomePage.tsx";
import AboutPage from "@/pages/About.tsx";

function App() {
    return (
        <Routes>
            <Route path={"/"} element={<PublicLayout/>}>
                <Route index element={<HomePage/>}/>
                <Route path={"about"} element={<AboutPage/>}/>
                <Route path={"contact"} element={<div>Contact</div>}/>
            </Route>
        </Routes>
    )
}

export default App