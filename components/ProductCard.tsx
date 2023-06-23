"use client";
import React from "react";
import { motion } from "framer-motion";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

type Props = {
    src?: string;
    name: string;
    description?: string;
};

const ProductCard = ({ src, name, description }: Props) => {
    const router = useRouter();
    const handleClick = () => {
        const url = name.toLowerCase().split(" ").join("");
        router.push(`/products/${url}`);
    };
    return (
        <motion.div
            className='my-4 shadow-xl'
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.4, staggerChildren: 0.5 }}
            whileInView={{ opacity: 1, y: 0 }}
        >
            <div className=''>
                <motion.img
                    src='https://images.squarespace-cdn.com/content/v1/601a737dd82e4b0380b3b9c1/1612859497215-YLUVDVENUALS2K2TRASN/Campbell-Medical-Animation-Surgical-Teatments-of-Microtia.gif'
                    alt=''
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                />
            </div>
            <div className='p-2 bg-white'>
                <div className='flex items-center justify-between p-2 border-b-[2px] border-primary/60'>
                    <h4 className='md:text-2xl text-xl text-secondary font-bold'>
                        {name}
                    </h4>
                    <motion.button
                        onClick={handleClick}
                        className='text-white border-2 p-1 bg-secondary border-black'
                        whileTap={{ scale: 0.9 }}
                    >
                        <ChevronDoubleRightIcon className='h-6 w-6' />
                    </motion.button>
                </div>
                <p className='text-sm md:text-md text-justify py-2 px-1'>
                    {description}
                </p>
            </div>
        </motion.div>
    );
};

export default ProductCard;
