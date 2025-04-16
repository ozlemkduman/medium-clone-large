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
            <div className='flex flex-col items-center h-[92%] py-32 bg-[#F6F4ED] bg-[url("/mediumm.webp")] bg-size-[auto_600px] bg-no-repeat bg-right border-b-1'>
                <p className='text-[116px]/25 font-serif w-9/12 text-left px-10 pt-20 tracking-tight '>Human <br />
                    stories & ideas
                </p>
                <p className="w-9/12 text-left text-2xl px-10 font-light pt-12">A place to read, write, and deepen your understanding</p>
                <div className="w-9/12 px-10 pt-12 text-left text-xl ">
                    <button className="  bg-black px-10 py-3 rounded-4xl text-white cursor-pointer font-light">Start reading</button>
                </div>
            </div>
        </>
    )
}
export default Home


