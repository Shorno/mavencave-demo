import {Outlet} from "react-router";

export default function AuthLayout() {
    return (

        <div
            className="min-h-screen bg-[url('/cover/login_bg.jpg')] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center px-4">
            <Outlet/>
        </div>

    )
}