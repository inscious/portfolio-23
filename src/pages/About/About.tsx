import React from "react";

import dorito from "../../assets/images/dorito.jpg";

const resume =
    "https://docs.google.com/document/d/1tJyjgBrrJ6VWS-1pjZxs5AgR7fBNN9ZXlViVcc1wh0I/edit?usp=sharing";

const About = () => {
    return (
        <div
            id="about"
            className="mx-auto flex w-screen flex-col items-center justify-evenly bg-[#0D141C]"
        >
            <section className="bg-yellow-60 grid w-full max-w-7xl grid-cols-1 gap-5 px-5 py-32 xl:grid-cols-2">
                <div className="bg-slate-40 flex w-full items-center justify-center overflow-hidden rounded-br-3xl rounded-tl-3xl">
                    <img
                        src={dorito}
                        alt="saul cortes"
                        className="aspect-square w-full max-w-[500px] items-center justify-center object-cover"
                    />
                </div>
                <div className="flex w-full flex-col items-start">
                    <h1 className="hidden whitespace-nowrap text-8xl font-thin tracking-widest text-[#162230] md:flex">
                        ABOUT ME
                    </h1>

                    <div className="relative z-30 mt-10 flex w-full flex-col md:-top-20">
                        <h1 className="text-4xl font-bold text-white">
                            Saul Cortes
                        </h1>
                        <h2 className="text-xl font-thin text-[#F5AB00]">
                            Front-End Developer
                        </h2>
                        <hr className="mt-5 w-full border-[#162230]" />
                    </div>

                    <div className="mt-10 md:-mt-5">
                        <p className="text-md font-thin text-white">
                            I'm an ambitious front-end, object oriented, web
                            developer. I'm eager to build modern solutions for
                            your business. As a graduate from SDSU's full-stack
                            software developing bootcamp, I am fully equipped to
                            build modern & fully responsive products.
                        </p>
                        <p className="text-md font-thin text-white mt-5">
                            I'm open to remote fulltime positions. Please see my
                            resume below & continue down my portfolio to see my
                            tech stack & recent projects.
                        </p>
                    </div>
                    <button className="mt-10 h-10 cursor-pointer rounded-md border border-[#F5AB00] px-5 text-white duration-150 hover:bg-[#F5AB00] hover:text-[#0D141C]">
                        <a href={resume} target="_blank" rel="noreferrer">
                            MY RESUME
                        </a>
                    </button>
                </div>
            </section>
        </div>
    );
};

export default About;
