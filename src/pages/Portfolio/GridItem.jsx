import React, { useState } from "react";

// interface WorkProps {
//     img: string;
//     title: string;
//     description: string;
//     demo: string;
//     code: string;
// }

const GridItem = ({ img, title }) => {
    return (
        <>
            <div className="bg-[#F5AB00 group col-span-1 flex aspect-video h-full w-full scale-95 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-xl duration-200 hover:scale-100">
                <div className="backdrop-blur-s relative top-1/2 flex h-full w-full items-center justify-center duration-200 group-hover:z-20">
                    <h1 className="whitespace-nowrap text-3xl font-bold text-white">
                        {title}
                    </h1>
                </div>
                <img
                    className="relative -top-5 z-10 aspect-video scale-110 opacity-100 duration-200 group-hover:opacity-50 group-hover:blur-sm"
                    src={require("./images/" + img + ".png")}
                />
                <p></p>
            </div>
        </>
    );
};

export default GridItem;
