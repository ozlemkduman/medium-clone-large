import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ModalSignin from '../components/ModalSignin';
import { useMainContext } from '../contextApi/MainContext';
import ModalSignup from "../components/ModalSignup";

const Membership = () => {
    const { isModalSigninOpen, setIsModalSigninOpen, isModalSignupOpen, setIsModalSignupOpen } = useMainContext();

    // Fotoğraf URL'leri (7 adet)
    const images = [
        "/right-1.png",
        "/right-2.png",
        "/right-3.png",
        "/right-4.png",
        "/right-5.png",
        "/right-6.png",
        "/right-7.png",
        "/right-8.png",

    ];

    // Fotoğraf sırasını tutacak state
    const [currentIndex, setCurrentIndex] = useState(0);

    // Arka plan renklerini tutan state, şimdi renk kodlarını saklayacağız
    const [bgColorLight, setBgColorLight] = useState<string>('');
    const [bgColorDark, setBgColorDark] = useState<string>('');
    const [aColorText, setaColorText] = useState<string>('');
    const [aProfileName, setaProfileName] = useState<string>('');
    const [aProfileJob, setaProfileJob] = useState<string>('');

    // Renk dizileri (7 eleman olmalı)
    const colorsLight = [
        "#FDFDFB", // white
        "#FEEDCA", // sarı
        "#EAF7F5", // mavi
        "#E1E9EF", // gri
        "#ECECEC", // bej
        "#E0EED1", // yeşil
        "#FEFBF9", // ten
        "#F9D4F5"  // pembe
    ];
    const colorsDark = [
        "#FAF9F3", // white
        "#FDD277", // sarı
        "#CCECE6", // mavi
        "#B6C8D8", // gri
        "#D0D0D0", // bej
        "#B2D68D", // yeşil
        "#FEF6EF", // ten
        "#ED94E5"  // pembe
    ];
    const colorText = [
        "Henritta Lacks Subjectivity & The Medical Explotation of Woman", // white
        "AI and the Future of Work: What Stays 100% Human?", // sarı
        "Storytelling with Design: How to persuade your team with narrative", // mavi
        "How Can I Stop Focusing on the Bad Things in Life?", // gri
        "How Starting an Investman Firm Almost Landed Me in a Federal Prison", // bej
        "The Case For Reforesting Our Cities", // yeşil
        "Don't Just Set Goals. Build Systems", // ten
        "How to Sleep on Hot Summer Nights: Science vs. Myth"  // pembe
    ];
    const profileNames = [
        "Quintesssa Williams", // white
        "Cassie Kozyrkov", // sarı
        "Kai Wong", // mavi
        "Kaki Okumura", // gri
        "Marlon Weems", // bej
        "Clive Thompson", // yeşil
        "Kurtis Pykes", // ten
        "Robert Roy Britt"  // pembe
    ]
    const profileJobs = [
        "Writer for Cultured", // white
        "Chief Decision Scientist at Google", // sarı
        "Author of Data-Informed UX Design", // mavi
        "Author of Wa: The Art of Balance", // gri
        "Host of The Journeyman Unfiltered podcast", // bej
        "Writer at Wired magazine and author of Coders", // yeşil
        "Author of Don't Just Set Goals. Build Systems", // ten
        "Author of Make Sleep Your Superpower"  // pembe
    ]


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        setBgColorLight(colorsLight[currentIndex]);
        setBgColorDark(colorsDark[currentIndex]);
        setaColorText(colorText[currentIndex]);
        setaProfileName(profileNames[currentIndex]);
        setaProfileJob(profileJobs[currentIndex]);
    }, [currentIndex]);

    return (
        <>
            <ModalSignin isOpen={isModalSigninOpen} onClose={() => setIsModalSigninOpen(false)} />
            <ModalSignup isOpen={isModalSignupOpen} onClose={() => setIsModalSignupOpen(false)} />

            <div className="w-full min-h-screen pt-20 " >
                <div className="w-full flex flex-col lg:flex-row lg:h-[655px] border-b ">
                    <div className={`lg:w-[69%] text-left px-8 lg:ps-8 pt-10 lg:pt-18 lg:border-e lg:pb-10 pb-10`} style={{ backgroundColor: bgColorLight }}>
                        <p className="text-[48px] lg:text-[85px]/[88px] font-[georgia] pb-10 lg:pb-68 tracking-tight">
                            Support human stories
                        </p>
                        <p className="text-lg/6 lg:text-[22px]/8 text-[#6B6B6B] lg:w-3/5 font-[400] font-[arial,sans] pb-12">
                            Become a member to read without limits or ads, fund great writers,
                            and join a global community of people who care about high-quality storytelling.
                        </p>
                        <div className="flex gap-4 ">
                            <NavLink to="#">
                                <button onClick={() => setIsModalSigninOpen(true)} className="bg-[#242424] rounded-4xl lg:rounded-3xl text-white px-5 py-6 lg:py-3 cursor-pointer">
                                    Get started
                                </button>
                            </NavLink>
                            <NavLink to="#">
                                <button onClick={() => setIsModalSignupOpen(true)} className="bg-transparent rounded-4xl lg:rounded-3xl  border px-5 py-6 lg:py-3 cursor-pointer">
                                    View plans
                                </button>
                            </NavLink>
                        </div>
                    </div>

                    <div className={`w-full lg:w-[31%] h-full`} >
                        <div className="slider-container h-[400px] lg:h-2/3 w-full relative ">
                            <img
                                className="slider-image h-full w-full object-cover"
                                src={images[currentIndex]}
                                alt={`Slider Image ${currentIndex + 1}`}
                            />
                            <div
                                className="absolute bottom-0 left-0 w-full h-22"
                                style={{
                                    background: `linear-gradient(to top, ${bgColorDark}, transparent)`
                                }}
                            />

                            {/* "Member-only story" butonu */}
                            <div className="pt-10 ps-5 absolute bottom-5 left-5 z-10 ">
                                <button className="bg-amber-400/80 py-2.5 px-4 rounded-3xl  flex font-extralight gap-2 text-black/70 justify-center"
                                    style={{ fontSize: "14px" }}
                                >
                                    <svg
                                        width="17"
                                        height="17"
                                        fill="currentColor"
                                        viewBox="0 0 64 64"
                                    >
                                        <path
                                            fill="black"
                                            d="m39.637 40.831-5.771 15.871a1.99 1.99 0 0 1-3.732 0l-5.771-15.87a2.02 2.02 0 0 0-1.194-1.195L7.298 33.866a1.99 1.99 0 0 1 0-3.732l15.87-5.771a2.02 2.02 0 0 0 1.195-1.194l5.771-15.871a1.99 1.99 0 0 1 3.732 0l5.771 15.87a2.02 2.02 0 0 0 1.194 1.195l15.871 5.771a1.99 1.99 0 0 1 0 3.732l-15.87 5.771a2.02 2.02 0 0 0-1.195 1.194"
                                        />
                                    </svg>
                                    Member-only story
                                </button>
                            </div>
                        </div>
                        <div className={`h-1/4 lg:h-1/3 `} style={{ backgroundColor: bgColorDark }}>
                            <p className="text-3xl font-[georgia] text-left px-10 font-extralight tracking-normal w-full h-1/2">{aColorText}</p>
                            <div className="flex justify-start items-center gap-3 ps-10 lg:pt-0 pt-5 pb-5 h-[100px] lg:h-1/2 ">
                                <div className="w-10 h-10 ">
                                    <img alt=""
                                        className="rounded-[50%]"
                                        src="https://miro.medium.com/v2/resize:fill:176:176/1*XlVStdn200ll4k3u_VOvGg.png" width="88" height="88" loading="lazy" />
                                </div>
                                <div className="flex flex-col justify-center text-left items-start gap-1">
                                    <p>{aProfileName}</p>
                                    <p>{aProfileJob}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex  lg:flex-row flex-col   w-full min-h-screen  z-10 bg-white  border-b pb-20">
                    <div className="lg:sticky top-10 w-2/6 h-fit pt-20 text-[48px] lg:text-7xl font-[georgia] tracking-tight text-left ps-8 lg:ps-10  z-10">
                        <p>Why <br /> membership?</p>
                    </div>
                    <div className="lg:w-4/6 p-8 flex flex-col gap-10 lg:gap-30 lg:pt-15 ">
                        <div className="w-1/1 pt-5">
                            <p className="text-[28px] lg:text-5xl font-[georgia] mb-5 w-1/1 text-left">Reward writers </p>
                            <p className="text-[16px]/6 tracking-wide lg:text-xl lg:w-3/5 text-gray-700 text-left ">
                                Your membership directly supports the writers, editors, curators, and teams who make Medium
                                a vibrant, inclusive home for human stories. A portion of your membership is allocated to
                                the writers of the stories you read and interact with.
                            </p>
                        </div>
                        <div className="w-1/1 pt-5">
                            <p className="text-[28px] lg:text-5xl font-[georgia] mb-5 w-1/1 text-left">Unlock every story
                            </p>
                            <p className="text-[16px]/6 tracking-wide lg:text-xl lg:w-3/5 text-gray-700 text-left ">
                                Get access to millions of original stories that spark bright ideas, answer big questions, and fuel bold ambitions.
                            </p>
                        </div>
                        <div className="w-1/1 pt-5">
                            <p className="text-[28px] lg:text-5xl font-[georgia] mb-5 w-1/1 text-left">Enhance your reading experience    </p>
                            <p className="text-[16px]/6 tracking-wide lg:text-xl lg:w-3/5 text-gray-700 text-left ">
                                Immerse yourself in audio stories, read offline wherever you go, and connect with the Medium community on Mastodon.
                            </p>
                        </div>
                        <div className="w-1/1 pt-5">
                            <p className="text-[28px] lg:text-5xl font-[georgia] mb-5 w-1/1 text-left">Elevate your writing
                            </p>
                            <p className="text-[16px]/6 tracking-wide lg:text-xl lg:w-3/5 text-gray-700 text-left ">
                                Create and contribute to publications to collaborate with other writers, create a custom domain for your profile, and level up your writing with our simple but powerful publishing tools.
                            </p>
                        </div>
                        <div className="w-1/1 pt-5">
                            <p className="text-[28px] lg:text-5xl font-[georgia] mb-5 w-1/1 text-left">Support a mission that matters
                            </p>
                            <p className="text-[16px]/6 tracking-wide lg:text-xl lg:w-3/5 text-gray-700 text-left ">
                                Members are creating a world where original, human-crafted stories thrive. As a member-supported platform, quality comes first, not ads or clickbait.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex  lg:flex-row flex-col  w-full min-h-screen  z-10 bg-white  border-b pb-20">
                    <div className="lg:sticky top-10 lg:w-2/6 h-fit pt-20 text-[48px] lg:text-7xl font-[georgia] tracking-tight text-left px-8 lg:ps-10  z-10">
                        <p className="w-full ">What members are saying</p>
                    </div>
                    <div className="lg:w-8/12 p-8 lg:pt-22 pt-10 flex flex-col gap-10 lg:gap-30 ">
                        <div className="w-1/1">
                            <div className="flex lg:flex-row flex-col gap-5 lg:gap-10 w-full">
                                <div className="lg:w-1/12 w-1/3 lg:h-1/4 border border-gray-100  rounded-[50%]">
                                    <img alt="Cassie Kozyrkov"
                                        className="rounded-[50%]"
                                        src="https://miro.medium.com/v2/resize:fill:160:160/1*djKJlXxmezn6fBPzHnipnw.jpeg" />
                                </div>
                                <div className="flex flex-col lg:w-6/12">
                                    <div className="text-[20px]/8 lg:text-[22px]/8 w-full font-[cambria] text-gray-600 text-left pb-5 ">
                                        The easy path in social media is promoting the worst content, the cheapest, tackiest, lowest-effort stuff. That’s not what you get on Medium. You can actually find content you can build your brain with. I appreciate that, both as a reader and a writer.
                                    </div>
                                    <div className="flex w-full">
                                        <div className="text-[16px]/7 tracking-wide text-gray-600 text-left gap-1">
                                            <div className="text-black inline">Cassie Kozyrkov,</div>
                                            <div className="inline">Chief Decision Scientist at Google and Medium member</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="w-1/1">
                            <div className="flex lg:flex-row flex-col gap-5 lg:gap-10 w-full">
                                <div className="lg:w-1/12 w-1/3 lg:h-1/4 border border-gray-100 rounded-[50%]">
                                    <img
                                        alt="Enrique Dans"
                                        className="rounded-[50%]"
                                        src="https://miro.medium.com/v2/resize:fill:160:160/1*ZYP58jl-6KcKocr1P7r5Hw.jpeg"
                                    />
                                </div>
                                <div className="flex flex-col lg:w-6/12">
                                    <div className="text-[20px]/8 lg:text-[22px]/8 w-full font-[cambria] text-gray-600 text-left pb-5">
                                        The easy path in social media is promoting the worst content, the cheapest, tackiest, lowest-effort stuff. That’s not what you get on Medium. You can actually find content you can build your brain with. I appreciate that, both as a reader and a writer.
                                    </div>
                                    <div className="flex w-full">
                                        <div className="text-[16px]/7 tracking-wide text-gray-600 text-left gap-1">
                                            <div className="text-black inline">Enrique Dans,</div>
                                            <div className="inline">Professor of Innovation at IE Business School and Medium member</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-1/1">
                            <div className="flex lg:flex-row flex-col gap-5 lg:gap-10 w-full">
                                <div className="lg:w-1/12 w-1/3 lg:h-1/4 border border-gray-100 rounded-[50%]">
                                    <img
                                        alt="Wenqi Glantz"
                                        className="rounded-[50%]"
                                        src="https://miro.medium.com/v2/resize:fill:160:160/1*Ce4jOl6gjeebSiHsknN2-A.jpeg"
                                    />
                                </div>
                                <div className="flex flex-col lg:w-6/12">
                                    <div className="text-[20px]/8 lg:text-[22px]/8 w-full font-[cambria] text-gray-600 text-left pb-5">
                                        For us tech folks, Medium membership unlocks a whole treasure trove of high-quality articles. One good technology book could sell for over the Medium membership fee amount. It’s your choice whether to buy one book, or buy hundreds and thousands of books by unlocking member-only reading on Medium. Investing in a Medium membership is one of the best investments I have ever made for my career.
                                    </div>
                                    <div className="flex w-full">
                                        <div className="text-[16px]/7 text-gray-600 text-left gap-1 tracking-wide">
                                            <div className="text-black inline">Wenqi Glantz,</div>
                                            <div className="inline">Software Architect at ArisGlobal and Medium member</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="flex  lg:flex-row flex-col  w-full min-h-screen  z-10 bg-white  border-b pb-20">
                    <div className="lg:sticky top-10 w-4/12 h-fit pt-20  font-[georgia]  text-left ps-10  z-10">
                        <p className="w-full text-[48px] lg:text-[70px] tracking-tight">Membership Plans</p>
                    </div>
                    <div className="w-full lg:w-8/12 p-8 pt-22 flex justify-start  ">
                        <div className="w-full lg:w-4/6 flex flex-col lg:flex-row gap-5 ">
                            <div className="flex flex-col gap-5 items-center w-full lg:w-1/2 px-7 pb-10 lg:pb-0 lg:h-[650px] border border-gray-200 rounded-sm">
                                <div className="flex flex-col w-full items-center gap-1  py-5 border-b border-gray-100">
                                    <div className="py-5">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 64 64" role="presentation" aria-hidden="true" focusable="false" className="ob oc">
                                            <path fill="#FFC017" d="m39.637 40.831-5.771 15.871a1.99 1.99 0 0 1-3.732 0l-5.771-15.87a2.02 2.02 0 0 0-1.194-1.195L7.298 33.866a1.99 1.99 0 0 1 0-3.732l15.87-5.771a2.02 2.02 0 0 0 1.195-1.194l5.771-15.871a1.99 1.99 0 0 1 3.732 0l5.771 15.87a2.02 2.02 0 0 0 1.194 1.195l15.871 5.771a1.99 1.99 0 0 1 0 3.732l-15.87 5.771a2.02 2.02 0 0 0-1.195 1.194">
                                            </path>
                                        </svg>
                                    </div>
                                    <p className="pt-2  font-normal text-2xl">
                                        Medium Member
                                    </p>
                                    <p className="pb-5">
                                        $5/month or $60/year
                                    </p>
                                    <div className="bg-green-700 py-2 w-full  rounded-4xl text-white text-sm tracking-wide font-light cursor-pointer ">
                                        <button onClick={() => setIsModalSigninOpen(true)} className="">Get started</button>
                                    </div>
                                </div>
                                <div className="flex flex-col w-full ps-5 gap-4 text-gray-600  ">
                                    <div className="w-full flex gap-2 text-left ">
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className="" role="presentation" aria-hidden="true" focusable="false">
                                                <path stroke="green" stroke-linecap="round" stroke-linejoin="round" d="M3 8.79 7.103 13 13 3">
                                                </path>
                                            </svg>
                                        </span>
                                        <p className="text-sm">Read member-only stories</p>
                                    </div>
                                    <div className="w-full  flex gap-2 justify-start">
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className="on" role="presentation" aria-hidden="true" focusable="false">
                                                <path stroke="green" stroke-linecap="round" stroke-linejoin="round" d="M3 8.79 7.103 13 13 3">
                                                </path>
                                            </svg>
                                        </span>
                                        <p className="text-sm">Support writers you read most</p>
                                    </div>
                                    <div className="w-full  flex gap-2 justify-start">
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className="on" role="presentation" aria-hidden="true" focusable="false">
                                                <path stroke="green" stroke-linecap="round" stroke-linejoin="round" d="M3 8.79 7.103 13 13 3">
                                                </path>
                                            </svg>
                                        </span>
                                        <p className="text-sm">Earn money for your writing</p>
                                    </div>
                                    <div className="w-full  flex gap-2 justify-start">
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className="on" role="presentation" aria-hidden="true" focusable="false">
                                                <path stroke="green" stroke-linecap="round" stroke-linejoin="round" d="M3 8.79 7.103 13 13 3">
                                                </path>
                                            </svg>
                                        </span>
                                        <p className="text-sm">Listen to audio narrations</p>
                                    </div>
                                    <div className="w-full  flex gap-2 justify-start">
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className="on" role="presentation" aria-hidden="true" focusable="false">
                                                <path stroke="green" stroke-linecap="round" stroke-linejoin="round" d="M3 8.79 7.103 13 13 3">
                                                </path>
                                            </svg>
                                        </span>
                                        <p className="text-sm">Read offline with the Medium app</p>
                                    </div>
                                    <div className="w-full  flex gap-2 justify-start">
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className="on" role="presentation" aria-hidden="true" focusable="false">
                                                <path stroke="green" stroke-linecap="round" stroke-linejoin="round" d="M3 8.79 7.103 13 13 3">
                                                </path>
                                            </svg>
                                        </span>
                                        <p className="text-sm">Access our Mastodon community</p>
                                    </div>
                                    <div className="w-full  flex gap-2 justify-start">
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className="on" role="presentation" aria-hidden="true" focusable="false">
                                                <path stroke="green" stroke-linecap="round" stroke-linejoin="round" d="M3 8.79 7.103 13 13 3">
                                                </path>
                                            </svg>
                                        </span>
                                        <p className="text-sm">Connect your custom domain</p>
                                    </div>
                                    <div className="w-full  flex gap-2 justify-start">
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className="on" role="presentation" aria-hidden="true" focusable="false">
                                                <path stroke="green" stroke-linecap="round" stroke-linejoin="round" d="M3 8.79 7.103 13 13 3">
                                                </path>
                                            </svg>
                                        </span>
                                        <p className="text-sm">Create your own publications</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-5 items-center w-full lg:w-1/2 px-7 pb-10 lg:pb-0 lg:h-[650px] border border-gray-200 rounded-sm">
                                <div className="flex flex-col w-full items-center gap-1  py-5 border-b border-gray-100">
                                    <div className="py-5">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 64 64" role="presentation" aria-hidden="true" focusable="false" className="ob oc">
                                            <path fill="#FFC017" fill-rule="evenodd" d="M56.475 38.3C58.125 36.575 60 34.6 60 32s-1.875-4.575-3.525-6.3c-.95-.975-1.975-2.05-2.3-2.875-.325-.824-.35-2.17-.375-3.494v-.006c-.025-2.425-.075-5.2-2-7.125s-4.7-1.975-7.125-2l-.431-.007c-1.172-.017-2.29-.034-3.069-.368-.875-.375-1.9-1.35-2.875-2.3C36.575 5.875 34.6 4 32 4s-4.575 1.875-6.3 3.525c-.975.95-2.05 1.975-2.875 2.3-.824.325-2.17.35-3.494.375h-.006c-2.425.025-5.2.075-7.125 2s-1.975 4.7-2 7.125l-.007.431c-.017 1.172-.034 2.29-.368 3.069-.375.875-1.35 1.9-2.3 2.875C5.875 27.425 4 29.4 4 32s1.875 4.575 3.525 6.3c.95.975 1.975 2.05 2.3 2.875.325.824.35 2.17.375 3.494v.006c.025 2.425.075 5.2 2 7.125s4.7 1.975 7.125 2l.431.007c1.172.017 2.29.034 3.069.368.875.375 1.9 1.35 2.875 2.3C27.425 58.125 29.4 60 32 60s4.575-1.875 6.3-3.525c.975-.95 2.05-1.975 2.875-2.3.824-.325 2.17-.35 3.494-.375h.006c2.425-.025 5.2-.075 7.125-2s1.975-4.7 2-7.125l.007-.431c.017-1.172.034-2.29.368-3.069.375-.875 1.35-1.9 2.3-2.875m-23.36 6.846a1.92 1.92 0 0 1-2.226 0h-.003C27.574 42.8 18.006 35.762 18 28.909s6.503-10.252 13.259-4.45c.43.37 1.052.37 1.482 0 6.755-5.805 13.265-2.403 13.259 4.45-.006 6.56-9.574 13.892-12.886 16.237" clip-rule="evenodd">
                                            </path>
                                        </svg>
                                    </div>
                                    <p className="pt-2  font-normal text-2xl">
                                        Friend of Medium                                    </p>
                                    <p className="pb-5">
                                        $15/month or $150/year                                    </p>
                                    <div className="bg-green-700 py-2 w-full  rounded-4xl text-white text-sm tracking-wide font-light cursor-pointer ">
                                        <button onClick={() => setIsModalSigninOpen(true)} className="">Get started</button>
                                    </div>
                                </div>
                                <div className="w-full flex flex-col pt-5 items-start lg:px-0 ">
                                    <div className="w-full lg:ps-5 flex gap-2 justify-start  ">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 64 64" role="presentation" aria-hidden="true" focusable="false" className="ob oc">
                                            <path fill="#FFC017" d="m39.637 40.831-5.771 15.871a1.99 1.99 0 0 1-3.732 0l-5.771-15.87a2.02 2.02 0 0 0-1.194-1.195L7.298 33.866a1.99 1.99 0 0 1 0-3.732l15.87-5.771a2.02 2.02 0 0 0 1.195-1.194l5.771-15.871a1.99 1.99 0 0 1 3.732 0l5.771 15.87a2.02 2.02 0 0 0 1.194 1.195l15.871 5.771a1.99 1.99 0 0 1 0 3.732l-15.87 5.771a2.02 2.02 0 0 0-1.195 1.194">
                                            </path>
                                        </svg>
                                        <p className="text-sm font-light">All Medium member benefits</p>
                                    </div>
                                    <div className="flex items-center w-full text-gray-500 my-3 ">
                                        <hr className="flex-grow border-t border-gray-100" />
                                        <span className="px-4 text-sm  uppercase ">plus</span>
                                        <hr className="flex-grow border-t border-gray-100" />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4 lg:w-4/5  ">
                                    <div className="w-full  flex gap-2 justify-start">
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className="on" role="presentation" aria-hidden="true" focusable="false">
                                                <path stroke="green" stroke-linecap="round" stroke-linejoin="round" d="M3 8.79 7.103 13 13 3">
                                                </path>
                                            </svg>
                                        </span>
                                        <p className="text-md  text-left">Give 4x more to the writers you read</p>
                                    </div>
                                    <div className="w-full  flex gap-2 justify-start">
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className="on" role="presentation" aria-hidden="true" focusable="false">
                                                <path stroke="green" stroke-linecap="round" stroke-linejoin="round" d="M3 8.79 7.103 13 13 3">
                                                </path>
                                            </svg>
                                        </span>
                                        <p className="text-sm text-left text-gray-600">Share member-only stories with anyone and drive more earnings for writers</p>
                                    </div>
                                    <div className="w-full  flex gap-2 justify-start">
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className="on" role="presentation" aria-hidden="true" focusable="false">
                                                <path stroke="green" stroke-linecap="round" stroke-linejoin="round" d="M3 8.79 7.103 13 13 3">
                                                </path>
                                            </svg>
                                        </span>
                                        <p className="text-sm text-left text-gray-600">Customize app icon</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`flex w-full h-[300px] justify-center flex-col items-center  sticky z-10 gap-10  border-b py-20`}
                    style={{ backgroundColor: bgColorLight }}>
                    <p className="text-[48px] lg:text-7xl font-[cambria] tracking-tight">
                        Unlock a world of wisdom
                    </p>
                    <div className="bg-black py-3 cursor-pointer  px-5 rounded-4xl flex text-center text-white">
                        <button className="cursor-pointer">Get started</button>
                    </div>

                </div>

            </div>
        </>
    );
};
export default Membership