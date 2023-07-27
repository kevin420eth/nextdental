import React from 'react'
import './services.css'
import Link from 'next/link'

const Services = () => {
  return (
    <section className='home__services__section section'>
      <div className='home__sevices__container'>
      <h1 className='section__title'>診療項目</h1>
        {/* <ServicesSwiper /> */}
        <Link href="/services" className='home__services__button'>查看更多</Link>
      </div>
    </section>
  )
}

export default Services