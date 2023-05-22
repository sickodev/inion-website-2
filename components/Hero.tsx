"use client";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section className='py-8' id='home'>
            <div className='flex mx-10 flex-col md:flex-row justify-between'>
                <div className='my-16'>
                    <div className='md:w-[30rem]'>
                        <h1 className='text-4xl md:text-5xl'>
                            Lorem ipsum{" "}
                            <span className='text-white underline underline-offset-4 decoration-[2px] bg-primary px-1'>
                                dolor
                            </span>{" "}
                            sit amet.
                        </h1>
                    </div>
                    <p className='text-justify text-sm my-4 font-bold text-gray-600'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin ut maximus odio. Sed auctor porta scelerisque.
                        Suspendisse mattis lorem non volutpat consequat. Sed
                        eget aliquet ex, faucibus viverra massa. Aenean ut metus
                        nulla.
                    </p>
                    <motion.button
                        className='border-2 p-2 bg-secondary text-white border-black'
                        initial={{ boxShadow: "0 0 10px rgba(0,0,0,0.3)" }}
                        whileHover={{
                            boxShadow: "0 0 10px rgba(0,0,0,0.7)",
                        }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <h5>Get in Touch</h5>
                    </motion.button>
                </div>
                <div className=''>
                    <motion.img
                        src='https://cdn.dribbble.com/users/6985884/screenshots/15201666/media/e738381a540137fe1b5b7ec20abf4b62.gif'
                        alt=''
                        height={1200}
                        width={2500}
                        className='md:-my-8 md:mx-10 object-contain'
                    ></motion.img>
                </div>
            </div>
        </section>
    );
};

export default Hero;
