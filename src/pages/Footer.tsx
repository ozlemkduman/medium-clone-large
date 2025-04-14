import { NavLink } from "react-router-dom"
import { useMainContext } from "../contextApi/MainContext"

const Footer = () => {

    const { location } = useMainContext()

    return (
        <>
            {location.pathname == "/" ?
                <div className=" flex justify-left ps-[30%] bg-[#F6F4ED] h-[8%]  py-6 gap-6 text-[13px] font-light text-gray-600 " >
                    <NavLink to={"/help"}>Help</NavLink>
                    <NavLink to={"/status"}>Status</NavLink>
                    <NavLink to={"/about"}>About</NavLink>
                    <NavLink to={"/careers"}>Careers</NavLink>
                    <NavLink to={"/press"}>Press</NavLink>
                    <NavLink to={"/blog"}>Blog</NavLink>
                    <NavLink to={"/privacy"}>Privacy</NavLink>
                    <NavLink to={"/rules"}>Rules</NavLink>
                    <NavLink to={"/terms"}>Terms</NavLink>
                    <NavLink to={"text"}>Text</NavLink>
                </div>
                :
                <div className=" flex justify-between items-center bg-white px-5 py-5 gap-6 text-[13px] font-light text-[#242424] " >
                    <div className=" font-serif text-3xl tracking-tight font-inherit cursor-pointer"><NavLink to="/">Large</NavLink></div>
                    <div className="flex gap-3 text-xs underline">
                        <NavLink to={"/about"}>About</NavLink>
                        <NavLink to={"/terms"}>Terms</NavLink>
                        <NavLink to={"/privacy"}>Privacy</NavLink>
                        <NavLink to={"/help"}>Help</NavLink>
                        <NavLink to={"/teams"}>Teams</NavLink>
                        <NavLink to={"/press"}>Press</NavLink>
                    </div>
                </div>
            }
        </>

    )
}
export default Footer