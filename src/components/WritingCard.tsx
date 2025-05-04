const WritingCard = () => {
    return (
        <>
            <div className="flex flex-col items-start gap-10 w-full ">
                <p className="text-sm text-gray-400 tracking-wide hover:underline cursor-pointer">See the full list</p>
                <div className="flex flex-col w-full items-start gap-5 p-7 bg-blue-200 rounded-md">
                    <div className="font-bold text-md">
                        Writing on Medium
                    </div>
                    <div className="flex flex-col gap-3 pt-2 items-start text-[14px]  tracking-wide font-bold">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit.</p>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="w-fit px-3 py-2 bg-black text-white rounded-full text-xs ">
                        <button className="tracking-wide font-[cambria]">
                            Start Writing
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default WritingCard