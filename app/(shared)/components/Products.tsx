import Image from "next/image";
import Link from "next/link";
import React from "react";

const Products = () => {
    return (
        <section
            id='products'
            className='bg-gradient-to-r to-[#A36BFF] from-[#77CAFF] pt-2'
        >
            <h1 className='lg:text-9xl font-bold text-7xl'>Products</h1>
            <hr className='border-[1px] border-black w-32 lg:w-96 my-1' />
            <div className='flex md:flex-row flex-col items-center justify-between gap-2'>
                <Link
                    href={"/"}
                    className='basis-1/3 p-6 transition-all duration-200 ease-in active:scale-90'
                >
                    <Image
                        src={
                            "https://images.unsplash.com/photo-1465804575741-338df8554e02?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80"
                        }
                        alt=''
                        className='w-full'
                        width={400}
                        height={200}
                    />
                    <div className='p-2 bg-white rounded-b-md'>
                        <h3 className='text-xl font-bold'>Surgery Simulator</h3>
                        <p className='text-justify'>
                            Contrary to popular belief, Lorem Ipsum is not
                            simply random text. It has roots in a piece of
                            classical Latin literature from 45 BC, making it
                            over 2000 years old. Richard McClintock, a Latin
                            professor at Hampden-Sydney College in Virginia,
                        </p>
                    </div>
                </Link>
                <Link
                    href={"/"}
                    className='basis-1/3 p-6 transition-all duration-200 ease-in active:scale-90'
                >
                    <Image
                        src={
                            "https://images.unsplash.com/photo-1465804575741-338df8554e02?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80"
                        }
                        alt=''
                        className='w-full'
                        width={400}
                        height={200}
                    />
                    <div className='p-2 bg-white rounded-b-md'>
                        <h3 className='text-xl font-bold'>Surgery Simulator</h3>
                        <p className='text-justify'>
                            Contrary to popular belief, Lorem Ipsum is not
                            simply random text. It has roots in a piece of
                            classical Latin literature from 45 BC, making it
                            over 2000 years old. Richard McClintock, a Latin
                            professor at Hampden-Sydney College in Virginia,
                        </p>
                    </div>
                </Link>
                <Link
                    href={"/"}
                    className='basis-1/3 p-6 transition-all duration-200 ease-in active:scale-90'
                >
                    <Image
                        src={
                            "https://images.unsplash.com/photo-1465804575741-338df8554e02?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80"
                        }
                        alt=''
                        className='w-full'
                        width={400}
                        height={200}
                    />
                    <div className='p-2 bg-white rounded-b-md'>
                        <h3 className='text-xl font-bold'>Surgery Simulator</h3>
                        <p className='text-justify'>
                            Contrary to popular belief, Lorem Ipsum is not
                            simply random text. It has roots in a piece of
                            classical Latin literature from 45 BC, making it
                            over 2000 years old. Richard McClintock, a Latin
                            professor at Hampden-Sydney College in Virginia,
                        </p>
                    </div>
                </Link>
            </div>
        </section>
    );
};

export default Products;
