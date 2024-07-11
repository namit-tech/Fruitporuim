// src/components/SwiperSlider.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';


const SwiperSlider = () => {
    return (
        <>
            <div className='container'>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5,
                    }}
                    pagination={{ el: '.swiper-pagination', clickable: true }}
                    navigation={{
                        nextEl:'.swiper-button-next',
                        prevEl:'.swiper-button-prev',
                        clickable: true,
                    }}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    className="swiper_container"
                >
                    <SwiperSlide>
                        <img src="https://images.unsplash.com/photo-1716117274929-875f37a83fe5?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://images.unsplash.com/photo-1716117274929-875f37a83fe5?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://images.unsplash.com/photo-1716117274929-875f37a83fe5?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://images.unsplash.com/photo-1716117274929-875f37a83fe5?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://images.unsplash.com/photo-1716117274929-875f37a83fe5?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://images.unsplash.com/photo-1716117274929-875f37a83fe5?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://images.unsplash.com/photo-1716117274929-875f37a83fe5?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    </SwiperSlide>
                    <div className='slider-controler'>
                        <div className='swiper-button-prev slider-arrow'>
                            <ion-icon name="arrow-back-outline"></ion-icon>
                        </div>
                        <div className='swiper-button-next slider-arrow'>
                            <ion-icon name="arrow-forward-outline"></ion-icon>
                        </div>
                        <div className='swiper-pagination'></div>
                    </div>
                </Swiper>
            </div>

        </>
    );
};

export default SwiperSlider;
