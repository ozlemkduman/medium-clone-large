import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Membership from "./pages/Membership"

const SiteRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/membership" element={<Membership />} />

            </Routes>
        </>
    )
}

export default SiteRoutes