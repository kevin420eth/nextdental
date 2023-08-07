import Image from 'next/image'
import Link from 'next/link'
import './enviroment.css'

import enviroment_3 from '/public/images/enviroment_3.png'

const Enviroment = () => {
    return (
        <section className='home__enviroment__section section'>
            <div className='home__enviroment__container'>
                <div className='home__enviroment__content__container'>
                    <div className='home__enviroment__image__container'>
                        <Image
                            className='home__enviroment__image shadow'
                            src={enviroment_3}
                            alt=''
                        />
                    </div>
                    <div className='home__enviroment__text__container'>
                        <h1 className='section__title'>最頂級的醫療設備</h1>
                        <p className='home__enviroment__text'>我們致力於給病患最好的醫療體驗與絕對的隱私，在這裡你可以享受國外進口的5星級葉克膜，也有VIP獨立診間讓你能夠安心被拔牙，如果你帶小朋友來也不用害怕他哭鬧，我們的每個診間都配有最新的PS5與Ipad 13，讓小朋友在不知不覺中完成拔牙，保證不會掉一滴眼淚。</p>
                    </div>
                </div>
                <Link href='/enviroment' className='home__enviroment__button'>
                    查看醫療設備
                </Link>
            </div>
        </section>
    )
}

export default Enviroment