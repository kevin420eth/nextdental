import Link from 'next/link'
import Image from 'next/image'
import './page.css'

import doctorData from '@/data/doctorData'
import banner from '/public/images/banner.png'

export const metadata = {
    title: '澄臻美學牙醫診所 - 醫療團隊',
    description: '台中市最優值得牙醫診所',
}

const Team = () => {
    return (
        <div>
            <div className='banner__container'>
                <Image src={banner} alt="banner" />
            </div>
            <section className='team__section section '>
                <p className='section__title'>醫療團隊</p>
                <div className='team__profile__section'>
                    {doctorData.map((item, key) => {
                        return (
                            <Link className='doctor__profile__preview' href={`/team/${item.route}`} key={key}>
                                <div className='doctor__photo__preview'>
                                    <Image src={item.profilePhoto} alt={`澄臻美學牙醫診所 - ${item.name}${item.title}`} />
                                </div>
                                <p className='doctor__name'>{item.name} {item.title}</p>
                                <p className='major__skill'>{item.majorTreatment[0]}</p>
                            </Link>
                        )
                    })}
                </div>
            </section>
        </div>
    )
}

export default Team