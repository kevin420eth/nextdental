import Image from 'next/image'
import banner from '/public/images/banner.png'
import './page.css'

export const metadata = {
    title: '澄臻美學牙醫診所 - 診所環境',
    description: '台中市最優值得牙醫診所',
}

const Enviroment = () => {
    return (
        <div>
            <div className='banner__container'>
                <Image className='banner__image' src={banner} alt="banner" />
            </div>
            <section className='enviroment__section section'>
                Enviroment
            </section>
        </div>

    )
}

export default Enviroment