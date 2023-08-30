import Image from 'next/image'
import './page.css'
import banner from '/public/images/banner.png'
import _servicesData from '@/data/servicesData'

export async function generateMetadata({ params }) {
    const serviceNamePool = ['teethjustify', 'teethfix', 'plant', 'wholemtf', 'teethbeauty', 'kidteeth', 'homedentist', '3d', 'root', 'laser']
    const serviceIndex = serviceNamePool.indexOf(params.service)
    const serviceData = _servicesData[serviceIndex]

    return {
        title: `日日美學牙醫診所 - ${serviceData.serviceName}`,
        description: '台中最優值的牙醫診所',
    }
}

const Service = ({ params }) => {
    const serviceNamePool = ['teethjustify', 'teethfix', 'plant', 'wholemtf', 'teethbeauty', 'kidteeth', 'homedentist', '3d', 'root', 'laser']
    const serviceIndex = serviceNamePool.indexOf(params.service)
    const serviceData = _servicesData[serviceIndex]

    return (
        <div>
            <div className='banner__container'>
                <Image className='banner__image' src={banner} alt="banner" />
            </div>
            <section className='service__section section '>
                <h1 className='section__title'>{serviceData.serviceName}</h1>
                <div className='service__container'>
                    <div className='service__image__container'>
                        <Image className='service__image' src={serviceData.serviceImage} alt={`日日美學牙醫診所 - ${serviceData.serviceName}`} />
                    </div>
                    <div className='text__container'>
                        <p className='service__description'>{serviceData.serviceLongDescription}</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Service