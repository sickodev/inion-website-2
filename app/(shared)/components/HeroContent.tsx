"use client";
import React, { useEffect, useState } from "react";
import { Unbounded } from "next/font/google";
import ReactPlayer from "react-player/lazy";
import { SpeakerWaveIcon, SpeakerXMarkIcon } from "@heroicons/react/24/outline";

type Props = {
    className?: string;
};

const video_src =
    "https://www.youtube.com/embed/ATVGl9wOJsM?controls=0&amp;start=1";

const HeroContent = ({ className }: Props) => {
    //Hydration Issue
    const [domLoaded, setDomLoaded] = useState<boolean>(false);

    useEffect(() => {
        setDomLoaded(true);
    }, []);

    return (
        <section
            id='Home'
            className='bg-gradient-to-r from-[#77CAFF] to-[#A36BFF] py-4'
        >
            <div className='flex justify-center flex-col'>
                {domLoaded && (
                    <>
                        <div className='player-container relative'>
                            <ReactPlayer muted url={video_src} playing loop />
                            <div className='lg:absolute hidden lg:flex flex-col items-center text-black justify-between'>
                                <h1 className='py-6 lg:py-12 font-bold text-center text-7xl lg:text-9xl'>
                                    Lorem Ipsum
                                </h1>
                                <h3 className='text-2xl lg:text-4xl py-2'>
                                    is simply dummy text of the printing and
                                    typesetting{" "}
                                    <span className='bg-gray-400 rounded-lg mx-2 p-1'>
                                        industry
                                    </span>
                                    .
                                </h3>
                                <h5 className='text-xl lg:text-4xl text-justify font-normal m-2'>
                                    Lorem Ipsum has been the industry &#39;s
                                    standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of
                                    type and scrambled it to make a type
                                    specimen book. It has survived not only five
                                    centuries, but also the leap into electronic
                                    typesetting, remaining essentially
                                    unchanged.
                                </h5>
                            </div>
                            <div className='lg:hidden flex flex-col justify-between items-center'>
                                <h1 className='pt-8 lg:py-12 font-bold text-center text-7xl lg:text-9xl'>
                                    Lorem Ipsum
                                </h1>
                                <h3 className='text-2xl lg:text-4xl text-justify p-2'>
                                    is simply dummy text of the printing and
                                    typesetting industry.
                                </h3>
                                <h5 className='hidden sm:block text-md sm:text-xl md:p-0 py-3 lg:text-4xl text-justify font-normal m-2'>
                                    Lorem Ipsum has been the industry &#39;s
                                    standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of
                                    type and scrambled it to make a type
                                    specimen book. It has survived not only five
                                    centuries, but also the leap into electronic
                                    typesetting, remaining essentially
                                    unchanged.
                                </h5>
                            </div>
                        </div>
                        <h5 className='sm:hidden md:p-0 px-2 py-2 text-justify font-normal m-2'>
                            Lorem Ipsum has been the industry &#39;s standard
                            dummy text ever since the 1500s, when an unknown
                            printer took a galley of type and scrambled it to
                            make a type specimen book. It has survived not only
                            five centuries, but also the leap into electronic
                            typesetting, remaining essentially unchanged.
                        </h5>
                    </>
                )}
            </div>
        </section>
    );
};

export default HeroContent;
