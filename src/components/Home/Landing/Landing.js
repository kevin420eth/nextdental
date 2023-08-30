import './landing.css'

const Landing = () => {
  return (
    <section className='home__section section'>
      <div className='video__container'>
        <iframe
          src='https://www.youtube.com/embed/LOqec3VrjYQ?si=fkvsFVeu-uT8Rzz_'
          title='日日美學牙醫診所'
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