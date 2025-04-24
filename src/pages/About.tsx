import { useNavigate } from 'react-router-dom';
import ModalSignin from '../components/ModalSignin';
import ModalSignup from '../components/ModalSignup';
import { useMainContext } from '../contextApi/MainContext';
const About = () => {
    const { isModalSigninOpen, setIsModalSigninOpen, isModalSignupOpen, setIsModalSignupOpen } = useMainContext();
    const navigate = useNavigate()
    return (
        <>
            <ModalSignin isOpen={isModalSigninOpen} onClose={() => setIsModalSigninOpen(false)} />
            <ModalSignup isOpen={isModalSignupOpen} onClose={() => setIsModalSignupOpen(false)} />
            <div className="flex flex-col w-full h-min-screen items-start bg-[#242424] text-[#FFFFFF] font-[cambria,georgia] pt-20 px-5  lg:pt-30 pb-30 lg:px-12 ">
                <div className="font-[cambria] text-[48px] lg:text-[85px] lg:w-1/3 text-left text-[400] lg:tracking-[-4px]">Everyone has a story to tell</div>
                <div className="font-[cambria] text-[21px]/[32px] lg:w-[40%] text-left font-light mt-10 lg:mt-20 tracking-[-0.003em]">Medium is a home for human stories and ideas. Here, anyone can share knowledge and wisdom with the world—without having to build a mailing list or a following first. The internet is noisy and chaotic; Medium is quiet yet full of insight. It’s simple, beautiful, collaborative, and helps you find the right readers for whatever you have to say.</div>
                <div className="lg:w-[45%] text-left text-3xl mt-10 ">
                    <span className="bg-[#505050] font-light">Ultimately, our goal is to deepen our collective understanding of the world through the power of writing.</span>
                </div>
                <div className="font-[cambria] lg:w-[45%] text-left text-[21px]/[32px] mt-10 font-[400]">We believe that what you read and write matters. Words can divide or empower us, inspire or discourage us. In a world where the most sensational and surface-level stories often win, we’re building a system that rewards depth, nuance, and time well spent. A space for thoughtful conversation more than drive-by takes, and substance over packaging. </div>
                <div className="font-[cambria] lg:w-[45%] text-left text-[21px]/[32px]  font-[400] my-5">  Over 100 million people connect and share their wisdom on Medium every month. They’re software developers, amateur novelists, product designers, CEOs, and anyone burning with a story they need to get out into the world. They write about what they’re working on, what’s keeping them up at night, what they’ve lived through, and what they’ve learned that the rest of us might want to know too. </div>
                <div className="font-[cambria] lg:w-[45%] text-left text-[21px]/[32px] font-[400]">Instead of selling ads or selling your data, we’re supported by a growing community of over a million Medium members who believe in our mission. If you’re new here, start reading. Dive deeper into whatever matters to you. Find a post that helps you learn something new, or reconsider something familiar—and then write your story.</div>
            </div>
            <div className="w-full bg-[#242424] text-white font-[cambria] ">
                <div onClick={() => setIsModalSignupOpen(true)} className=" flex justify-between  w-full border-t-1 border-[#B3B3B3] text-[32px] lg:text-[70px] py-10 text-left cursor-pointer  px-5 lg:px-10 hover:bg-[#FFFFFF] hover:text-black transition-all duration-700">Start reading <span >→</span></div>
                <div onClick={() => setIsModalSigninOpen(true)} className="flex justify-between  w-full border-t-1 border-[#B3B3B3]  text-[32px] lg:text-[70px] py-10 text-left  cursor-pointer px-5 lg:px-10 hover:bg-[#FFFFFF] hover:text-black transition-all duration-700">Start writing <span>→</span></div>
                <div onClick={() => navigate("/membership")} className="flex justify-between  w-full border-t-1 border-[#B3B3B3]  text-[32px] lg:text-[70px] py-10 text-left  cursor-pointer px-5 lg:px-10 hover:bg-[#FFFFFF] hover:text-black transition-all duration-700">Become a member <span>→</span></div>
            </div>
        </>
    )
}
export default About