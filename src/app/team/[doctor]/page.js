import './page.css'
import Image from 'next/image'
import _doctorData from '@/data/doctorData'
import banner from '/public/images/banner.png'

import { AiOutlineCheck } from 'react-icons/ai'
import dynamic from 'next/dynamic'

export async function generateMetadata({ params }) {
    const doctorNamePool = ['johnnylin', 'johnnilin', 'linjohnny', 'linann', 'linpopo', 'linhathway', 'linpoki', 'linforest']
    const doctorIndex = doctorNamePool.indexOf(params.doctor)
    const doctorData = _doctorData[doctorIndex]

    return {
        title: `澄臻美學牙醫診所 - ${doctorData.name}${doctorData.title}`,
        description: '台中市最優值得牙醫診所',
    }
}

const Member = ({ params }) => {
    const doctorNamePool = ['johnnylin', 'johnnilin', 'linjohnny', 'linann', 'linpopo', 'linhathway', 'linpoki', 'linforest']
    const doctorIndex = doctorNamePool.indexOf(params.doctor)
    const doctorData = _doctorData[doctorIndex]

    return (
        <div>
            <div className='banner__container'>
                <Image className='banner__image' src={banner} alt="banner" />
            </div>
            <section className='profile__section section '>
                <p className='section__title'>{doctorData.name} {doctorData.title}</p>
                <div className='profile__container'>
                    <div className='profile__preview'>
                        <div className='profile__photo'>
                            <Image src={doctorData.profilePhoto} alt={`澄臻美學牙醫診所 - ${doctorData.name}${doctorData.title}`} />
                        </div>
                    </div>
                    <div className='profile__text'>
                        <div className='education__container'>
                            <p className='education__title'>學經歷</p>
                            <ul className='education__list'>
                                {doctorData.education.map((education, key) => {
                                    return (
                                        <li key={key}>{education}</li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className='major__treatment__container'>
                            <p className='major__treatment__title'>主治項目</p>
                            <ul className='major__treatment__list'>
                                {doctorData.majorTreatment.map((major, key) => {
                                    return (
                                        <li key={key}>{major}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>

                <p className='time__shift__title section__title'>看診時間</p>
                <table className="timetable">
                    <thead>
                        <tr>
                            <th>時間</th>
                            <th>禮拜一</th>
                            <th>禮拜二</th>
                            <th>禮拜三</th>
                            <th>禮拜四</th>
                            <th>禮拜五</th>
                            <th>禮拜六</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>早 9:00-12:00</td>
                            <td className='time__shift__slot'><AiOutlineCheck /></td>
                            <td className='time__shift__slot'></td>
                            <td className='time__shift__slot'></td>
                            <td className='time__shift__slot'><AiOutlineCheck /></td>
                            <td className='time__shift__slot'></td>
                            <td className='time__shift__slot'><AiOutlineCheck /></td>
                        </tr>
                        <tr>
                            <td>午 15:00-18:00</td>
                            <td className='time__shift__slot'><AiOutlineCheck /></td>
                            <td className='time__shift__slot'><AiOutlineCheck /></td>
                            <td className='time__shift__slot'></td>
                            <td className='time__shift__slot'></td>
                            <td className='time__shift__slot'><AiOutlineCheck /></td>
                            <td className='time__shift__slot'></td>
                        </tr>
                        <tr>
                            <td>晚 18:00-21:00</td>
                            <td className='time__shift__slot'><AiOutlineCheck /></td>
                            <td className='time__shift__slot'></td>
                            <td className='time__shift__slot'><AiOutlineCheck /></td>
                            <td className='time__shift__slot'></td>
                            <td className='time__shift__slot'></td>
                            <td className='time__shift__slot'><AiOutlineCheck /></td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    )
}

export default Member