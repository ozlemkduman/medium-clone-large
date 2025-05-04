import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Membership from "./pages/Membership"
import HomeWithUser from "./pages/HomeWithUser"

const SiteRoutes = () => {
    return (
        <div className="">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/" element={<HomeWithUser />} />
                <Route path="/about" element={<About />} />
                <Route path="/membership" element={<Membership />} />
            </Routes>
        </div>
    )
}

export default SiteRoutes