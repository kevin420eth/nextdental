import React from 'react'
import './landing.css'

const Landing = () => {
  return (
    <section className='home__section section'>
      <div className='video__container'>
        <iframe
          src='https://www.youtube.com/embed/Yr-ZqzxTnE0?controls=0&autoplay=1&mute=1&loop=1&controls=0&fs=0&iv_load_policy=3&rel=0&modestbranding=1&playsinline=1&enablejsapi=1'
          title='澄臻美學牙醫診所'
          width='944'
          height='630'
          frameBorder="0"
          loading="eager"
        />
      </div>
    </section>
  )
}

export default Landing