import React from "react";

import skillsData from "./skillsData";

const Skills = () => {
    return (
        <div className="w-screen bg-[#060A0E]">
            <div className="mx-auto flex max-w-7xl items-center justify-center py-14">
                <h1 className="text-4xl font-bold text-white">
                    My Technical Skills
                </h1>
            </div>
            <div className="bg-slate-40 mx-auto flex w-full max-w-7xl flex-row items-center justify-between px-5 pb-14">
                {skillsData.map((data, index) => {
                    return (
                        <div className="h-20 w-20 duration-150 hover:scale-125">
                            <img
                                src={require("./images/" + data.img + ".png")}
                                alt={data.alt}
                                className=""
                                key={data.alt}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Skills;
