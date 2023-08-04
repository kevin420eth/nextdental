import './team.css'
import TeamSwiper from './TeamSwiper'

const Team = () => {
    return (
        <section className='home__team__section section'>
            <div className="home__team__container">
                <h1 className='section__title'>最專業的醫療團隊</h1>
                <TeamSwiper />
            </div>
        </section>
    )
}
export default Team