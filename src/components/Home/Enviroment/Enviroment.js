import Image from 'next/image'
import './enviroment.css'

import enviroment_0 from '/public/images/enviroment_0.png'
import enviroment_3 from '/public/images/enviroment_3.png'

const Enviroment = () => {
    return (
        <section className='home__enviroment__section section'>
            <div className='home__enviroment__container'>
                <Image
                    className='home__enviroment__image shadow'
                    src={enviroment_0}
                    alt=''
                />
                <Image
                    className='home__enviroment__image shadow'
                    src={enviroment_3}
                    alt=''
                />
                <div className='home__enviroment__text__container'>
                    <p>最頂級的醫療設備</p>
                    <p>提供前所未有的精密治療</p>
                </div>
                <div className='home__enviroment__text__container'>
                    <p>極度隱私的診療空間</p>
                    <p>給您最完美的醫療體驗</p>
                </div>
            </div>
        </section>
    )
}

export default Enviroment