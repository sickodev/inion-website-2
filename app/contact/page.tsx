"use client";
import Image from "next/image";
import React, { useState } from "react";

type FormProps = {
    state: string;
    message?: string;
};

const Page = () => {
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [form, setForm] = useState<FormProps>({
        state: "",
        message: "",
    });

    const handleChange = (e: any) => {
        setInputs((prev) => ({
            ...prev,
            [e.target.id]: e.target.value,
        }));
    };

    const onSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (inputs.name && inputs.email && inputs.message) {
            setForm({ state: "loading" });
            try {
                const res = await fetch(`/api/contact`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(inputs),
                });

                const { error } = await res.json();

                if (error) {
                    setForm({ state: "error", message: error });
                    return;
                }

                setForm({
                    state: "success",
                    message: "Your message was sent successfully.",
                });
                setInputs({
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                });
            } catch (error) {
                setForm({
                    state: "error",
                    message: "Something went wrong",
                });
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
                    <p className='md:my-8 my-6 text-justify text-sm text-gray-500 md:w-[65vw]'>
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

                            {form?.state === "loading" ? (
                                <div>Sending....</div>
                            ) : form?.state === "error" ? (
                                <div>{form?.message}</div>
                            ) : (
                                form?.state === "success" && (
                                    <div>Sent successfully</div>
                                )
                            )}
                        </div>
                    </form>
                    <div className='hidden md:block cols-span-1'>
                        <div className='mx-4 my-12'>
                            <Image
                                src='https://cdni.iconscout.com/illustration/premium/thumb/doctor-is-studying-medicine-using-vr-5380002-4503278.png'
                                alt=''
                                width={1500}
                                height={1300}
                                className='object-contain'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Page;
