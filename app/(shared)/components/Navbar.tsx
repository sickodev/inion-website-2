"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "@/public/logo.png";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    return (
        <nav className='sticky top-0 px-2 my-2 flex items-center justify-between bg-transparent'>
            <button
                type='button'
                onClick={() => {
                    setMenuOpen(!menuOpen);
                }}
                className={`md:hidden`}
            >
                {menuOpen ? (
                    <XMarkIcon className='h-5 w-5' />
                ) : (
                    <Bars3Icon className='h-5 w-5' />
                )}
            </button>
            {menuOpen && (
                <div className='flex flex-col border-2 border-l-0 bg-white border-black justify-center text-left absolute transition-all duration-200 ease-out left-0 top-16 z-30 py-2 px-6 rounded-r-[10px]'>
                    <Link
                        href={"#home"}
                        className='text-left -mx-1 hover:scale-105 hover:translate-x-2 transition-all duration-200 ease-out'
                    >
                        Home
                    </Link>
                    <hr className='my-2 w-12  border-black/70' />
                    <Link
                        href={"#products"}
                        className='text-left -mx-1 hover:scale-105 hover:translate-x-2 transition-all duration-200 ease-out'
                    >
                        Products
                    </Link>
                    <hr className='my-2 w-12  border-black/70' />
                    <Link
                        href={"/"}
                        className='text-left -mx-1 hover:scale-105 hover:translate-x-2 transition-all duration-200 ease-out'
                    >
                        Our Company
                    </Link>
                    <hr className='my-2 w-12  border-black/70' />
                    <Link
                        href={"/"}
                        className='text-left -mx-1 hover:scale-105 hover:translate-x-2 transition-all duration-200 ease-out'
                    >
                        Reviews
                    </Link>
                    <hr className='my-2 w-12  border-black/70' />
                </div>
            )}
            <Image
                src={logo}
                alt='logo'
                height={60}
                width={60}
                className='transition-all duration-300 ease-in hover:scale-105 cursor-default hover:animate-pulse'
            />
            <div className='hidden md:flex items-center justify-between gap-2'>
                <Link
                    href={"#home"}
                    className='transition-all duration-200 ease-in hover:scale-105 active:font-bold'
                >
                    <h4 className='my-1 px-1'>Home</h4>
                </Link>
                <Link
                    href={"#products"}
                    className='transition-all duration-200 ease-in hover:scale-105 active:font-bold'
                >
                    <h4 className='my-1 px-1'>Products</h4>
                </Link>
                <Link
                    href={"/"}
                    className='transition-all duration-200 ease-in hover:scale-105 active:font-bold'
                >
                    <h4 className='my-1 px-1'>Our Company</h4>
                </Link>
                <Link
                    href={"/"}
                    className='transition-all duration-200 ease-in hover:scale-105 active:font-bold'
                >
                    <h4 className='my-1 px-1'>Reviews</h4>
                </Link>
            </div>
            <button
                type='button'
                className='bg-[#1448FF] py-2 px-1 text-white hover:scale-105 hover:rounded-[8px] transition-all duration-200 ease-in active:scale-90'
            >
                Contact Us
            </button>
        </nav>
    );
};

export default Navbar;
