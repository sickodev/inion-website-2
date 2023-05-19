"use client";
import Link from "next/link";
import React from "react";
import logo from "@/public/logo.png";
import { motion } from "framer-motion";
import Image from "next/image";

const Navbar = () => {
    return (
        <nav className='flex items-center justify-between'>
            <Link href={"/"}>
                <Image
                    src={logo}
                    height={70}
                    width={70}
                    alt='logo'
                    className='transisition-all duration-200 ease-in hover:scale-110 active:scale-90'
                />
            </Link>
            <div className='flex items-center justify-between gap-6 px-2 text-lg'>
                <Link
                    href={"#products"}
                    className='transition-all duration-200 ease-in hover:scale-110 active:scale-95'
                >
                    <h4>Products</h4>
                </Link>
                <Link
                    href={"#products"}
                    className='transition-all duration-200 ease-in hover:scale-110 active:scale-95'
                >
                    <h4>Reviews</h4>
                </Link>
                <Link
                    href={"#products"}
                    className='transition-all duration-200 ease-in hover:scale-110 active:scale-95'
                >
                    <h4>Company</h4>
                </Link>
            </div>
            <div className='p-3'>
                <motion.button
                    className='p-2 border-2 border-black text-white'
                    initial={{ borderRadius: 0, x: 300 }}
                    animate={{ x: 0, backgroundColor: "#0A369D" }}
                    whileHover={{ borderRadius: 30, scale: 1.1 }}
                    whileTap={{ scale: 0.7 }}
                    transition={{ duration: 0.3 }}
                >
                    <p>Conatct Us</p>
                </motion.button>
            </div>
        </nav>
    );
};

export default Navbar;
