import React from "react";

const Contact = () => {
    return (
        <div
            className="mx-auto flex h-full w-screen flex-col items-center bg-[#e6ecf5] duration-200 dark:bg-[#0D141C]"
            id="contact"
        >
            <div className="bg-purple-00 mt-14 lg:mt-0">
                <h1 className="bg-green-00 my-14 hidden text-5xl font-thin tracking-widest text-[#7189FF]/10 lg:block lg:text-8xl">
                    CONTACT
                </h1>
                <div className="bg-slate-00 relative flex flex-row items-center justify-center lg:bottom-28">
                    <h1 className="bg-purple-00 text-4xl font-bold text-black duration-200 dark:text-white">
                        Contact me
                    </h1>
                </div>
            </div>
            <section className="bg-slate-00 bg-red-00 mx-auto mb-28 grid w-full max-w-7xl grid-cols-1 px-5 py-14 lg:mt-0 lg:grid-cols-2">
                <div className="bg-amber-00 flex h-full w-full flex-col items-start justify-start">
                    <div className="pt- -full bg-violet-00 flex w-full flex-row items-center justify-start pb-10">
                        <div className="mr-5">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="h-8 w-8 stroke-black stroke-1 dark:stroke-white duration-200"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                                />
                            </svg>
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-black duration-200 dark:text-white">
                                Current Location
                            </h3>
                            <p className="text-[#7189FF]">San Diego, CA</p>
                        </div>
                    </div>
                    <div className="bg-violet-00 flex flex-row items-center justify-start pb-10">
                        <div className="mr-5">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="h-8 w-8 stroke-black stroke-1 duration-200 dark:stroke-white"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                                />
                            </svg>
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-black duration-200 dark:text-white">
                                Have any questions?
                            </h3>
                            <p className="text-[#7189FF]">
                                Email me at scortes2910@gmail.com
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-fuchsia-00 mx-auto h-full w-full max-w-7xl">
                    <form className="bg-cyan-00 mb- mx-auto w-full">
                        <div className="mb-8 flex gap-8">
                            <input
                                className="mx-auto w-full rounded-md bg-[#cdd7e5] py-5 px-3 text-gray-300 ring-[#7189FF] duration-200 focus:outline-none focus:ring-1 dark:bg-gray-800"
                                placeholder="Your Name"
                                type="text"
                                name="name"
                            />
                            <input
                                className="mx-auto w-full rounded-md bg-[#cdd7e5] py-5 px-3 text-gray-300 ring-[#7189FF] duration-200 focus:outline-none focus:ring-1 dark:bg-gray-800"
                                placeholder="Your Email"
                                type="email"
                                name="email"
                                required
                            />
                        </div>
                        <input
                            id="place_state"
                            name="place_state"
                            type="text"
                            className="mx-auto mb-8 w-full rounded-md bg-[#cdd7e5] py-5 px-3 text-gray-300 ring-[#7189FF] duration-200 focus:outline-none focus:ring-1 dark:bg-gray-800"
                            placeholder="Subject"
                        ></input>
                        <input
                            id="comment"
                            name="comment"
                            type="text"
                            className="mx-auto mb-8 w-full rounded-md bg-[#cdd7e5] py-10 px-3 text-gray-300 ring-[#7189FF] duration-200 focus:outline-none focus:ring-1 dark:bg-gray-800"
                            placeholder="Your Message"
                        ></input>
                        <button className="rounded-md border border-[#7189FF] px-5 py-3 text-black duration-150 hover:bg-[#7189FF] hover:text-white focus:ring">
                            Send Message
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Contact;
