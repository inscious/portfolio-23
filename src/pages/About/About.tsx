import React from "react";

const About = () => {
    return (
        <div
            id="about"
            className="flex h-screen w-screen items-center justify-center bg-gradient-to-r from-[#160428] to-[#0B0313]"
        >
            <div className="bg-slate-5 w-full max-w-7xl px-5">
                <h1 className="text-2xl font-thin text-white">
                    Hey, I'm Saul!
                </h1>
                <h2 className="text-6xl font-thin text-white">
                    I'm a{" "}
                    <span className="font- text-6xl font-bold text-amber-600">
                        About{" "}
                    </span>
                    <br />
                    Wed Developer.
                </h2>
            </div>
        </div>
    );
};

export default About;
