import React from "react";
import ReactDOM from "react-dom";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}


const ModalSignup: React.FC<ModalProps> = ({ isOpen, onClose, }) => {
    if (!isOpen) return null;


    return ReactDOM.createPortal(
        <div className=" fixed inset-0 flex items-center justify-center z-50 min-h-screen ">
            {/* Arka plan (overlay) */}
            <div
                className="hidden md:block absolute inset-0  bg-white md:opacity-95 "
                onClick={onClose}
            ></div>
            {/* Modal içeriği */}
            <div className="relative bg-white w-full h-full  md:w-2/5 md:h-4/5 p-8 md:rounded shadow-md/20  z-10">
                {/* Kapatma butonu */}
                <button
                    className="absolute top-2 right-2 text-gray-600 cursor-pointer hover:text-black"
                    onClick={onClose}
                >
                    <svg width="29" height="29" className="">
                        <path fill-rule="evenodd" d="m20.13 8.11-5.61 5.61-5.609-5.61-.801.801 5.61 5.61-5.61 5.61.801.8 5.61-5.609 5.61 5.61.8-.801-5.609-5.61 5.61-5.61">
                        </path>
                    </svg>
                </button>
                <div className="flex flex-col items-center mt-15 ">
                    <div className="flex flex-col items-center w-full">
                        <p className="text-3xl font-[cambria] py-5">Join Large.                        </p>
                        <div className="flex flex-col items-center w-full pt-15 gap-3">
                            <div className="w-5/6 md:w-2/4 border py-2.5 md:px-2 rounded-4xl relative">
                                <a href="" className="flex justify-center items-center font-light ps-5 md:ps-0 " >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-2.5" width="24" height="24" fill="none" viewBox="0 0 24 24" >
                                        <g id="google">
                                            <g id="google-vector" fill-rule="evenodd" clip-rule="evenodd">
                                                <path id="Shape" fill="#4285F4" d="M20.64 12.205q-.002-.957-.164-1.84H12v3.48h4.844a4.14 4.14 0 0 1-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615">
                                                </path>
                                                <path id="Shape_2" fill="#34A853" d="M12 21c2.43 0 4.468-.806 5.957-2.18L15.05 16.56c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H3.958v2.332A9 9 0 0 0 12.001 21"></path>
                                                <path id="Shape_3" fill="#FBBC05" d="M6.964 13.712a5.4 5.4 0 0 1-.282-1.71c0-.593.102-1.17.282-1.71V7.96H3.957A9 9 0 0 0 3 12.002c0 1.452.348 2.827.957 4.042z"></path>
                                                <path id="Shape_4" fill="#EA4335" d="M12 6.58c1.322 0 2.508.455 3.441 1.346l2.582-2.58C16.463 3.892 14.427 3 12 3a9 9 0 0 0-8.043 4.958l3.007 2.332c.708-2.127 2.692-3.71 5.036-3.71">
                                                </path>
                                            </g>
                                        </g>
                                    </svg>
                                    Sign in with Google
                                </a>
                            </div>
                            <div className="w-5/6 md:w-2/4 border py-2.5 px-2 rounded-4xl relative ">
                                <a href="" className="flex justify-center items-center  font-light ps-5 md:ps-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-2.5 " width="24" height="24" fill="none" viewBox="0 0 24 24" >
                                        <g id="facebook">
                                            <g id="facebook-vector">
                                                <path fill="#1877F2" d="M22 12.002c0-5.523-4.477-10-10-10s-10 4.477-10 10c0 4.991 3.657 9.128 8.438 9.879v-6.988h-2.54v-2.891h2.54V9.799c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.876h2.773l-.443 2.89h-2.33v6.989c4.78-.75 8.437-4.888 8.437-9.879">
                                                </path>
                                                <path fill="#fff" d="m15.893 14.893.443-2.891h-2.773v-1.876c0-.79.387-1.562 1.63-1.562h1.26v-2.46s-1.144-.196-2.238-.196c-2.284 0-3.777 1.385-3.777 3.89v2.204h-2.54v2.89h2.54v6.989a10 10 0 0 0 3.124 0v-6.988z">
                                                </path>
                                            </g>
                                        </g>
                                    </svg>
                                    Sign in with Facebook
                                </a>
                            </div>
                            <div className="w-5/6 md:w-2/4 border py-2.5 px-2 rounded-4xl relative">
                                <a href="" className="flex justify-center md:justify-center items-center  font-light ps-5 md:ps-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-2.5" width="24" height="24" fill="none" viewBox="0 0 24 24" >
                                        <g id="email-icon">
                                            <g id="Group 10123" stroke="#242424">
                                                <rect id="Rectangle 1488" width="17" height="13" x="3.5" y="5.505" rx="1">
                                                </rect>
                                                <path id="Vector 107" stroke-linecap="round" d="m3.5 8.005 8.5 6 8.5-6">
                                                </path>
                                            </g>
                                        </g>
                                    </svg>
                                    Sign in with email
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center mt-13 px-10 md:px-15 text-gray-600">
                        <p className="mb-5 font-light tracking-tight">Already have an account? <a href="" className="text-green-700 font-bold">Sign in</a></p>
                        <div className="text-center text-sm text-gray-600 md:px-4 text-[14px] md:text-[12px] mt-5 md:mt-10">
                            
                            <p>
                                Click “Sign in” to agree to Medium’s{" "}
                                <a href="/terms" className="underline hover:text-black">
                                    Terms of Service
                                </a>{" "}
                                and acknowledge that Medium’s{" "}
                                <a href="/privacy" className="underline hover:text-black">
                                    Privacy Policy
                                </a>{" "}
                                applies to you.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>,

        document.body

    )
}
export default ModalSignup