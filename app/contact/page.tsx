"use client";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import {
    AiOutlineInstagram,
    AiOutlineLinkedin,
    AiOutlineTwitter,
} from "react-icons/ai";

const Page = () => {
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [form, setForm] = useState("");

    const handleChange = (e: any) => {
        setInputs((prev) => ({
            ...prev,
            [e.target.id]: e.target.value,
        }));
    };

    const onSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (inputs.name && inputs.email && inputs.message) {
            setForm("loading");
            try {
                const res = await fetch(`api/contact`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(inputs),
                });

                const { error } = await res.json();

                if (error) {
                    setForm("error");
                    return;
                }

                setForm("success");
                setInputs({
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                });
            } catch (error) {
                setForm("error");
            }
        }
    };
    return (
        <main>
            <hr />
            <div className='mx-2 my-4'>
                <div className='mx-2'>
                    <h1 className='text-4xl md:text-6xl underline-offset-4'>
                        <span className='bg-primary p-1 underline text-white '>
                            Contact
                        </span>{" "}
                        Us
                    </h1>
                    <p className='my-6 text-justify text-sm text-gray-500'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quisque eu quam tincidunt, accumsan augue elementum,
                        dignissim nulla. Praesent diam odio, maximus non rutrum
                        vel, rhoncus ac massa. Sed eu diam libero.
                    </p>
                </div>
                <div className=' my-4 p-2 grid grid-cols-1 md:grid-cols-3'>
                    <form
                        onSubmit={(e) => onSubmitForm(e)}
                        className='my-2 py-2 col-span-2'
                    >
                        <div className='px-1 flex flex-col'>
                            <label htmlFor='' className=''>
                                Name:
                            </label>
                            <input
                                id='name'
                                value={inputs.name}
                                onChange={handleChange}
                                type='text'
                                className='outline-none border-2 border-black focus:border-primary p-1 transition-all duration-200 ease-in'
                                placeholder='Jane Doe'
                                required
                            />
                        </div>
                        <div className='px-1 my-2 flex flex-col'>
                            <label htmlFor='' className=''>
                                Subject:
                            </label>
                            <input
                                id='subject'
                                value={inputs.subject}
                                onChange={handleChange}
                                type='text'
                                className='outline-none border-2 border-black focus:border-primary p-1 transition-all duration-200 ease-in'
                                placeholder='About the new product'
                            />
                        </div>
                        <div className='px-1 my-2 flex flex-col'>
                            <label htmlFor='' className=''>
                                Email:
                            </label>
                            <input
                                id='email'
                                value={inputs.email}
                                onChange={handleChange}
                                type='email'
                                className='outline-none border-2 border-black focus:border-primary p-1 transition-all duration-200 ease-in'
                                placeholder='xyz@example.com'
                                required
                            />
                        </div>
                        <div className='px-1 my-2 flex flex-col'>
                            <label htmlFor='' className=''>
                                Message:
                            </label>
                            <textarea
                                id='message'
                                value={inputs.message}
                                onChange={handleChange}
                                cols={20}
                                rows={10}
                                className='outline-none border-2 border-black focus:border-primary p-1 transition-all duration-200 ease-in'
                                placeholder='I loved your new product...'
                            />
                        </div>
                        <div className='flex items-center justify-between'>
                            <button
                                type='submit'
                                className='p-2 mx-1 text-white bg-secondary'
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
                <div className='-px-8 -my-5 '>
                    <div className='p-2'>
                        <h4 className='mb-3 text-xl'>
                            <span className='p-1 bg-primary text-white'>
                                Follow
                            </span>{" "}
                            Us
                        </h4>
                        <div className='flex items-center space-x-5 text-white'>
                            <a className='p-1 bg-primary'>
                                <AiOutlineTwitter className='h-6 w-6' />
                            </a>
                            <a className='p-1 bg-primary'>
                                <AiOutlineInstagram className='h-6 w-6' />
                            </a>
                            <a className='p-1 bg-primary'>
                                <AiOutlineLinkedin className='h-6 w-6' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Page;
