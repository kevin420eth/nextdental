import Image from "next/image"
import banner from '/public/images/banner.png'
import './page.css'

export const metadata = {
    title: '澄臻美學牙醫診所 - 最新消息',
    description: '台中市最優值的牙醫診所',
}

const News = () => {
    return (
        <div>
            <div className='banner__container'>
                <Image className='banner__image' src={banner} alt="banner" />
            </div>
            <section className='about__section section '>
                <p className='section__title'>最新消息</p>
            </section>
        </div>

    )
}

export default News