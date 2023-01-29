import React from "react";

import dorito from "../../assets/images/dorito.jpg";

const Home = () => {
    return (
        <div
            id="home"
            className="flex h-screen w-screen items-center justify-center bg-gradient-to-t from-[#0D141C] to-[#0b2c36]"
        >
            <div className="bg-slate-5 flex w-full max-w-7xl justify-evenly px-5">
                <div className="bg-blac flex flex-col items-center justify-center">
                    <h1 className="text-2xl font-thin text-white">
                        Hey, I'm Saul!
                    </h1>
                    <h2 className="md:text-6xl font-thin text-white text-5xl">
                        I'm a{" "}
                        <span className="font- font-bold text-[#F5AB00]">
                            Front-End{" "}
                        </span>
                        <br />
                        Wed Developer.
                    </h2>
                </div>
                <div className="rounded-full border-2 border-[#F5AB00] p-2 hidden lg:flex">
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
