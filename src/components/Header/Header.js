import React from "react";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
    return (
        <div>
            <div className="sticky top-0 bg-white px-44 py-8 flex justify-center md:justify-between">
                <div className="hidden md:block">
                    <Link
                        className="font-sans font-bold text-xl text-violet-600"
                        to="/"
                    >
                        Crypto Lab
                    </Link>
                </div>
                <div className="flex gap-4 text-xl">
                    <CustomLink to="/">Home</CustomLink>
                    <CustomLink to="/coins">Coins</CustomLink>
                    <CustomLink to="/contact">Contact</CustomLink>
                    <CustomLink to="/about">About</CustomLink>
                </div>
            </div>
        </div>
    );
};

export default Header;
