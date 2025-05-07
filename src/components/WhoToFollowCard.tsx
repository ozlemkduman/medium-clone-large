const WhoToFollowCard = () => {
    return (
        <>
            <div className="  flex flex-col justify-center items-start gap-10 pt-10">
                <h2 className="font-bold ">
                    Recommended topics
                </h2>
                <div className="flex gap-3 w-full">
                    <div className="w-14 h-10 rounded-full">
                        <img src="./public/assets/right-6.png" className="w-full h-full rounded-full" alt="" />
                    </div>
                    <div className="flex flex-col items-start justify-center gap-2 pt-1 pe-2">
                        <p className="font-bold text-start">Daniel Scott</p>
                        <p className="text-sm text-start">Full stack developer 8 years of experiences</p>
                    </div>
                    <div className="text-sm ">
                        <button className="rounded-full border px-3 py-2 ">Follow</button>
                    </div>
                </div>
                <p className="text-sm text-gray-400 tracking-wide hover:underline cursor-pointer">See more suggestions</p>
            </div>
        </>
    )
}

export default WhoToFollowCard