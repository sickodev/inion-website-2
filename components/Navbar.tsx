"use client";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "@/public/logo.png";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
    AiOutlineInstagram,
    AiOutlineLinkedin,
    AiOutlineTwitter,
} from "react-icons/ai";

const links = [
    { name: "Our Company", to: "/#about", id: 1 },
    { name: "Our Products", to: "/#products", id: 2 },
    { name: "Testimonials", to: "/#reviews", id: 3 },
    { name: "Contact Us", to: "/contact", id: 4 },
];

const itemVariants = {
    closed: {
        opacity: 0,
    },
    open: { opacity: 1 },
};

const sideVariants = {
    closed: {
        transition: {
            staggerChildren: 0.2,
            staggerDirection: -1,
            opacity: 0,
        },
    },
    open: {
        transition: {
            staggerChildren: 0.1,
            staggerDirection: 1,
            opacity: 1,
        },
    },
};

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, [mounted]);

    if (!mounted) return <></>;

    return (
        <nav>
            <nav className='p-1 mx-9 flex items-center justify-between gap-4'>
                <div className='flex items-center justify-between gap-8'>
                    <Link href={"/#home"}>
                        <Image
                            src={logo}
                            alt=''
                            height={75}
                            width={75}
                            className='transition-all duration-300 ease-in active:scale-90'
                        />
                    </Link>
                </div>
                <div className='flex items-center justify-between gap-8 '>
                    <div className='hidden md:flex text-lg items-center justify-between space-x-8 transition-all duration-200 ease-in group'>
                        <motion.div whileTap={{ scale: 0.9 }}>
                            <Link href={"#about"}>About</Link>
                        </motion.div>
                        <motion.div whileTap={{ scale: 0.9 }}>
                            <Link href={"#products"}>Products</Link>
                        </motion.div>
                        <motion.div whileTap={{ scale: 0.9 }}>
                            <Link href={"#reviews"}>Testimonials</Link>
                        </motion.div>
                        <motion.div whileTap={{ scale: 0.9 }}>
                            <Link href={"/contact"}>Contact</Link>
                        </motion.div>
                    </div>

                    {/* <motion.button
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
                    </motion.button> */}
                </div>
                <motion.button
                    onClick={() => setOpen(!open)}
                    className='inline md:hidden'
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    whileTap={{ scale: 0.7 }}
                    transition={{ duration: 0.3, type: "spring" }}
                >
                    {open ? (
                        <XMarkIcon className='h-8 w-8' />
                    ) : (
                        <Bars3BottomRightIcon className='h-8 w-8' />
                    )}
                </motion.button>
            </nav>
            <AnimatePresence>
                {open && (
                    <motion.aside
                        initial={{ width: 0 }}
                        animate={{ width: "100vw" }}
                        exit={{
                            width: 0,
                            transition: {
                                delay: 0.3,
                                duration: 0.5,
                            },
                        }}
                        className='bg-gradient-to-b h-screen absolute md:hidden from-primary to-white flex-col top-16 left-0 z-10'
                    >
                        <motion.div
                            className='flex flex-col items-start justify-center my-12 mr-4 ml-4 gap-4 py-2'
                            initial='closed'
                            animate='open'
                            exit='closed'
                            variants={sideVariants}
                        >
                            {links.map(({ name, to, id }) => (
                                <motion.a
                                    key={id}
                                    href={to}
                                    whileHover={{ scale: 1.1 }}
                                    variants={itemVariants}
                                    className='text-black mx-2 flex items-center justify-start'
                                >
                                    {name}
                                </motion.a>
                            ))}
                            <motion.button
                                variants={itemVariants}
                                className='mx-2 border-2 border-secondary p-2 transition-all duration-200 ease-in hover:bg-secondary'
                            >
                                Book A Call
                            </motion.button>
                        </motion.div>
                        <motion.div
                            className='mx-4'
                            initial='closed'
                            animate='open'
                            exit='closed'
                            variants={sideVariants}
                        >
                            <motion.h1
                                variants={itemVariants}
                                className='mx-1 text-xl'
                            >
                                <span className='p-1 bg-primary text-white'>
                                    Follow
                                </span>{" "}
                                Us
                            </motion.h1>
                            <motion.div
                                initial='closed'
                                animate='open'
                                exit='closed'
                                variants={sideVariants}
                                className='flex items-center space-x-3 my-3 mx-1'
                            >
                                <motion.a
                                    variants={itemVariants}
                                    className='p-1 border-[2px] border-primary'
                                >
                                    <AiOutlineTwitter className='h-6 w-6 text-primary' />
                                </motion.a>
                                <motion.a
                                    variants={itemVariants}
                                    className='p-1 border-[2px] border-primary'
                                >
                                    <AiOutlineInstagram className='h-6 w-6 text-primary' />
                                </motion.a>
                                <motion.a
                                    variants={itemVariants}
                                    className='p-1 border-[2px] border-primary'
                                >
                                    <AiOutlineLinkedin className='h-6 w-6 text-primary' />
                                </motion.a>
                            </motion.div>
                        </motion.div>
                    </motion.aside>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
