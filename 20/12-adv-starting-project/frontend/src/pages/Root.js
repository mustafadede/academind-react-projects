import MainNavigation from "../components/MainNavigation";
import { Outlet } from "react-router-dom";
const Root = () => {
    // const navigation = useNavigation()
    return <>
        <MainNavigation />
        {/* {navigation.state === "loading" && <p>Loading...</p>} */}
        <Outlet />
    </>
}

export default Root