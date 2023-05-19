"use client";

import photo3 from "@/public/photo3.png";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { Raleway } from "next/font/google";
import Image from "next/image";

const raleway = Raleway({ subsets: ["latin"], weight: ["700"] });

const Hero = () => {
    return (
        <div className='overflow-x-hidden hidden lg:block bg-gradient-to-b from-white from-10% rounded-b-md via-sky-300 via-70% to-blue-500 to-90%'>
            <div className='px-2 my-2'>
                <motion.h1
                    className={`text-7xl italic text-slate-900 text-center py-1 ${raleway.className}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className='underline underline-offset-4'>Lorem</span>{" "}
                    Ipsum
                </motion.h1>
                <motion.h1
                    className={`text-7xl -skew-x-12 text-center ml-16 pb-4 ${raleway.className}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className='underline underline-offset-4'>Dolor</span>{" "}
                    Sit Amet
                </motion.h1>
            </div>
            <div className='w-full flex justify-center p-2 '>
                <motion.button
                    type='button'
                    className='p-2 shadow-md bg-white'
                    transition={{ duration: 0.2 }}
                    whileHover={{ borderRadius: 30, shadow: "15px" }}
                >
                    <p className='flex items-center gap-2 text-blue-500 font-bold'>
                        Get in Touch <ArrowLongRightIcon className='h-4 w-4' />
                    </p>
                </motion.button>
            </div>
            <div className='w-full flex justify-between mt-10'>
                <div className='p-6 basis-1/3 bg-gradient-to-b from-transparent to-white shadow-lg rounded-r-[30px] rounded-b-none'>
                    <motion.h4
                        className='text-4xl mb-2 text-white/90 italic text-left'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4 }}
                    >
                        Neque porro quisquam
                    </motion.h4>
                    <p className='text-justify'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Maecenas vel ultricies ligula, eu tristique nibh.
                        Vivamus eget mattis lectus, eu viverra lectus. Morbi sit
                        amet purus a libero fermentum consectetur. Sed accumsan
                        erat ac lectus commodo hendrerit. Maecenas eu lacus vel
                        sem finibus porta. Mauris placerat fringilla turpis non
                        aliquam. Maecenas varius ante et nulla iaculis blandit.
                        Aliquam in tellus quis sem vehicula congue quis et erat.
                        Etiam eget vehicula erat. Curabitur augue mi, iaculis ut
                        turpis id, euismod consequat est.
                    </p>
                </div>
                <div className=' h-[22rem] w-[15rem] rounded-t-[80px] bg-white shadow-lg'></div>
                {/* Absolute Class */}
                <div className='absolute bottom-4 left-[37rem]'>
                    <Image
                        src={photo3}
                        alt=''
                        height={300}
                        width={350}
                        className=''
                    />
                </div>
                <div className='p-6 basis-1/3 bg-gradient-to-b from-transparent to-white shadow-lg rounded-l-[30px] rounded-b-none'>
                    <motion.h4
                        className='text-4xl mb-2 text-white/90 italic text-left'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4 }}
                    >
                        Neque porro quisquam
                    </motion.h4>
                    <p className='text-justify'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Maecenas vel ultricies ligula, eu tristique nibh.
                        Vivamus eget mattis lectus, eu viverra lectus. Morbi sit
                        amet purus a libero fermentum consectetur. Sed accumsan
                        erat ac lectus commodo hendrerit. Maecenas eu lacus vel
                        sem finibus porta. Mauris placerat fringilla turpis non
                        aliquam. Maecenas varius ante et nulla iaculis blandit.
                        Aliquam in tellus quis sem vehicula congue quis et erat.
                        Etiam eget vehicula erat. Curabitur augue mi, iaculis ut
                        turpis id, euismod consequat est.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Hero;
