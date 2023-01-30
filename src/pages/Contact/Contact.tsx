import React from "react";

const Contact = () => {
    return (
        <div
            className="mx-auto flex h-screen w-screen flex-col items-center bg-[#0D141C]"
            id="contact"
        >
            <h1 className="my-14 text-8xl font-thin tracking-widest text-white">
                Contact Me
            </h1>
            <section className="bg-slate-00 mx-auto grid w-full max-w-7xl grid-cols-2 px-5">
                <div className="bg-purple-00">
                    <div className="bg-amber-5 flex w-full flex-col">
                        <div className="bg-violet-00 flex h-full flex-row items-center justify-start pt-14 pb-10">
                            <div className="mr-5">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="h-8 w-8 stroke-white stroke-1"
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
                                <h3 className="text-white">Current Location</h3>
                                <p className="text-[#F5AB00]">San Diego, CA</p>
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
                                    className="h-8 w-8 stroke-white stroke-1"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                                    />
                                </svg>
                            </div>
                            <div className="flex flex-col">
                                <h3 className="text-white">
                                    Have any questions?
                                </h3>
                                <p className="text-[#F5AB00]">
                                    Email me at scortes2910@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-fuchsia-00 mx-auto h-full w-full max-w-7xl px-5">
                    <form className="bg-cyan-00 mx-auto my-14 w-full">
                        <div className="mb-8 flex gap-8">
                            <input
                                className="mx-auto w-full rounded-md bg-gray-800 py-5 px-3 text-gray-300 ring-[#F5AB00] focus:outline-none focus:ring-1"
                                placeholder="Your Name"
                                type="text"
                                name="name"
                            />
                            <input
                                className="mx-auto w-full rounded-md bg-gray-800 py-5 px-3 text-gray-300 ring-[#F5AB00] focus:outline-none focus:ring-1"
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
                            className="mx-auto mb-8 w-full rounded-md bg-gray-800 py-5 px-3 text-gray-300 ring-[#F5AB00] focus:outline-none focus:ring-1 "
                            placeholder="Subject"
                        ></input>
                        <input
                            id="comment"
                            name="comment"
                            type="text"
                            className="mx-auto mb-8 w-full rounded-md bg-gray-800 py-10 px-3 text-gray-300 ring-[#F5AB00] focus:outline-none focus:ring-1"
                            placeholder="Your Message"
                        ></input>
                        <button className="rounded-md border border-[#F5AB00] px-5 py-3 text-white duration-150 hover:bg-[#F5AB00] hover:text-black focus:ring">
                            Send Message
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Contact;
