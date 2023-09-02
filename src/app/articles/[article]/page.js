import ErrorPage from '/src/app/not-found'
import Image from 'next/image'
import banner from '/public/images/banner.png'
import EductionData from '@/data/educationData'
import './page.css'

export const metadata = {
    title: '日日美學牙醫診所 - 相關文章',
    description: '台中最優值的牙醫診所',
}

const Article = ({ params }) => {
    let targetItem = EductionData.find(element => element.route === params.article);

    // if (!targetItem) {
    //     return (
    //         <ErrorPage />
    //     )
    // }

    return (
        <div>
            <div className='banner__container'>
                <Image className='banner__image' src={banner} alt="banner" />
            </div>
            <section className='article__section section '>
                <div className='article__container'>
                    <div className='article__information'>
                        <div className='writer__photo'></div>
                        <div className='writer__name'>林昌延 院長</div>
                        <div className='article__date'>2023年 8月18日</div>
                    </div>
                    <h1 className='article__title'>怎麼正確的刷牙?</h1>
                    <div className='article__content'>
                        青春痘治療
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Article