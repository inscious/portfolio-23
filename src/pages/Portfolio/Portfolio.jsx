import React, { useState } from "react";
import portfolioData from "./portfolioData";
// import GridItem from "./GridItem";
// import Modal from "./Modal";
import { motion } from "framer-motion";

const Portfolio = () => {
    const [modal, setModal] = useState(false);
    const [modalContent, setModalContent] = useState([]);
    const toggleModal = () => {
        setModal(!modal);
        // console.log("modal toggled");
    };
    const getData = (img, title, description, demo, code, tech) => {
        let tempData = [img, title, description, demo, code, tech];
        setModalContent((item) => [1, ...tempData]);
        return toggleModal();
    };

    // console.log(modalContent);

    return (
        <section
            id="portfolio"
            className="flex h-full w-screen flex-col items-center justify-center bg-white duration-200 dark:bg-[#070B0E]"
        >
            {/* MODAL */}
            <>
                {modal === true ? (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: 1,
                                transition: { duration: 0.2 },
                            }}
                            exit={{
                                opacity: 0,
                                transition: { duration: 1 },
                            }}
                            id="Modal"
                            className="fixed top-0 left-0 z-50 h-full w-full bg-black/30 backdrop-blur-lg"
                        >
                            <div className="bg-violet-60 relative mx-auto grid h-full flex-row overflow-hidden bg-white drop-shadow-xl dark:bg-[#070B0E] lg:top-1/4 lg:h-1/2 lg:w-[75%] lg:grid-cols-2 lg:rounded-2xl">
                                <>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        className="absolute right-5 top-5 z-50 flex h-8 w-8 cursor-pointer stroke-white stroke-2 drop-shadow-lg duration-150 lg:hidden"
                                        onClick={toggleModal}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </>
                                <img
                                    className="h-full w-full object-cover"
                                    src={modalContent[1]}
                                    alt={modalContent[2]}
                                />
                                <div className="flex w-full flex-col items-start justify-between overflow-y-auto">
                                    <div className="bg-slate-70 flex w-full flex-row justify-between bg-[] px-5 pt-5">
                                        {/* TITLE */}
                                        <h3 className="whitespace-nowrap bg-[] text-2xl font-bold tracking-wide text-black dark:text-white">
                                            {modalContent[2]}
                                        </h3>
                                        {/* SVG CLOSE */}
                                        <>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                className="z-50 hidden h-8 w-8 cursor-pointer stroke-black stroke-1 duration-150 hover:stroke-2 dark:stroke-white lg:flex"
                                                onClick={toggleModal}
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M6 18L18 6M6 6l12 12"
                                                />
                                            </svg>
                                        </>
                                    </div>
                                    {/* TECH */}
                                    <div className="bg-green-70 h-full w-full overflow-y-auto px-5 py-5">
                                        <h4 className="mb-5 text-sm font-bold text-black dark:text-white">
                                            Technologies:{" "}
                                            <span className="font-thin">
                                                {modalContent[6]}
                                            </span>
                                        </h4>
                                        <p className="text-md font-normal tracking-wide text-black dark:text-white">
                                            {modalContent[3]}
                                        </p>
                                    </div>
                                    {/* BUTTONS */}
                                    <div className="flex w-full justify-between px-5 py-5">
                                        <a
                                            className="rounded-lg border border-[#7189FF] px-5 py-2 text-black duration-150 hover:bg-[#7189FF] hover:text-white dark:text-white"
                                            target="_blank"
                                            href={modalContent[5]}
                                            rel="noreferrer"
                                        >
                                            CODE
                                        </a>
                                        <a
                                            className="rounded-lg border border-[#7189FF] px-5 py-2 text-black duration-150 hover:bg-[#7189FF] hover:text-white dark:text-white"
                                            target="_blank"
                                            href={modalContent[4]}
                                            rel="noreferrer"
                                        >
                                            DEMO
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                ) : (
                    ""
                )}
            </>
            <div className="bg-slate-5 bg-slate-00 h-full w-full max-w-7xl px-5 py-14">
                {/* TITLE */}
                <>
                    <div className="bg-emerald- flex w-full flex-col items-center">
                        <>
                            <h1 className="hidden whitespace-nowrap text-8xl font-thin tracking-widest text-[#162230]/10 dark:text-[#162230] xl:flex">
                                PORTFOLIO
                            </h1>
                        </>
                        <>
                            <div className="relative z-30 flex w-full flex-col items-center lg:-top-24 lg:mt-20 xl:mt-10">
                                <h1 className="text-4xl font-bold text-black dark:text-white">
                                    My latest work
                                </h1>
                            </div>
                        </>
                    </div>
                </>
                {/* GRID */}
                <>
                    <div
                        className="mt-14 grid h-full gap-x-5 gap-y-10 duration-150 md:grid-cols-2 lg:-mt-14 lg:grid-cols-3 xl:-mt-10"
                        id="work-wrapper"
                        // onClick={toggleModal}
                    >
                        {portfolioData.map((data, index) => {
                            return (
                                // <GridItem
                                //     key={index}
                                //     img={data.img}
                                //     title={data.title}
                                //     description={data.description}
                                //     demo={data.demo}
                                //     code={data.code}
                                //     onClick={() => {
                                //         getData(
                                //             data.img,
                                //             data.title,
                                //             data.description,
                                //             data.demo,
                                //             data.code
                                //         );
                                //     }}
                                // />
                                <div
                                    key={index}
                                    onClick={() => {
                                        getData(
                                            data.img,
                                            data.title,
                                            data.description,
                                            data.demo,
                                            data.code,
                                            data.tech
                                        );
                                    }}
                                    className="group col-span-1 flex aspect-video h-full w-full scale-95 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-xl borde-2 border-transparent drop-shadow-[0_7px_7px_rgba(0,0,0,0.30)] duration-200 hover:scale-100 hover:border-[#7189FF] hover:bg-[#7189FF]/50 hover:drop-shadow-[0_15px_15px_rgba(0,0,0,0.50)]"
                                >
                                    <div className="backdrop-blur-s relative top-1/2 flex h-full w-full items-center justify-center duration-200 group-hover:z-20">
                                        <h1 className="whitespace-nowrap text-3xl font-bold text-white">
                                            {data.title}
                                        </h1>
                                    </div>
                                    <img
                                        className="relative -top-5 z-10 aspect-video scale-110 opacity-100 duration-200 group-hover:opacity-50 group-hover:blur-sm"
                                        src={data.img}
                                        alt={data.title}
                                    />
                                    <p></p>
                                </div>
                            );
                        })}
                    </div>
                </>
            </div>
        </section>
    );
};

export default Portfolio;
