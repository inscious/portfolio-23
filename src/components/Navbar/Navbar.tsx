import React, { useState } from "react";
import navData from "../../assets/data/navData";
import { Link, animateScroll as scroll } from "react-scroll";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import useScrollPosition from "../../hooks/useScrollPosition";

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => setNav(!nav);
    const scrollPosition = useScrollPosition();

    return (
        <nav
            className={classNames(
                scrollPosition > 128
                    ? "h-16 lg:bg-[#060A0E]/60 lg:backdrop-blur-lg"
                    : "h-28",
                "fixed top-0 z-50 w-full duration-300"
            )}
        >
            <div className="relative mx-auto flex h-full w-full max-w-7xl items-center">
                {/* Nav Links */}
                <>
                    <ul className="absolute left-0 hidden h-full items-center duration-150 lg:flex">
                        {navData.map((data, index) => {
                            return (
                                <li
                                    className="flex h-full items-center px-5"
                                    key={index}
                                >
                                    <Link
                                        to={data.link}
                                        smooth={true}
                                        duration={500}
                                        offset={-64}
                                        className="flex cursor-pointer items-center text-sm font-thin text-white duration-150 hover:text-[#F5AB00]"
                                    >
                                        {data.title}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </>
                {/* Social Links */}
                <>
                    <div className="absolute right-5 hidden items-center justify-center lg:flex">
                        <a
                            href="https://github.com/inscious"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <AiFillGithub className="cursor-pointer fill-white duration-150 hover:fill-[#F5AB00]" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/ssaulcortes/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <AiFillLinkedin className="ml-5 cursor-pointer fill-white duration-150 hover:fill-[#F5AB00]" />
                        </a>
                    </div>
                </>
                {/* Mobile Menu Icon */}
                <>
                    <div
                        className="absolute right-5 flex cursor-pointer items-center justify-center opacity-100 duration-150 lg:hidden lg:opacity-0"
                        onClick={handleNav}
                        id="mobile-controls"
                    >
                        {!nav ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="z-50 h-8 w-8 stroke-white stroke-1"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="z-50 h-8 w-8 stroke-white stroke-1"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        )}
                    </div>
                </>
                {/* Mobile Menu */}
                <>
                    <div
                        className={
                            nav
                                ? "duration-30 fixed top-0 right-0 z-40 flex h-screen w-full bg-black duration-500 lg:hidden"
                                : "fixed top-0 right-[-100%] z-50 h-full w-0 bg-black duration-500"
                        }
                    >
                        <ul className="absolute right-0 flex h-full w-full flex-col items-center justify-evenly">
                            {navData.map((data, index) => {
                                return (
                                    <li
                                        key={index}
                                        className="flex w-full items-center justify-center"
                                    >
                                        <Link
                                            to={data.link}
                                            smooth={true}
                                            duration={500}
                                            className="flex cursor-pointer items-center text-sm font-thin text-white duration-150 hover:text-[#F5AB00]"
                                            onClick={handleNav}
                                        >
                                            {data.title}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </>
            </div>
        </nav>
    );
};

export default Navbar;
