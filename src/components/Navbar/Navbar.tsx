import React from "react";
import navData from "../../assets/data/navData";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
    return (
        <nav className="fixed top-0 z-50 h-32 w-full bg-black/60 backdrop-blur-lg duration-150 lg:h-20">
            <div className="relative mx-auto flex h-full w-full max-w-7xl items-center">
                {/* <h1 id="nav-title">Saul Cortes</h1> */}
                <ul className="absolute left-0 hidden h-full items-center duration-150 lg:flex">
                    {navData.map((data) => {
                        return (
                            <li
                                className="flex h-full items-center px-5"
                                key={data.title}
                            >
                                <Link
                                    to={data.link}
                                    smooth={true}
                                    duration={500}
                                    className="flex cursor-pointer items-center text-sm font-thin text-white duration-150 hover:text-amber-600"
                                >
                                    {data.title}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
