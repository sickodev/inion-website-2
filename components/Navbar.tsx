"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Bars3BottomRightIcon } from "@heroicons/react/24/outline";
import logo from "@/public/logo.png";
import React from "react";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className='p-1 mx-9 flex items-center justify-between gap-4'>
            <div className='flex items-center justify-between gap-8'>
                <Link href={"#home"}>
                    <Image
                        src={logo}
                        alt=''
                        height={60}
                        width={60}
                        className='transition-all duration-300 ease-in active:scale-90'
                    />
                </Link>
                <div className='hidden md:flex items-center justify-between gap-4 transition-all duration-200 ease-in group'>
                    <motion.div whileTap={{ scale: 0.9 }}>
                        <Link href={"/"}>Our Company</Link>
                    </motion.div>
                    <motion.div whileTap={{ scale: 0.9 }}>
                        <Link href={"/"}>Our Products</Link>
                    </motion.div>
                    <motion.div whileTap={{ scale: 0.9 }}>
                        <Link href={"/"}>Testimonials</Link>
                    </motion.div>
                </div>
            </div>
            <motion.button
                initial={{ padding: 0, opacity: 0 }}
                animate={{ padding: "6px", opacity: 1 }}
                transition={{ duration: 0.3 }}
                whileHover={{
                    boxShadow: "0 0 10px rgba(0,0,0,0.7)",
                    opacity: 1,
                }}
                whileTap={{ scale: 0.9 }}
                className='border-2 hidden md:inline border-black bg-secondary text-white'
            >
                <h3>Contact Us</h3>
            </motion.button>
            <motion.button
                className='inline md:hidden'
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                whileTap={{ scale: 0.7 }}
                transition={{ duration: 0.3, type: "spring" }}
            >
                <Bars3BottomRightIcon className='h-8 w-8' />
            </motion.button>
        </nav>
    );
};

export default Navbar;
