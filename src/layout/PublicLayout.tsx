import {Outlet} from "react-router";
import Navbar from "@/components/navbar.tsx";
import Footer from "@/components/footer.tsx";

export default function PublicLayout() {
    return (
        <>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>
    )
}