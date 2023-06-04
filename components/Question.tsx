"use client";
import React from "react";
import { motion } from "framer-motion";

const Question = () => {
    return (
        <motion.div
            className='mx-12 md:px-8 py-8'
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <div className='flex flex-col md:flex-row items-center justify-between'>
                <div className='text-center md:text-left w-full'>
                    <h2 className='text-3xl leading-relaxed'>
                        Do you have any{" "}
                        <span className='bg-primary px-2 text-white underline decoration-[2px] underline-offset-2'>
                            Question ?
                        </span>
                    </h2>
                </div>
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ boxShadow: "0 0 10px rgba(0,0,0,0.7)" }}
                    className='p-2 bg-secondary my-2 md:my-0 w-full md:w-48 border-2 border-black text-white'
                >
                    Contact Us
                </motion.button>
            </div>
        </motion.div>
    );
};

export default Question;
