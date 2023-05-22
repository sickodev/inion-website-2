"use client";
import React from "react";
import { motion } from "framer-motion";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaUniversity } from "react-icons/fa";
type Props = {};

const ReviewCard = (props: Props) => {
    return (
        <div className='border-[1px] px-1 border-primary shadow-lg my-6'>
            <div className='py-4 px-2'>
                <div className='flex items-center  justify-center md:justify-between md:gap-6 w-full'>
                    <div className='p-2 mx-4 md:p-0'>
                        <motion.img
                            src='https://images.pexels.com/photos/2380794/pexels-photo-2380794.jpeg?auto=compress&cs=tinysrgb&w=600'
                            alt=''
                            height={50}
                            width={50}
                            className='md:h-16 md:w-16 rounded-full border-[1px] border-black'
                        />
                    </div>
                    <div className='h-12 border-r-[1px] border-primary' />
                    <div className='mx-2 mt-2 md:mt-0'>
                        <h4 className='font-bold text-xl'>Ben Dover</h4>
                        <h5 className='text-[12px] text-gray-600'>
                            Senior Physician
                        </h5>
                    </div>
                    <div className='hidden md:block h-12 border-r-[1px] border-primary' />
                    <div className='md:flex md:flex-col gap-4 hidden'>
                        <AiOutlineLinkedin className='h-7 w-7 transition-all duration-200 ease-out hover:text-secondary grayscale hover:grayscale-0' />
                        <FaUniversity className='h-7 w-7 transition-all duration-200 ease-out hover:text-secondary grayscale hover:grayscale-0' />
                    </div>
                </div>
            </div>
            <div className='border-b-[2px] border-primary'></div>
            <div className='md:py-4'>
                <div className='text-justify text-sm mx-1'>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla mi enim, tempus hendrerit scelerisque at, interdum
                        ut metus. Cras commodo est a massa vestibulum, a
                        vestibulum velit laoreet. Duis vel vestibulum magna, ut
                        ultricies mauris.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;
