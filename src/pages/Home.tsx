import { useEffect } from 'react';
import ModalSignin from '../components/ModalSignin';
import ModalSignup from '../components/ModalSignup';
import { useMainContext } from '../contextApi/MainContext';
import HomeWithUser from './HomeWithUser';


const Home = () => {
    const { isModalSigninOpen, setIsModalSigninOpen,
        isModalSignupOpen, setIsModalSignupOpen, userName } = useMainContext();

    useEffect(() => {
        if (userName) {
            setIsModalSigninOpen(false)
            setIsModalSignupOpen(false)
        }
    }, [userName])

    return (
        <>
            <ModalSignin isOpen={isModalSigninOpen} onClose={() => setIsModalSigninOpen(false)} />
            <ModalSignup isOpen={isModalSignupOpen} onClose={() => setIsModalSignupOpen(false)} />
            {!userName ?
                <div className='flex flex-col h-screen  items-left lg:items-center pt-10 pb-3  lg:py-20 bg-[#F6F4ED] lg:bg-[url("/mediumm.webp")] bg-size-[auto_600px] bg-no-repeat lg:bg-right '>
                    <p className='text-[76px]/17 lg:text-[116px]/25 font-serif lg:w-9/12 text-left px-6 lg:px-0 pt-27 tracking-tight '>Human <br />
                        stories & ideas
                    </p>
                    <p className="w-full lg:w-9/12 text-left px-6 text-[20px] tracking-wide  lg:px-0 font-extralight pt-12">A place to read, write, and deepen your understanding</p>
                    <div className="w-9/12 ps-6 lg:ps-0 pt-12 text-left text-xl ">
                        <button onClick={() => setIsModalSignupOpen(true)} className=" bg-green-700 lg:bg-black px-5 w-10/12 lg:w-[200px]  py-3 rounded-4xl text-white cursor-pointer font-light">Start reading</button>
                    </div>
                </div>
                :
                <HomeWithUser/>
                }
        </>
    )
}
export default Home


