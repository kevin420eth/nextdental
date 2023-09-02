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
                        青春痘治療，好不容易穩定了，紅紅的痘印，黑黑的痘痕，依然留在臉上揮之不去，嚴重影響外觀容貌。 "醫生! 有沒有快速消疤的方法?" 這是青春痘族群的心聲，也是青春痘族群的痛點，紅痘疤與黑痘疤難消難退，美美的一張臉，就是多出了這瑕疵...
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Article