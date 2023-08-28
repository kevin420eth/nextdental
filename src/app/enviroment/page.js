import Image from 'next/image'
import banner from '/public/images/banner.png'
import './page.css'
import enviroment__0 from '/public/images/enviroment_0.png'
import enviroment__1 from '/public/images/enviroment_1.png'
import enviroment__2 from '/public/images/enviroment_2.png'
import enviroment__3 from '/public/images/enviroment_3.png'

export const metadata = {
    title: '澄臻美學牙醫診所 - 診所環境',
    description: '台中最優值的牙醫診所',
}

const Enviroment = () => {
    return (
        <div>
            <div className='banner__container'>
                <Image className='banner__image' src={banner} alt="banner" />
            </div>
            <section className='enviroment__section section'>
                <p className='section__title'>診所環境</p>
                <div className='enviroment__container'>
                    <div className='enviroment__content__container'>
                        <div className='enviroment__image__container shadow'>
                            <Image className='enviroment__image' src={enviroment__0} />
                        </div>
                        <div className='enviroment__text__container'>
                            <p className='enviroment__text'>VIP 獨立診間</p>
                        </div>
                    </div>

                    <div className='enviroment__content__container'>
                        <div className='enviroment__image__container shadow'>
                            <Image className='enviroment__image' src={enviroment__1} />
                        </div>
                        <div className='enviroment__text__container'>
                            <p className='enviroment__text'>AR虛擬治療</p>
                        </div>
                    </div>

                    <div className='enviroment__content__container'>
                        <div className='enviroment__image__container shadow'>
                            <Image className='enviroment__image' src={enviroment__2} />
                        </div>
                        <div className='enviroment__text__container'>
                            <p className='enviroment__text'>白色恐怖治療診間</p>
                        </div>
                    </div>

                </div>
            </section>
        </div>

    )
}

export default Enviroment