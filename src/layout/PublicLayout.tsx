import {Outlet} from "react-router";
import Navbar from "@/components/navbar.tsx";

export default function PublicLayout() {
    return (
        <>
            <Navbar/>
            <Outlet/>
            nav
        </>
    )
}