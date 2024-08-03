// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// import "swiper/css/autoplay";
// import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

// const SwiperSlider = () => {
//   return (
//     <>
//       <div className="container">
//         <Swiper
//           effect={"coverflow"}
//           grabCursor={true}
//           centeredSlides={true}
//           loop={true}
//           slidesPerView={"auto"}
//           coverflowEffect={{
//             rotate: 0,
//             stretch: 0,
//             depth: 100,
//             modifier: 2.5,
//           }}
//           pagination={{ el: ".swiper-pagination", clickable: true }}
//           autoplay={{
//             delay: 3000,
//             disableOnInteraction: false,
//           }}
//           modules={[EffectCoverflow, Pagination, Autoplay]}
//           className="swiper_container"
//         >
//           <SwiperSlide>
//             <img src={banana} alt="banana" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img src={pineapple} alt="pineapple" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img src={dragon} alt="dragon" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img src={malta} alt="malta" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img src={papaya} alt="papaya" />
//           </SwiperSlide>

//           <div className="swiper-pagination"></div>
//         </Swiper>
//       </div>
//     </>
//   );
// };

// export default SwiperSlider;


// Carousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import banana from "../../assets/banana.JPG";
import pineapple from "../../assets/pineapple.JPG";
import dragon from "../../assets/dragon.JPG";
import malta from "../../assets/malta.JPG";
import papaya from "../../assets/papaya.JPG";
import './Carousel.css'; // Optional: For custom styling

const  SwiperSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, 
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div>
          <img src={banana} alt="Slide 1" />
        </div>
        <div>
          <img src={pineapple} alt="Slide 1" />
        </div>
        <div>
          <img src={dragon} alt="Slide 1" />
        </div>
        <div>
          <img src={malta} alt="Slide 1" />
        </div>
        <div>
          <img src={papaya} alt="Slide 1" />
        </div>

        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
};

export default  SwiperSlider;

