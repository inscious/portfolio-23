import React from "react";

import dorito from "../../assets/images/dorito.jpg";

const resume =
    "https://docs.google.com/document/d/1tJyjgBrrJ6VWS-1pjZxs5AgR7fBNN9ZXlViVcc1wh0I/edit?usp=sharing";

const About = () => {
    return (
        <div
            id="about"
            className="mx-auto flex w-screen flex-col items-center justify-evenly bg-[#c7d9e3] dark:bg-[#1B2C37]"
        >
            <section className="bg-yellow-60 grid w-full max-w-7xl grid-cols-1 gap-5 px-5 py-16 xl:grid-cols-2 xl:py-32">
                <>
                    <div className="bg-slate-40 flex w-full items-center justify-center overflow-hidden rounded-br-3xl rounded-tl-3xl">
                        <img
                            src={dorito}
                            alt="saul cortes"
                            className="aspect-square w-full max-w-[500px] items-center justify-center rounded-br-3xl rounded-tl-3xl object-cover"
                        />
                    </div>
                </>
                <>
                    <div className="bg-emerald- flex w-full flex-col items-center xl:items-start">
                        <>
                            <h1 className="hidden whitespace-nowrap text-8xl font-thin tracking-widest text-black/25 xl:flex">
                                ABOUT ME
                            </h1>
                        </>
                        <>
                            <div className="relative z-30 flex w-full flex-col items-center lg:-top-20 lg:mt-20 xl:mt-10 xl:items-start">
                                <h1 className="dark:text text-4xl font-bold text-black dark:text-white">
                                    Saul Cortes
                                </h1>
                                <h2 className="text-xl font-thin text-[#7189FF]">
                                    Front-End Developer
                                </h2>
                                <hr className="mt-5 w-full border-[#162230]" />
                            </div>
                        </>
                        <>
                            <div className="mt-10 tracking-tight lg:-mt-5">
                                <p className="text-md dark:text font-thin text-black dark:text-white">
                                    I'm an ambitious front-end, object oriented,
                                    web developer. I'm eager to build modern
                                    solutions for your business. As a graduate
                                    from SDSU's full-stack software developing
                                    bootcamp, I am fully equipped to build
                                    modern & fully responsive products.
                                </p>
                                <p className="text-md mt-5 font-thin text-black dark:text-white">
                                    I'm open to remote fulltime positions.
                                    Please see my resume below & continue down
                                    my portfolio to see my tech stack & recent
                                    projects.
                                </p>
                            </div>
                        </>
                        <>
                            <button className="mt-10 h-10 cursor-pointer rounded-md border border-[#7189FF] px-5 font-thin text-black duration-150 hover:bg-[#7189FF] hover:text-white dark:text-white">
                                <a
                                    href={resume}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    MY RESUME
                                </a>
                            </button>
                        </>
                    </div>
                </>
            </section>
        </div>
    );
};

export default About;
