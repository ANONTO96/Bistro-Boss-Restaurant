import Heading from "./shared/heading";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const Testimonials = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section className="my-10">
            <Heading
                subHeading="What Our Client Say"
                heading="Testimonials"></Heading>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper lg:w-[80%]">
                {
                    reviews.map(review => <SwiperSlide key={review._id}
                        review={review}>
                        <div className="flex flex-col justify-center items-center px-20 space-y-6">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <img src="https://img.icons8.com/?size=100&id=ecaqBFnp1gnY&format=png&color=000000" alt="" />
                            <p className="font-light text-lg text-black">{review.details}</p>
                            <h3 className="text-2xl text-orange-500">{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;