import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import slide1 from "../assets/home/slide1.jpg";
import slide2 from "../assets/home/slide2.jpg";
import slide3 from "../assets/home/slide3.jpg";
import slide4 from "../assets/home/slide4.jpg";
import slide5 from "../assets/home/slide5.jpg";

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import Heading from './shared/heading';

const Category = () => {
    return (
           <section>
            <Heading
            subHeading={"From 11.00am to 11.00pm"}
            heading={"Order Online"}>
            </Heading>
           <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={slide1} alt="" />
        <h3 className='text-3xl lg:text-4xl uppercase text-center text-black -m-14'>Salad</h3></SwiperSlide>
        <SwiperSlide><img src={slide2} alt="" />
        <h3 className='text-3xl lg:text-4xl uppercase text-center text-black -m-14'>Pizza</h3></SwiperSlide>
        <SwiperSlide><img src={slide3} alt="" />
        <h3 className='text-3xl lg:text-4xl uppercase text-center text-black -m-14'>Soup</h3></SwiperSlide>
        <SwiperSlide><img src={slide4} alt="" />
        <h3 className='text-3xl lg:text-4xl uppercase text-center text-black -m-14'>Cakes</h3></SwiperSlide>
        <SwiperSlide><img src={slide5} alt="" /><h3 className='text-3xl lg:text-4xl uppercase text-center text-black -m-14 pb-28'>Salad</h3></SwiperSlide>
      </Swiper>
           </section>
    );
};

export default Category;