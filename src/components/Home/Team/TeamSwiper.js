"use client"
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules'

import doctorData from '@/data/doctorData'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import './teamSwiper.css'

const TeamSwiper = () => {
    return (
        <Swiper
            className="home__team__swiper"
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
            {doctorData.map((item, key) => {
                return (
                    <SwiperSlide className='home__team__slide shadow' key={key}>
                        <Link href={`/team/${item.route}`}>
                            <Image src={item.profilePhoto} alt={`澄臻美學牙醫診所 - ${item.name}${item.title}`}></Image>
                            <div className='home__team__slide__mask'>
                                <p>{item.name} {item.title}</p>
                            </div>
                        </Link>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}

export default TeamSwiper