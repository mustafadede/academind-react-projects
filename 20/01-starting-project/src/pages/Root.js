import { Outlet } from "react-router-dom"
import Navigation from "../components/Navigation"

const Root = () => {
    return <>
        <Navigation />
        <Outlet />
    </>
}

export default Root