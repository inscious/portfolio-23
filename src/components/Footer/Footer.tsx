import React from "react";
import { FiGithub, FiLinkedin, FiMoon, FiSun } from "react-icons/fi";

import useDarkMode from "../../hooks/useDarkMode";

const ThemeIcon = () => {
    const [darkTheme, setDarkTheme] = useDarkMode();
    const handleMode = () => setDarkTheme(!darkTheme);
    return (
        <span onClick={handleMode} className="ml-5 flex cursor-pointer">
            {darkTheme ? (
                <FiSun className="h-5 w-5 stroke-white stroke-1" />
            ) : (
                <FiMoon className="h-5 w-5 stroke-white stroke-1" />
            )}
        </span>
    );
};

const Footer = () => {
    return (
        <div className="h-full w-full bg-[#96b8cc] duration-200 dark:bg-[#315267]">
            <div className="bg-slate-00 mx-auto flex max-w-7xl flex-col items-center justify-between py-8 px-5 lg:flex-row">
                <div className="flex h-full items-center justify-center lg:mt-0">
                    <a
                        href="https://github.com/inscious"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FiGithub className="h-5 w-5 cursor-pointer stroke-white stroke-1 duration-150 hover:stroke-[#7189FF]" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/ssaulcortes/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FiLinkedin className="ml-5 h-5 w-5 cursor-pointer stroke-white stroke-1 duration-150 hover:stroke-[#7189FF]" />
                    </a>
                    <ThemeIcon />
                </div>
                <div className="mt-8 h-full lg:mt-0">
                    <p className="text-sm font-thin text-white">
                        © 2023 Saul Cortes. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
