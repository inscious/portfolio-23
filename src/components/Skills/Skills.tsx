import React from "react";

import skillsData from "./skillsData";

const Skills = () => {
    return (
        <div className="flex h-screen w-screen flex-col items-center justify-evenly bg-[#060A0E] md:h-full">
            <div className="mx-auto flex max-w-7xl items-center justify-center md:pt-14">
                <h1 className="text-4xl font-bold text-white">
                    My Technical Skills
                </h1>
            </div>
            {/* <div className="bg-slate-40 mx-auto flex w-full max-w-7xl flex-row items-center justify-between px-5 pb-14"> */}
            <div className="bg-slate-5 mx-auto grid w-full max-w-7xl grid-cols-2 pb-10 pt-8 md:grid-cols-5 lg:grid-cols-10 lg:gap-5">
                {skillsData.map((data, index) => {
                    return (
                        <div
                            className="bg-orange-70 group col-span-1 flex cursor-text flex-col items-center justify-center duration-200 w-full pt-5"
                            key={index}
                        >
                            <img
                                src={require("./images/" + data.img + ".png")}
                                alt={data.alt}
                                className="relative bottom-0 h-20 w-20 scale-75 duration-200 group-hover:bottom-2 group-hover:scale-110"
                            />
                            <p className="relative text-sm font-thin text-transparent duration-300 group-hover:text-white">
                                {data.alt}
                            </p>
                        </div>
                    );
                })}
            </div>
            {/* </div> */}
        </div>
    );
};

export default Skills;
