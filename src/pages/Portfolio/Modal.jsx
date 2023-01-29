import React from "react";

const Modal = () => {
    return (
        <div
            id="Modal"
            className="fixed top-0 left-0 z-50 h-full w-full bg-red-700/50 backdrop-blur-md"
        >
            <div className="relative mx-auto h-full bg-black md:top-1/4 md:h-1/2 md:w-[75%]">
                {/* <button className="rounded-lg border">CODE</button> */}
                <button
                    className="rounded-xl border border-[#F5AB00] py-2 px-5 text-white duration-150 hover:bg-[#F5AB00] hover:text-black"
                    // onClick={toggleModal}
                >
                    CLOSE
                </button>
            </div>
        </div>
    );
};

export default Modal;
