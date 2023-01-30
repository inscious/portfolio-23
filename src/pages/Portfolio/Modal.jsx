import React from "react";

const Modal = ([img, title, description, demo, code]) => {
    return (
        <div
            id="Modal"
            className="fixed top-0 left-0 z-50 h-full w-full bg-white/10 drop-shadow-xl backdrop-blur-lg"
        >
            <div className="bg-violet-60 relative mx-auto grid h-full flex-row bg-black lg:top-1/4 lg:h-1/2 lg:w-[75%] lg:grid-cols-2">
                <img
                    className="h-full w-full object-cover"
                    src={this.props.img}
                    alt={this.props.title}
                />
                <div className="flex w-full flex-col items-start justify-between">
                    <div className="bg-slate-70 flex w-full flex-row justify-between px-5 pt-5">
                        <h1 className="mb-5 whitespace-nowrap text-2xl font-thin tracking-widest text-white">
                            {this.props.title}
                        </h1>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="z-50 h-8 w-8 cursor-pointer stroke-white stroke-1 duration-150 hover:stroke-2"
                            // onClick={toggleModal}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </div>
                    <div className="bg-green-70 h-full w-full overflow-y-auto px-5 py-5">
                        <p className="text-sm tracking-wide text-white">
                            {this.props.description}
                        </p>
                    </div>
                    <div className="flex w-full justify-between px-5 py-5">
                        <a
                            className="rounded-lg border border-[#F5AB00] px-5 py-2 text-white duration-150 hover:bg-[#F5AB00] hover:text-black"
                            target="_blank"
                            href={this.props.code}
                            rel="noreferrer"
                        >
                            CODE
                        </a>
                        <a
                            className="rounded-lg border border-[#F5AB00] px-5 py-2 text-white duration-150 hover:bg-[#F5AB00] hover:text-black"
                            target="_blank"
                            href={this.props.demo}
                            rel="noreferrer"
                        >
                            DEMO
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
