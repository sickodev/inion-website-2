import React from "react";
import HeroContent from "./(shared)/components/HeroContent";
import Products from "./(shared)/components/Products";

const Page = () => {
    return (
        <main>
            <HeroContent className='py-2' />
            <Products />
        </main>
    );
};

export default Page;
