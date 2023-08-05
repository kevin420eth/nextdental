import Link from 'next/link'
import Image from 'next/image'
import EducationBlogSlideShow from './EducationBlogSlideShow'

import './page.css'

import case_1 from '/public/images/case_1.png'
import case_2 from '/public/images/case_2.png'
import case_3 from '/public/images/case_3.png'
import case_4 from '/public/images/case_4.png'
import case_5 from '/public/images/case_5.png'
import case_10 from '/public/images/case_10.png'

export const metadata = {
    title: '澄臻美學牙醫診所 - 相關文章',
    description: '台中市最優值得牙醫診所',
}

const Articles = () => {
    return (
        <div>
            <section className='articles__main__section section '>
                <div className='spotlight__container'>
                    <Link href="/articles/article_10" className='main__spotlight__container shadow'>
                        <Image className='main__spotlight__imgae' src={case_10} alt="" />
                        <div className='article__image__mask'>
                            <p>標題</p>
                        </div>
                    </Link>
                    <div className='sub__spotlight__container'>
                        <Link href="/articles/article_4" className='sub__spotlight__flagment shadow'>
                            <Image className='sub__spotlight__flagment__image' src={case_4} alt="" />
                            <div className='article__image__mask'>
                                <p>標題</p>
                            </div>
                        </Link>
                        <Link href="/articles/article_5" className='sub__spotlight__flagment'>
                            <Image className='sub__spotlight__flagment__image' src={case_5} alt="" />
                            <div className='article__image__mask'>
                                <p>標題</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            <section className='articles__model__section section'>
                <h1 className='section__title'>案例分享</h1>
                <div className='articles__model__container'>
                    <Link href="/articles/article_3" className='model__container shadow'>
                        <Image className='model__image' src={case_3} alt="" />
                        <div className='article__image__mask'>
                            <p>標題</p>
                        </div>
                    </Link>
                    <Link href="/articles/article_1" className='model__container shadow'>
                        <Image className='model__image' src={case_1} alt="" />
                        <div className='article__image__mask'>
                            <p>標題</p>
                        </div>
                    </Link>
                    <Link href="/articles/article_2" className='model__container shadow'>
                        <Image className='model__image' src={case_2} alt="" />
                        <div className='article__image__mask'>
                            <p>標題</p>
                        </div>
                    </Link>
                </div>

            </section>

            <section className='articles__education__section section '>
                <h1 className='section__title'>精選文章</h1>
                <div className='article__education__container'>
                    <EducationBlogSlideShow />
                </div>
            </section>
        </div>
    )
}

export default Articles