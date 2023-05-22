import React from "react";
import ReviewCard from "./ReviewCard";

const ReviewsM = () => {
    return (
        <section id='testimonials' className='md:hidden'>
            <div className='mx-12'>
                <h2 className='text-center text-[32px]'>
                    What{" "}
                    <span className='text-white  p-1 bg-primary underline underline-offset-4 decoration-[2px]'>
                        People Say
                    </span>
                </h2>
            </div>
            <div className='mx-12 py-8 gap-16 scrollbar-hide'>
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
            </div>
        </section>
    );
};

export default ReviewsM;
