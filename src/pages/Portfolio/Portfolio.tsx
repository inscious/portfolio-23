import React, { useState } from "react";
import GridItem from "./GridItem";
import portfolioData from "./portfolioData";

const Portfolio = () => {
    const handleClick = () => {};
    const [modal, setModal] = useState(false);
    const [modalContent, setModalContent] = useState([]);
    const toggleModal = () => {
        setModal(!modal);
        console.log("modal toggled");
    };
    const setData = () => {
        setModalContent([]);
    };

    console.log(modalContent)

    return (
        <div
            id="portfolio"
            className="flex h-full w-screen flex-col items-center justify-center bg-black"
        >
            {modal && (
                <div
                    id="Modal"
                    className="fixed top-0 left-0 z-50 h-full w-full bg-red-700/50 backdrop-blur-md"
                >
                    <div className="relative mx-auto h-full bg-black md:top-1/4 md:h-1/2 md:w-[75%]">
                        {/* <button className="rounded-lg border">CODE</button> */}
                        <button
                            className="rounded-xl border border-[#F5AB00] py-2 px-5 text-white duration-150 hover:bg-[#F5AB00] hover:text-black"
                            onClick={toggleModal}
                        >
                            CLOSE
                        </button>
                    </div>
                </div>
            )}
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
                                <button
                                    onClick={() => {
                                        setData();
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
                                        src={require("./images/" +
                                            data.img +
                                            ".png")}
                                    />
                                    <p></p>
                                </button>
                            );
                        })}
                    </div>
                </>
            </div>
        </div>
    );
};

export default Portfolio;
