"use client";
import { Tab } from "@headlessui/react";
import Image from "next/image";

const TabGroup = () => {
    return (
        <Tab.Group vertical>
            <Tab.List className='flex justify-evenly'>
                <Tab className='outline-none ui-selected:bg-primary ui-selected:text-white transition hover:bg-gray-100 px-8 rounded-xl'>
                    <h3 className='text-xl p-2'>
                        Discover the VR way to Learn
                    </h3>
                </Tab>
            </Tab.List>
            <Tab.Panels className='mt-1'>
                <Tab.Panel>
                    <div className='shadow-md shadow-black/30'>
                        <div className='flex justify-center'>
                            <div className='h-56 w-56 relative mx-16 object-contain mb-2'>
                                <Image
                                    src='https://cdn.dribbble.com/users/553013/screenshots/4135340/animation-vr-man-dribbble.gif'
                                    alt='image-1'
                                    fill
                                    className='object-cover'
                                />
                            </div>
                        </div>
                        <div className='bg-primary p-2 text-white text-justify'>
                            With our innovative approach to virtual reality, we
                            make learning fun and interactive, allowing you to
                            get the most out of every session
                        </div>
                        <div className='bg-primary px-2 -my-2'>
                            <button className='shadow-lg shadow-black/40 my-2 text-white tracking-wide bg-secondary p-1.5 border-2 border-black transition hover:scale-105 active:scale-90'>
                                Get Started
                            </button>
                        </div>
                    </div>
                </Tab.Panel>
            </Tab.Panels>
        </Tab.Group>
    );
};

export default TabGroup;
