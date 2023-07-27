import React from 'react'
import './landing.css'
// import video from '/public/videos/video.mp4'

const Landing = () => {
  return (
    <section className='home__section section'>
      <div className='video__container'>
        <iframe
          src='https://www.youtube.com/embed/Yr-ZqzxTnE0?controls=0&fs=0&iv_load_policy=3&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&origin=https%3A%2F%2Fwww.gemray.tw&widgetid=1'
          width='500'
          height='300'
          autoPlay={true}
          loop
          muted
          type='video/mp4'>
        </iframe>
      </div>
    </section>
  )
}

export default Landing