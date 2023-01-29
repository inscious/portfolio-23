import React, { useState } from "react";
import GridItem from "./GridItem";
import portfolioData from "./portfolioData";
import Modal from "./Modal";

const Portfolio = () => {
    const handleClick = () => {};
    const [modal, setModal] = useState(false);
    const [modalContent, setModalContent] = useState([]);
    const toggleModal = () => {
        setModal(!modal);
        console.log("modal toggled");
    };
    const getData = (img, title, description, demo, code) => {
        let tempData = [img, title, description, demo, code];
        setModalContent((item) => [1, ...tempData]);
        console.log(tempData);
        return toggleModal();
    };

    console.log(modalContent);

    return (
        <section
            id="portfolio"
            className="flex h-full w-screen flex-col items-center justify-center bg-black"
        >
            {/* MODAL */}
            <>
                {modal === true ? (
                    <div
                        id="Modal"
                        className="fixed top-0 left-0 z-50 h-full w-full bg-black/25 backdrop-blur-md"
                    >
                        <div className="bg-violet-60 relative mx-auto flex h-full flex-row bg-black md:top-1/4 md:h-1/2 md:w-[75%]">
                            <img
                                className="aspect-video"
                                src={modalContent[1]}
                                alt={modalContent[2]}
                            />
                            <div className="flex w-full flex-col items-start justify-between">
                                <div className="bg-slate-70 flex w-full flex-row justify-between px-5 pt-5">
                                    <h1 className="mb-5 whitespace-nowrap text-2xl font-thin tracking-widest text-white">
                                        {modalContent[2]}
                                    </h1>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        className="z-50 h-8 w-8 cursor-pointer stroke-white stroke-1 duration-150 hover:stroke-2"
                                        onClick={toggleModal}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </div>
                                <div className="bg-green-70 h-full w-full overflow-y-auto px-5 py-5">
                                    <p className=" text-sm tracking-wide text-white">
                                        {modalContent[3]}
                                    </p>
                                </div>
                                <div className="flex w-full justify-between px-5 py-5">
                                    <a
                                        className="rounded-lg border border-[#F5AB00] px-5 py-2 text-white duration-150 hover:bg-[#F5AB00] hover:text-black"
                                        target="_blank"
                                        href={modalContent[5]}
                                    >
                                        CODE
                                    </a>
                                    <a
                                        className="rounded-lg border border-[#F5AB00] px-5 py-2 text-white duration-150 hover:bg-[#F5AB00] hover:text-black"
                                        target="_blank"
                                        href={modalContent[4]}
                                    >
                                        DEMO
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    ""
                )}
            </>
            <div className="bg-slate-5 bg-slate-00 h-full w-full max-w-7xl px-5 py-14">
                <div className="bg-emerald- flex w-full flex-col items-center">
                    <>
                        <h1 className="hidden whitespace-nowrap text-8xl font-thin tracking-widest text-[#162230] xl:flex">
                            PORTFOLIO
                        </h1>
                    </>
                    <>
                        <div className="relative z-30 flex w-full flex-col items-center lg:-top-24 lg:mt-20 xl:mt-10">
                            <h1 className="text-4xl font-bold text-white">
                                My latest work
                            </h1>
                        </div>
                    </>
                </div>
                <>
                    <div
                        className="mt-14 grid h-full gap-5 duration-150 md:grid-cols-2 lg:-mt-14 lg:grid-cols-3 xl:-mt-10"
                        id="work-wrapper"
                        // onClick={toggleModal}
                    >
                        {portfolioData.map((data, index) => {
                            return (
                                // <GridItem
                                //     img={data.img}
                                //     title={data.title}
                                //     description={data.description}
                                //     demo={data.demo}
                                //     code={data.code}
                                //     key={index}
                                // />
                                <div
                                    key={index}
                                    onClick={() => {
                                        getData(
                                            data.img,
                                            data.title,
                                            data.description,
                                            data.demo,
                                            data.code
                                        );
                                    }}
                                    className="bg-[#F5AB00 group col-span-1 flex aspect-video h-full w-full scale-95 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-xl duration-200 hover:scale-100"
                                >
                                    <div className="backdrop-blur-s relative top-1/2 flex h-full w-full items-center justify-center duration-200 group-hover:z-20">
                                        <h1 className="whitespace-nowrap text-3xl font-bold text-white">
                                            {data.title}
                                        </h1>
                                    </div>
                                    <img
                                        className="relative -top-5 z-10 aspect-video scale-110 opacity-100 duration-200 group-hover:opacity-50 group-hover:blur-sm"
                                        // src={require("./images/" +
                                        //     data.img +
                                        //     ".png")}
                                        src={data.img}
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
