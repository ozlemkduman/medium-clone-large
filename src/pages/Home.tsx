import ModalSignin from '../components/ModalSignin';
import ModalSignup from '../components/ModalSignup';
import { useMainContext } from '../contextApi/MainContext';


const Home = () => {
    const { isModalSigninOpen, setIsModalSigninOpen } = useMainContext();
    const { isModalSignupOpen, setIsModalSignupOpen } = useMainContext();

    return (
        <>
              <ModalSignin isOpen={isModalSigninOpen} onClose={() => setIsModalSigninOpen(false)}/>
              <ModalSignup isOpen={isModalSignupOpen} onClose={() => setIsModalSignupOpen(false)}/>
            <div className='flex flex-col items-left md:items-center pt-10 pb-3  md:py-30 bg-[#F6F4ED] md:bg-[url("/mediumm.webp")] bg-size-[auto_600px] bg-no-repeat md:bg-right border-b-1'>
                <p className='text-[76px]/17 md:text-[116px]/25 font-serif md:w-9/12 text-left px-6 md:px-0 pt-27 tracking-tight '>Human <br />
                    stories & ideas
                </p>
                <p className="w-full md:w-9/12 text-left px-6 text-[20px] tracking-wide  md:px-0 font-extralight pt-12">A place to read, write, and deepen your understanding</p>
                <div className="w-9/12 ps-6 md:ps-0 pt-12 text-left text-xl ">
                    <button className=" bg-green-700 md:bg-black px-5 w-10/12 md:w-[200px]  py-3 rounded-4xl text-white cursor-pointer font-light">Start reading</button>
                </div>
            </div>
        </>
    )
}
export default Home


