import React from "react";
import ReviewCard from "./ReviewCard";

const ReviewsL = () => {
    return (
        <section className='mx-12 hidden md:block'>
            <div className='py-8'>
                <div className='w-full text-center'>
                    <h2 className='md:text-6xl text-3xl'>
                        What{" "}
                        <span className='text-white bg-primary p-2 underline decoration-2 underline-offset-2'>
                            People Say
                        </span>
                    </h2>
                </div>
                <div className='flex items-center flex-col md:flex-row justify-evenly overflow-x-scroll scrollbar-hide p-4 md:p-8 gap-4'>
                    <ReviewCard />
                    <ReviewCard />
                    <ReviewCard />
                </div>
            </div>
        </section>
    );
};

export default ReviewsL;
