import React from "react";
import ProductCard from "./ProductCard";

const products = [
    {
        id: 1,
        name: "Surgery Simulator",
        description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi facere, aut laudantium corrupti quaerat veritatis perferendis. Reiciendis nihil voluptas, earum harum doloribus nostrum rem, laboriosam dolores perferendis eveniet neque officia!",
        src: "",
    },
    {
        id: 2,
        name: "School VR",
        description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi facere, aut laudantium corrupti quaerat veritatis perferendis. Reiciendis nihil voluptas, earum harum doloribus nostrum rem, laboriosam dolores perferendis eveniet neque officia!",
        src: "",
    },
];

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
                    {products.map((product) => (
                        <>
                            <ProductCard
                                key={product.id}
                                name={product.name}
                                description={product.description}
                            />
                        </>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
