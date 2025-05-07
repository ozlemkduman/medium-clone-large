import { NavLink } from "react-router-dom"
import { useMainContext } from "../contextApi/MainContext"
import "../App.css"
const Navbar = () => {

    const { location } = useMainContext()
    const { setIsModalSigninOpen, setIsModalSignupOpen } = useMainContext();
    const { userName } = useMainContext()

    return (
        <>
            {location.pathname == "/" ?
                !userName ?
                    <nav className="flex bg-[#f7f4ed] justify-center border-b-1 h-20  w-screen  lg:px-0 py-5 z-20 top-0 left-0 fixed">
                        <div className="w-full px-5 lg:px-0  flex justify-between lg:w-9/12 ">
                            <div className=" font-[georgia]  text-4xl tracking-tight font-normal cursor-pointer"><NavLink to="/">Large</NavLink></div>
                            <div className="menu font-sans flex gap-6 items-center font-light text-sm ">
                                <div className="cursor-pointer hidden lg:flex"><NavLink to="/about">Our story</NavLink></div>
                                <div className="cursor-pointer hidden lg:flex"><NavLink to="/membership">Membership</NavLink></div>
                                <div onClick={() => setIsModalSigninOpen(true)} className="cursor-pointer hidden lg:flex"><NavLink to="">Write</NavLink></div>
                                <div onClick={() => setIsModalSigninOpen(true)} className="cursor-pointer hidden lg:flex">Sign In</div>
                                <div onClick={() => setIsModalSignupOpen(true)} className="" >
                                    <button className="bg-black rounded-3xl text-white px-4 py-3 cursor-pointer">Get started</button>
                                </div>
                            </div>
                        </div>
                    </nav>
                    :
                    /* user varsa */
                    <nav className="flex bg-[#fff] lg:justify-between border-b border-gray-200 h-fit py-2  lg:w-screen   lg:px-0  items-center">
                        <div className="w-full px-5 lg:px-0  flex lg:justify-start justify-between items-center gap-5 lg:w-9/12  ">
                            <div className=" font-[georgia] lg:ps-5 text-4xl tracking-tight font-normal cursor-pointer items-center"><NavLink to="/">Large</NavLink></div>
                            <div className="relative hidden lg:w-4/12 rounded-full bg-stone-50 lg:flex px-2 py-2 items-center inset-shadow-2xs">
                                <div className="absolute  left-2 top-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-500" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path fill="currentColor" fill-rule="evenodd" d="M4.092 11.06a6.95 6.95 0 1 1 13.9 0 6.95 6.95 0 0 1-13.9 0m6.95-8.05a8.05 8.05 0 1 0 5.13 14.26l3.75 3.75a.56.56 0 1 0 .79-.79l-3.73-3.73A8.05 8.05 0 0 0 11.042 3z" clip-rule="evenodd">
                                        </path>
                                    </svg>
                                </div>
                                <input type="text"
                                />
                            </div>
                            <div className="lg:hidden absolute  left-42 top-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-500" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path fill="currentColor" fill-rule="evenodd" d="M4.092 11.06a6.95 6.95 0 1 1 13.9 0 6.95 6.95 0 0 1-13.9 0m6.95-8.05a8.05 8.05 0 1 0 5.13 14.26l3.75 3.75a.56.56 0 1 0 .79-.79l-3.73-3.73A8.05 8.05 0 0 0 11.042 3z" clip-rule="evenodd">
                                    </path>
                                </svg>
                            </div>
                        </div>
                        <div className="lg:pe-5 pe-5 flex gap-7 lg:gap-8 text-gray-500 items-center justify-center lg:justify-end cursor-pointer w-full">
                            <div className="hidden lg:flex gap-2 items-center  text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" aria-label="Write"><path fill="currentColor" d="M14 4a.5.5 0 0 0 0-1zm7 6a.5.5 0 0 0-1 0zm-7-7H4v1h10zM3 4v16h1V4zm1 17h16v-1H4zm17-1V10h-1v10zm-1 1a1 1 0 0 0 1-1h-1zM3 20a1 1 0 0 0 1 1v-1zM4 3a1 1 0 0 0-1 1h1z"></path><path stroke="currentColor" d="m17.5 4.5-8.458 8.458a.25.25 0 0 0-.06.098l-.824 2.47a.25.25 0 0 0 .316.316l2.47-.823a.25.25 0 0 0 .098-.06L19.5 6.5m-2-2 2.323-2.323a.25.25 0 0 1 .354 0l1.646 1.646a.25.25 0 0 1 0 .354L19.5 6.5m-2-2 2 2"></path></svg>
                                Write
                            </div>
                            <div className="me-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" aria-label="Notifications"><path stroke="currentColor" stroke-linecap="round" d="M15 18.5a3 3 0 1 1-6 0"></path><path stroke="currentColor" stroke-linejoin="round" d="M5.5 10.532V9a6.5 6.5 0 0 1 13 0v1.532c0 1.42.564 2.782 1.568 3.786l.032.032c.256.256.4.604.4.966v2.934a.25.25 0 0 1-.25.25H3.75a.25.25 0 0 1-.25-.25v-2.934c0-.363.144-.71.4-.966l.032-.032A5.35 5.35 0 0 0 5.5 10.532Z"></path></svg>
                            </div>
                            <div className="w-8 h-8 rounded-full">
                                <img src="../public/assets/right-3.png" className="w-full h-full rounded-full" alt="" />
                            </div>
                        </div>
                    </nav>

                : location.pathname == "/about" ?
                    <nav className="flex bg-[#242424] justify-center border-b-1 h-20  border-[#B3B3B3] w-full lg:px-10 py-5">
                        <div className="flex justify-between w-1/1 px-5 lg:px-0 gap-3 lg:gap-0">
                            <div className="font-[georgia] text-4xl tracking-tight font-normal cursor-pointer text-[#FFFFFF]"><NavLink to="/">Large</NavLink></div>
                            <div className="menu font-sans flex gap-2 lg:gap-6 items-center font-light text-sm ">
                                <div onClick={() => setIsModalSigninOpen(true)}>
                                    <button className="bg-[#242424] border-1 border-[#EAEAEA] rounded-3xl text-white px-4 py-2 lg:py-3 cursor-pointer">Sign in</button>
                                </div>
                                <div onClick={() => setIsModalSignupOpen(true)}>
                                    <button className="bg-[#EAEAEA] rounded-3xl text-black px-4 py-2 lg:py-3 cursor-pointer">Sign up</button>
                                </div>
                            </div>
                        </div>
                    </nav>
                    : location.pathname == "/membership" ?
                        <nav className="fixed z-20 top-0 left-0 border-b-1 bg-[#FFFFFF] h-20  w-full px-6 lg:pe-10  py-5">
                            <div className="flex  justify-between ">
                                <div className="font-[georgia] text-4xl tracking-tight font-normal cursor-pointer"><NavLink to="/">Large</NavLink></div>
                                <div className="menu font-sans flex gap-2 lg:gap-4 items-center font-light text-sm ">
                                    <div onClick={() => setIsModalSigninOpen(true)} className="cursor-pointer">
                                        <button className="bg-[#FFFFFF] border-1 border-[#242424]  rounded-3xl text-black px-3.5 py-2.5 cursor-pointer">Sign in</button>
                                    </div>
                                    <div onClick={() => setIsModalSignupOpen(true)} className="cursor-pointer">
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
                                    <div onClick={() => setIsModalSigninOpen(true)} className="cursor-pointer">
                                        <button className="bg-[#242424] border-white rounded-3xl text-white px-4 py-3 ">Sign in</button>
                                    </div>
                                    <div onClick={() => setIsModalSignupOpen(true)} className="cursor-pointer">
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