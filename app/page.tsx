import Hero from "@/components/Hero";
import React from "react";
import About from "@/components/About";
import Products from "@/components/Products";
import ReviewsL from "@/components/ReviewsL";
import ReviewsM from "@/components/ReviewsM";
import Question from "@/components/Question";
import Footer from "@/components/Footer";

const Page = () => {
    return (
        <main>
            <Hero />
            {/* <div className='h-12 w-full bg-gradient-to-b from-white to-primary'></div> */}
            <About />
            <Products />
            {/* <div className='h-12 w-full bg-gradient-to-b primary to-white'></div> */}
            <Question />
        </main>
    );
};

export default Page;
