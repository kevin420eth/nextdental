// import ErrorPage from '../../Error/Error'
import Image from 'next/image'

import banner from '/public/images/banner.png'
import EductionData from '@/data/educationData'

import './page.css'

const Article = ({ params }) => {
    console.log(params.article)
    let targetItem = EductionData.find(element => element.route === params.article);

    // if (!targetItem) {
    //     return (
    //         <ErrorPage />
    //     )
    // }

    return (
        <div>
            <div className='banner__container'>
                <Image src={banner} alt="banner" />
            </div>
            <section className='article__section section '>
                <h1 className='section__title'>{targetItem.title}</h1>
                <div className='article__container'>
                    <div className='article__image__container shadow'>
                        <img src={targetItem.image} alt="" className='article__image' />
                    </div>
                    <div className='artile__text__container'>
                        <p className='article__content'>{targetItem.content}</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Article