import {Outlet} from "react-router";
import Navbar from "@/components/navbar.tsx";

export default function PublicLayout() {
    return (
        <>
            <Navbar/>
            <div className={"my-20"}>
                <Outlet/>
            </div>
        </>
    )
}