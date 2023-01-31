import React from "react";

import dorito from "../../assets/images/dorito.jpg";

const Home = () => {
    return (
        <div
            id="home"
            className="flex h-screen w-screen items-center justify-center bg-gradient-to-br from-[#dde5ff] to-[#65979e] dark:from-[#0d1640] dark:to-[#4b7d84]"
        >
            <div className="bg-slate-5 flex w-full max-w-7xl justify-evenly px-5">
                <div className="bg-blac flex flex-col items-center justify-center">
                    <h1 className="text-2xl font-thin text-black dark:text-white">
                        Hey, I'm Saul!
                    </h1>
                    <h2 className="text-5xl font-thin text-black dark:text-white md:text-6xl">
                        I'm a{" "}
                        <span className="font- font-bold text-[#7189FF]">
                            Front-End{" "}
                        </span>
                        <br />
                        Wed Developer.
                    </h2>
                </div>
                <div className="hidden rounded-full border-2 border-[#7189FF] p-2 lg:flex">
                    <img
                        src={dorito}
                        alt=""
                        className="aspect-square h-96 rounded-full"
                    />
                </div>
            </div>
        </div>
    );
};

//bg-gradient-to-b from-[#160428] to-[#0B0313]

export default Home;
