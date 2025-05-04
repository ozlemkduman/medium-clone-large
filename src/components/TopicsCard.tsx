const TopicsCard =()=>{
    return(
        <>
            <div className="flex flex-col items-start gap-5 pt-10">
                <h2 className="font-bold ">
                    Recommended topics
                </h2>
                <div className="flex flex-row flex-wrap gap-5 text-sm">
                    <button className="bg-neutral-100 shadow-xs rounded-full  px-4 py-3 w-fit text-sm tracking-wide font-light">
                        Programming
                    </button>
                    <button className="bg-neutral-100 shadow-xs rounded-full px-4 py-3 text-sm tracking-wide font-light">
                        Self Improvement
                    </button>
                    <button className="bg-neutral-100 shadow-xs rounded-full px-4 py-3 text-sm tracking-wide font-light">
                        Data Science
                    </button>
                    <button className="bg-neutral-100 shadow-xs rounded-full  px-4 py-3 text-sm tracking-wide font-light">
                        Writing
                    </button>
                    <button className="bg-neutral-100 shadow-xs rounded-full  px-4 py-3 text-sm tracking-wide font-light">
                        Relationship
                    </button>
                    <button className="bg-neutral-100 shadow-xs rounded-full  px-4 py-3 text-sm tracking-wide font-light">
                        Technology
                    </button>
                    <button className="bg-neutral-100 shadow-xs rounded-full  px-4 py-3 text-sm tracking-wide font-light">
                        Politics
                    </button>
                </div>
                <p className="text-sm text-gray-400 tracking-wide hover:underline cursor-pointer">See more topics</p>
            </div>
        </>
    )
}
export default TopicsCard