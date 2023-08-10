import Link from 'next/link'
import Image from 'next/image'
import service_1 from '/public/images/service_1.png'
import service_3 from '/public/images/service_3.png'
import service_5 from '/public/images/service_5.png'
import ServicesSwiper from './ServicesSwiper'
import './services.css'


const Services = () => {
  return (
    <section className='home__services__section section'>
      <h1 className='section__title'>最專業的醫療技術</h1>
      <div className='home__sevices__container'>
        <div className='home__sevice__container'>
          <div className='home__service__image__container'>
            <Image src={service_1} alt='' className='home__service__image' />
          </div>
          <p className='home__service__text__title'>水感陶瓷貼片</p>
          <p className='home__service__text__description'>解放你微笑魅力</p>
        </div>

        <div className='home__sevice__container'>
          <div className='home__service__image__container'>
            <Image src={service_3} alt='' className='home__service__image' />
          </div>
          <p className='home__service__text__title'>全植牙</p>
          <p className='home__service__text__description'>無痛植牙好舒爽</p>
        </div>

        <div className='home__sevice__container'>
          <div className='home__service__image__container'>
            <Image src={service_5} alt='' className='home__service__image' />
          </div>
          <p className='home__service__text__title'>牙齒美白</p>
          <p className='home__service__text__description'>一白遮三醜</p>
        </div>

        <ServicesSwiper />
      </div>
      <Link href='/enviroment' className='primary__button'>
        查看診療項目
      </Link>
    </section>
  )
}

export default Services