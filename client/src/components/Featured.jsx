import React from 'react';
import Heading from './shared/heading';
import featuredImg from "../assets/home/featured.jpg"

const Featured = () => {
    return (
        <div className='featured-item bg-fixed pt-8 mb-6'>
            <Heading
                subHeading={"Check It Out"}
                heading={"Featured Item"}></Heading>
            <div className='md:flex justify-center items-center pb-20 px-32 gap-8 space-y-4 bg-slate-600 bg-opacity-35'>
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className='space-y-2 text-white'>
                    <p>
                        "Discover Our Featured Delights 🍽️
                        "
                    </p>
                    <p>
                    Indulge in the finest flavors with our handpicked signature dishes, crafted with passion and premium ingredients. Each bite tells a story of taste, quality, and culinary excellence. Explore what makes Bistro Boss the talk of the town!
                    </p>
                    <button className="btn border-b-4  btn-outline text-white">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;