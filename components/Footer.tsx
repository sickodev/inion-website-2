import Image from "next/image";
import React from "react";
import {
    AiFillFacebook,
    AiFillInstagram,
    AiFillTwitterSquare,
    AiFillYoutube,
    AiOutlineTwitter,
} from "react-icons/ai";
import { CiFacebook } from "react-icons/ci";

const Footer = () => {
    return (
        <section className='bg-black text-white px-4 py-3'>
            <div className='border border-white py-2 px-1 md:px-3'>
                <div className='flex items-center justify-between'>
                    <div className='w-32 h-32 bg-white relative'>
                        <Image
                            src='/logo.png'
                            className=' object-contain'
                            alt=''
                            fill
                        />
                    </div>
                    <div className='space-y-3'>
                        <h1 className='text-4xl border-l-4 border-primary pl-2'>
                            Follow Us
                            <hr className='opacity-40 border-t border-primary' />
                        </h1>
                        <div className='flex items-center gap-4'>
                            <a href='' className='p-0.5 '>
                                <AiFillFacebook className='h-8 w-8 text-primary' />
                            </a>
                            <a href='' className='p-0.5 '>
                                <AiFillInstagram className='h-8 w-8 text-primary' />
                            </a>
                            <a href='' className='p-0.5 '>
                                <AiFillYoutube className='h-8 w-8 text-primary' />
                            </a>
                            <a href='' className='p-0.5 '>
                                <AiOutlineTwitter className='h-8 w-8 text-primary' />
                            </a>
                        </div>
                    </div>
                </div>
                <hr className='mt-2 mb-1 w-128 opacity-50' />
                <div className=' md:flex md:space-x-8'>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
