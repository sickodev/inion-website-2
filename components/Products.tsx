import React from "react";
import ProductCard from "./ProductCard";

const Products = () => {
    return (
        <section id='products'>
            <div className='mx-12 pt-6 pb-2'>
                <div className='w-full'>
                    <h2 className='text-4xl md:text-5xl text-center'>
                        Our{" "}
                        <span className='text-white underline decoration-slate-100 decoration-2 underline-offset-4 bg-primary px-2'>
                            Products
                        </span>
                    </h2>
                </div>
                <div className='flex flex-col md:flex-row items-center justify-center gap-8 py-4'>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
        </section>
    );
};

export default Products;
