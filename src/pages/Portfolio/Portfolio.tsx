import React from "react";
import GridItem from "./GridItem";
import portfolioData from "./portfolioData";

const Portfolio = () => {
    const handleClick = () => {};

    return (
        <div
            id="portfolio"
            className="flex h-full w-screen items-center justify-center bg-black"
        >
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
                        className="grid h-full gap-5 md:grid-cols-2 lg:grid-cols-3 mt-14 lg:-mt-14 duration-150 xl:-mt-10"
                        id="work-wrapper"
                    >
                        {portfolioData.map((data, index) => {
                            return (
                                <GridItem
                                    img={data.img}
                                    title={data.title}
                                    description={data.description}
                                    demo={data.demo}
                                    code={data.code}
                                    key={index}
                                />
                            );
                        })}
                    </div>
                </>
            </div>
        </div>
    );
};

export default Portfolio;
