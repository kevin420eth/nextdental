import Link from 'next/link'
import Image from 'next/image'
import './page.css'
import banner from '/public/images/banner.png'
import servicesData from '@/data/servicesData'

export const metadata = {
    title: '澄臻美學牙醫診所 - 診療項目',
    description: '台中最優值的牙醫診所',
}

const Services = () => {
    return (
        <div>
            <div className='banner__container'>
                <Image className='banner__image' src={banner} alt="banner" />
            </div>
            <section className='services__section section '>
                <p className='section__title'>診療項目</p>
                <div className='services__container'>
                    {servicesData.map((item, key) => {
                        return (
                            <Link className='services__showcase' href={`/services/${item.route}`} key={key}>
                                <div className='services__showcase__image__container'>
                                    <Image className='services__showcase__image' src={item.serviceImage} alt={`澄臻美學牙醫診所 - ${item.serviceName}`} />
                                </div>
                                <div className='services__showcase__text__container'>
                                    <p className='services__showcase__service__name'>{item.serviceName}</p>
                                    <p className='services__showcase__short__description'>{item.serviceShortDescription}</p>
                                </div>
                                <button className='services__showcase__button'>查看更多</button>
                            </Link>
                        )
                    })}
                </div>
            </section>
        </div>
    )
}

export default Services