import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react"; // veya başka ikon kütüphanesi
import Card from "../components/Card";
import RightMenuCard from "../components/RightMenuCard";
import WritingCard from "../components/WritingCard";
import TopicsCard from "../components/TopicsCard";
import WhoToFollowCard from "../components/WhoToFollowCard";
import ReadingList from "../components/ReadingList";

const HomeWithUser = () => {
    const listRef = useRef<HTMLUListElement>(null);
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [isEnd, setIsEnd] = useState<boolean>(false)
    const scrollLeft = () => {
        if (listRef.current) {
            listRef.current.scrollBy({ left: -100, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (listRef.current) {
            listRef.current.scrollBy({ left: 100, behavior: "smooth" });
        }
    };


    useEffect(() => {
        const handleScroll = () => {
            if (listRef.current) {
                setIsScrolled(listRef.current.scrollLeft > 0);
                const scrollLeft = listRef.current.scrollLeft;
                const scrollWidth = listRef.current.scrollWidth;
                const clientWidth = listRef.current.clientWidth;

                // Liste sonuna geldiyse
                if (scrollLeft + clientWidth >= scrollWidth - 5) {
                    setIsEnd(true);
                } else {
                    setIsEnd(false);
                }
            }
        };

        const ulElement = listRef.current;
        if (ulElement) {
            ulElement.addEventListener("scroll", handleScroll);
        }

        return () => {
            if (ulElement) {
                ulElement.removeEventListener("scroll", handleScroll);
            }
        };
    }, []);
    return (
        <>
            <div className=" flex justify-center min-h-screen   w-screen  ">
                <div className="flex  justify-center w-full lg:w-11/12  h-full   " >
                    <div className=' flex flex-col items-center lg:w-7/12 w-full  h-full px-5 lg:pt-5 '>
                        <div className="sticky top-0 flex bg-white w-full lg:w-10/12 overflow-auto  justify-center items-center border-b border-gray-200  opacity to-0% from-100% ">
                            <button
                                onClick={scrollLeft}
                                className="absolute left-1 bg-white p-0.5  z-10 cursor-pointer "
                            >
                                {isScrolled ? <ChevronLeft className="w-5 h-5 stroke-1 rounded-full" /> : <Plus className="w-5 h-5 rounded-full hover:bg-gray-100 stroke-1" />}
                            </button>
                            {
                                !isEnd &&
                                <button
                                    onClick={scrollRight}
                                    className="absolute right-1 bg-white p-0.5 cursor-pointer z-10 "
                                >
                                    <ChevronRight className="w-5 h-5 stroke-1 rounded-full" />
                                </button>}
                            {/* left opacity */}
                            {isScrolled &&
                                <div className="absolute left-0 top-0 h-full w-35 bg-gradient-to-r from-white to-transparent "></div>
                            }
                            {/* Right opacity */}
                            {!isEnd &&
                                <div className="flex absolute right-0 top-0 h-full w-35 bg-gradient-to-l from-white to-transparent "></div>
                            }
                            <ul ref={listRef} className="flex items-center text-sm text-gray-500 w-full space-x-10 overflow-x-hidden px-10  py-4 ">

                                <li className="shrink-0 cursor-pointer">For You</li>
                                <li className="shrink-0 cursor-pointer">Following</li>
                                <li className="shrink-0 cursor-pointer">Featured</li>
                                <li className="shrink-0 cursor-pointer">Art</li>
                                <li className="shrink-0 cursor-pointer">Language</li>
                                <li className="shrink-0 cursor-pointer">Culture</li>
                                <li className="shrink-0 cursor-pointer">Design</li>
                                <li className="shrink-0 cursor-pointer">Android Development</li>
                                <li className="shrink-0 cursor-pointer">Javascript</li>
                                <li className="shrink-0 cursor-pointer">Software Engineering</li>

                            </ul>
                        </div>
                        <div className="flex flex-col items-center w-full h-full ">
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <div className="flex flex-col lg:mt-20 mt-10 lg:mb-30 mb-20 px-5 gap-5">
                                <p className="font-bold">You're all caught up
                                </p>
                                <p>Looking for more writers and publications to follow?
                                </p>
                                <p>View recommendations</p>
                            </div>
                        </div>
                    </div>
                    <div className=' hidden lg:block lg:w-3/12  items-start ps-10  '>
                        <div className="relative flex flex-col gap-3 w-full   items-start  border-s border-gray-200  ps-10 lg:pt-10 ">
                            <div className="">
                                <h2 className="">Staff Picks</h2>
                            </div>
                            <div>
                                <RightMenuCard />
                                <RightMenuCard />
                                <RightMenuCard />
                                <WritingCard />
                            </div>
                            <div className="sticky flex flex-col top-20 w-full ">
                                <TopicsCard />
                                <WhoToFollowCard/>
                                <ReadingList/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeWithUser