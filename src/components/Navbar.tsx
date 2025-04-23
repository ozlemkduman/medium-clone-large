import { NavLink } from "react-router-dom"
import { useMainContext } from "../contextApi/MainContext"
import "../App.css" 
const Navbar = () => {

    const { location } = useMainContext()
    const { setIsModalSigninOpen,setIsModalSignupOpen } = useMainContext();


    return (
        <>
            {location.pathname == "/" ?
                <nav className="flex bg-[#f7f4ed] justify-center border-b-1 h-20  w-screen  md:px-0 py-5 z-20 top-0 left-0 fixed">
                    <div className="w-full px-5 md:px-0  flex justify-between md:w-9/12 ">
                        <div className=" font-[georgia]  text-4xl tracking-tight font-normal cursor-pointer"><NavLink to="/">Large</NavLink></div>
                        <div className="menu font-sans flex gap-6 items-center font-light text-sm ">
                            <div className="cursor-pointer hidden lg:flex"><NavLink to="/about">Our story</NavLink></div>
                            <div className="cursor-pointer hidden lg:flex"><NavLink to="/membership">Membership</NavLink></div>
                            <div onClick={()=>setIsModalSigninOpen(true)} className="cursor-pointer hidden lg:flex"><NavLink to="">Write</NavLink></div>
                            <div onClick={()=>setIsModalSigninOpen(true)} className="cursor-pointer hidden lg:flex">Sign In</div>
                            <div onClick={()=>setIsModalSignupOpen(true)} className="" >
                                <button className="bg-black rounded-3xl text-white px-4 py-3 cursor-pointer">Get started</button>
                            </div>
                        </div>
                    </div>
                    
                </nav>
                : location.pathname == "/about" ?
                    <nav className="flex bg-[#242424] justify-center border-b-1 h-20  border-[#B3B3B3] w-full md:px-10 py-5">
                        <div className="flex justify-between w-1/1 px-5 md:px-0 gap-3 md:gap-0">
                            <div className="font-[georgia] text-4xl tracking-tight font-normal cursor-pointer text-[#FFFFFF]"><NavLink to="/">Large</NavLink></div>
                            <div className="menu font-sans flex gap-2 md:gap-6 items-center font-light text-sm ">
                                <div onClick={()=>setIsModalSigninOpen(true)}>
                                        <button className="bg-[#242424] border-1 border-[#EAEAEA] rounded-3xl text-white px-4 py-2 md:py-3 cursor-pointer">Sign in</button>
                                </div>
                                <div onClick={()=>setIsModalSignupOpen(true)}>
                                        <button className="bg-[#EAEAEA] rounded-3xl text-black px-4 py-2 md:py-3 cursor-pointer">Sign up</button>
                                </div>
                            </div>
                        </div>
                    </nav>
                    : location.pathname == "/membership" ?
                        <nav className="fixed z-20 top-0 left-0 border-b-1 bg-[#FFFFFF] h-20  w-full ps-6 pe-10  py-5">
                            <div className="flex  justify-between ">
                                <div className="font-[georgia] text-4xl tracking-tight font-normal cursor-pointer"><NavLink to="/">Large</NavLink></div>
                                <div className="menu font-sans flex gap-4 items-center font-light text-sm ">
                                    <div onClick={()=>setIsModalSigninOpen(true)} className="cursor-pointer">
                                        <button className="bg-[#FFFFFF] border-1 border-[#242424]  rounded-3xl text-black px-3.5 py-2.5 cursor-pointer">Sign in</button>
                                    </div>
                                    <div onClick={()=>setIsModalSignupOpen(true)} className="cursor-pointer">
                                        <button className="bg-[#242424] border-white rounded-3xl text-white px-3.5 py-2.5 ">Sign up</button>
                                    </div>
                                </div>
                            </div>
                        </nav>
                        :
                        <nav className="flex justify-between w-9/12 ">
                            <div className=" ">
                                <div className="font-[georgia] text-4xl tracking-tight h-20  font-normal cursor-pointer"><NavLink to="/">Large</NavLink></div>
                                <div className="menu font-sans flex gap-6 items-center font-light text-sm ">
                                    <div onClick={()=>setIsModalSigninOpen(true)} className="cursor-pointer">
                                            <button className="bg-[#242424] border-white rounded-3xl text-white px-4 py-3 ">Sign in</button>
                                    </div>
                                    <div onClick={()=>setIsModalSignupOpen(true)} className="cursor-pointer">
                                            <button className="bg-[#FFFFFF] border-1 border-[#242424]  rounded-3xl text-black px-4 py-3 cursor-pointer">Sign up</button>
                                    </div>
                                </div>
                            </div>
                        </nav>
            }
        </>
    )
}
export default Navbar