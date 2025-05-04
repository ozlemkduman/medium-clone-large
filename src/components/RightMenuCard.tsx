const RightMenuCard = () => {
    return (
        <>
        <div className="flex flex-col  gap-5 mt-5  items-start justify-center  h-full w-full pb-5  ">
                <div className="flex gap-2 items-center">
                    <div className="w-5 h-5">
                        <img src="../public/assets/right-6.png" className="h-full w-full" alt="" />
                    </div>
                    <p className="text-[12px] tracking-wide">In The Medium Blog by Medium Staff</p>
                </div>
                <div className="flex justify-between gap-15">
                    <div className="flex flex-col items-start gap-2 ">
                        <h2 className="text-md font-bold  text-start ">Keep up to date with Medium writers you love even more easily</h2>
                    </div>
                    
                </div>
                <div className="flex  items-center w-8/12 text-gray-500 ">
                    <div className="flex gap-5 text-[13px] ">
                        <div>{Date().slice(4, 10)}</div>
                       
                    </div>
                    
                </div>
            </div>

        </>
    )
}
export default RightMenuCard