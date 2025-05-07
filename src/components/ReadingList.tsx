import Footer from "../pages/Footer"

const ReadingList = () => {
    return (
        <>
            <div className="  flex flex-col justify-center items-start gap-5 py-10">
                <h2>
                    Reading list
                </h2>
                <p className="text-start text-gray-500 text-sm">
                    Click the  on any story to easily add it to your reading list or a custom list that you can share.
                </p>
                <ul className="flex flex-wrap gap-1 text-gray-400 text-xs cursor-pointer ">
                    <li>Help</li>
                    <li>Status</li>
                    <li>About</li>
                    <li>Careers</li>
                    <li>Press</li>
                    <li>Blog</li>
                    <li>Privacy</li>
                    <li>Rules</li>
                    <li>Terms</li>
                    <li>Text to speech</li>

                </ul>
            </div>
        </>
    )
}
export default ReadingList