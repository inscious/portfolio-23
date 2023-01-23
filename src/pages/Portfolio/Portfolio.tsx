import React from "react";

const Portfolio = () => {
    return (
        <div
            id="portfolio"
            className="flex h-screen w-screen items-center justify-center bg-black"
        >
            <div className="bg-slate-5 w-full max-w-7xl bg-slate-500 px-5">
                <h1 className="font- text-2xl text-white">Saul Cortes</h1>
                <h2 className="font- text-2xl text-white">
                    Front-End Developer
                </h2>
                <div className="w-1/2 bg-black">
                    <p className="text-md font-thin text-white">
                        I'm an ambitious front-end, object oriented, web
                        developer. I'm eager to build modern solutions for your
                        business. As a graduate from SDSU's full-stack software
                        developing bootcamp, I am fully equipped to build modern
                        & fully responsive products.
                        <br />
                        I'm open to remote fulltime positions. Please see my
                        resume below & continue down my portfolio to see my tech
                        stack & recent projects.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
