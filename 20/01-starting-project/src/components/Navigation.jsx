import { Link } from "react-router-dom"

const Navigation = () => {
    return <>
        <header>
            <nav>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/products"}>Products</Link>
                </li>
            </nav>
        </header>
    </>
}

export default Navigation