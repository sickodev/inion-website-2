import Image from "next/image";
import React from "react";
import {
    AiOutlineLinkedin,
    AiOutlineMail,
    AiOutlinePhone,
} from "react-icons/ai";
import { HiGlobeAsiaAustralia } from "react-icons/hi2";

const Footer = () => {
    return (
        <section className=''>
            <div className='mx-12'>
                <div className='w-full flex items-center justify-between md:justify-center md:gap-8 mb-6'>
                    <Image src='/logo.png' alt='' height={50} width={50} />
                    <div className='flex items-center justify-between gap-2'>
                        <button className='px-2 grayscale hover:grayscale-0 text-secondary transition-all duration-200 ease-out active:scale-90'>
                            <AiOutlineLinkedin className='h-6 w-6' />
                        </button>
                        <button className='px-2 grayscale hover:grayscale-0 text-secondary transition-all duration-200 ease-out active:scale-90'>
                            <AiOutlinePhone className='h-6 w-6 rotate-90' />
                        </button>
                        <button className='px-2 grayscale hover:grayscale-0 text-secondary transition-all duration-200 ease-out active:scale-90'>
                            <HiGlobeAsiaAustralia className='h-6 w-6' />
                        </button>
                    </div>
                </div>
                <div className='w-full text-left'>
                    <h3 className='font-bold text-lg'>Contact :</h3>
                    <ul>
                        <li>123</li>
                        <li>Street 11</li>
                        <li>New York, NY</li>
                        <li>123456</li>
                    </ul>
                </div>
                <div className='w-full text-center'>
                    <div className='flex items-center justify-center gap-4'>
                        <AiOutlinePhone className='h-6 w-6 rotate-90' />
                        <p>+91-12345-67890</p>
                    </div>
                    <div className='flex items-center justify-center gap-3'>
                        <AiOutlineMail className='h-6 w-6' />
                        <p>name@email.com</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
