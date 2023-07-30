import Link from 'next/link'
import './appointment.css'

const Appointment = () => {
    return (
        <section className='home__appointment__section section'>
            <div className='home__appointment__container'>
                <div className='home__image__container'>
                </div>
                <h1 className='home__appointment__title'>動人笑容，總源自於雙眸綻放的神韻</h1>
                <p className='home__appointment__description'>
                    微笑的魅力如同一幅藝術傑作，笑容設計更被視為藝術創作的絕佳體現
                    <br />我們致力於追求完美的美學設計工藝，為你打造一個迷人且獨一無二的笑容。
                </p>
                <Link href='/contact' className='home__appointment__button'>
                    立即預約諮詢
                </Link>
            </div>
        </section>
    )
}

export default Appointment