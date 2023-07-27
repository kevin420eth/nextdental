import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules'

import servicesData from '../../../data/servicesData'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import './servicesSwiper.css'

const ServicesSwiper = () => {
    return (
        <Swiper
            className="home__services__swiper"
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            navigation={true}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        >
            {servicesData.map((item, key) => {
                return (
                    <SwiperSlide className='home__services__slide shadow 646' key={key}>
                        <img src={item.serviceImage} alt={item.serviceName} />
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}

export default ServicesSwiper