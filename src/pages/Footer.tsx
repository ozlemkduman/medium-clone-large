import { NavLink } from "react-router-dom"
import { useMainContext } from "../contextApi/MainContext"

const Footer = () => {

    const { location,userName } = useMainContext()

    return (
        <>
            {location.pathname == "/"  ?
                <>
                    {!userName?
                    <>
                    <div className="hidden lg:flex w-full fixed bottom-0 border-t justify-left ps-[30%] bg-[#F6F4ED] h-[8%]  py-6 gap-6 text-[13px] font-light text-[#E3E3E3] lg:text-gray-600 " >
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
                    <div className="flex fixed bottom-0 w-full lg:hidden justify-center ps-6 bg-black lg:bg-[#F6F4ED] h-[8%]  py-6 gap-6 text-[13px] font-light text-[#E3E3E3] lg:text-gray-600 " >
                        <NavLink to={"/about"}>About</NavLink>
                        <NavLink to={"/help"}>Help</NavLink>
                        <NavLink to={"/terms"}>Terms</NavLink>
                        <NavLink to={"/privacy"}>Privacy</NavLink>
                    </div>
                    </>
                    :
                    <>
                    </>
                    }
                </>
                : 
                <div className=" flex flex-col lg:flex-row lg:justify-between items-center bg-white px-5 py-5 gap-2 lg:gap-6 text-[13px] font-light text-[#242424] " >
                    <div className=" font-serif text-3xl tracking-tight font-inherit cursor-pointer"><NavLink to="/">Large</NavLink></div>
                    <div className="flex gap-3 text-xs underline">
                        <NavLink to={"/about"}>About</NavLink>
                        <NavLink to={"#"}>Terms</NavLink>
                        <NavLink to={"#"}>Privacy</NavLink>
                        <NavLink to={"#"}>Help</NavLink>
                        <NavLink to={"#"}>Teams</NavLink>
                        <NavLink to={"#"}>Press</NavLink>
                    </div>
                </div>
            }
        </>

    )
}
export default Footer