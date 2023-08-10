"use client"
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules'

import servicesData from '@/data/servicesData'

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
                        <Link href={`/services/${item.route}`}>
                            <Image src={item.serviceImage} alt={`澄臻美學牙醫診所 - ${item.serviceName}`}></Image>
                            <div className='home__team__slide__mask'>
                                <p>{item.serviceName}</p>
                            </div>
                        </Link>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}

export default ServicesSwiper