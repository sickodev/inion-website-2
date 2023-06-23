import TabGroup from "@/components/TabGroup";
import React from "react";

const Home = () => {
    return (
        <section className='py-5 mx-3'>
            <div className='flex justify-between space-x-3'>
                <div className='basis-1/2'>
                    <h1 className='text-5xl pb-2'>
                        <span className='p-0.5 bg-primary text-white underline underline-offset-2 decoration-2'>
                            School
                        </span>{" "}
                        VR
                    </h1>
                    <p className='mt-3 mb-1 font-bold text-gray-500 text-md text-justify'>
                        Inion VR develops an immersive VR learning platform that
                        helps you learn new skills faster and easier than ever
                        before.
                    </p>
                    <button className='shadow-lg shadow-black/40 my-2 text-white tracking-wide bg-secondary p-1.5 border-2 border-black transition hover:scale-105 active:scale-90'>
                        Learn more
                    </button>
                </div>
                <div className='basis-1/2 bg-black h-72'></div>
            </div>
            <div className='my-3'>
                <div>
                    <h2 className='text-4xl font-bold'>
                        Discover the <span className='text-primary'>VR</span>{" "}
                        way to learn
                    </h2>
                    <div className='w-full h-56 bg-black my-2'></div>
                    <p className='my-2 text-justify'>
                        With our innovative approach to virtual reality, we make
                        learning fun and interactive, allowing you to get the
                        most out of every session.
                    </p>
                </div>
            </div>
            <hr />
            <h2 className='text-3xl md:text-4xl font-bold mt-4'>
                <span className='bg-white py-1 text-primary'>Benefits</span> as
                add-on to current education
            </h2>
            <hr />
            <div className='my-2'>
                <div className='p-2 shadow-sm'>
                    <h3 className='text-2xl'>Unlock new possibilities</h3>
                    <div className='h-48 w-full bg-black mt-2'></div>
                    <p className='my-2 text-justify'>
                        Inion VR provides an immersive VR experience that allows
                        you to explore different concepts and topics like never
                        before. Our platform is designed to take your learning
                        experience beyond the traditional classroom setting,
                        giving you the freedom to explore and discover.
                    </p>
                </div>
                <div className='p-2 shadow-sm'>
                    <h3 className='text-2xl'>Experience real-time learning</h3>
                    <div className='h-48 w-full bg-black mt-2'></div>
                    <p className='my-2 text-justify'>
                        Interact with virtual objects and characters in
                        real-time, allowing you to gain a better understanding
                        of complex topics and ideas. Our platform also supports
                        group collaboration, so you can work together with other
                        students to solve problems and deepen your knowledge.
                    </p>
                </div>
                <div className='p-2 shadow-sm'>
                    <h3 className='text-2xl'>
                        Stay up-to-date with cutting-edge technology
                    </h3>
                    <div className='h-48 w-full bg-black mt-2'></div>
                    <p className='my-2 text-justify'>
                        Our VR schooling takes advantage of cutting-edge
                        technology such as 360 vision, gesture control, and
                        artificial intelligence (AI) to ensure that you stay
                        up-to-date with the latest advancements in the
                        classroom. Plus, our intuitive user interface makes it
                        easy for anyone to use VR technology.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Home;
