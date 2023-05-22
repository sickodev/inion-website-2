import React from "react";

const About = () => {
    return (
        <>
            <section id='about' className='px-10'>
                <div className='flex justify-between flex-col md:flex-row md:py-16'>
                    <div className='py-4 w-full h-full'>
                        <h2 className='text-4xl md:text-6xl tracking-wide text-center md:text-left'>
                            Our{" "}
                            <span className='text-white underline decoration-slate-100 decoration-2 underline-offset-4 px-2 bg-primary'>
                                Company
                            </span>
                        </h2>
                    </div>
                    <div className='text-justify py-2 mx-2 md:w-[60rem]'>
                        <p className='my-2'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Proin ut maximus odio. Sed auctor porta
                            scelerisque. Suspendisse mattis lorem non volutpat
                            consequat. Sed eget aliquet ex, faucibus viverra
                            massa. Aenean ut metus nulla. Quisque dignissim
                            commodo ultricies. Fusce sodales eros at lorem
                            interdum, ac malesuada erat placerat. Donec risus
                            sem.
                        </p>
                        <p className='my-2'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Proin ut maximus odio. Sed auctor porta
                            scelerisque. Suspendisse mattis lorem non volutpat
                            consequat. Sed eget aliquet ex, faucibus viverra
                            massa. Aenean ut metus nulla. Quisque dignissim
                            commodo ultricies. Fusce sodales eros at lorem
                            interdum, ac malesuada erat placerat. Donec risus
                            sem.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
