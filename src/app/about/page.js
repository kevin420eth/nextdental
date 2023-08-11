import Image from "next/image"
import Link from "next/link"
import banner from '/public/images/banner.png'

import about_image from '/public/images/equipment_12.png'
import './page.css'

export const metadata = {
    title: '澄臻美學牙醫診所 - 關於澄臻美學',
    description: '台中市最優值得牙醫診所',
}

const About = () => {
    return (
        <div>
            <div className='banner__container'>
                <Image className='banner__image' src={banner} alt="banner" />
            </div>
            <section className='about__section section '>
                <p className='section__title'>診所介紹</p>
                <div className='about__container'>
                    <Image
                        className='about__image shadow'
                        src={about_image}
                        alt='診所介紹'
                        width={300}
                    />
                    <div className='about__text__container'>
                        <p>
                            澄臻美學牙醫診所－綻放您的璀璨微笑
                        </p>
                        <p>
                            無論是在社交場合中，還是面對鏡中的自己，微笑都是最為溫暖和迷人的資產。而澄臻美學牙醫診所，就是您實現完美微笑的最佳夥伴。位於繁華都市中心，澄臻美學牙醫診所以其卓越的醫療技術、專業的醫療團隊以及舒適的就診環境，贏得了廣大患者的讚譽和信賴。
                            在澄臻美學牙醫診所，我們堅信每一位獨特的客戶都值得擁有健康、美麗的牙齒，從而展現出自信和魅力。我們的專業醫師團隊擁有豐富的臨床經驗，緊跟醫學科技的最新進展，並致力於為您提供最優質的牙醫照護。無論是牙齒矯正、牙齒修復、牙齒美白還是其他牙科治療，我們都能為您量身打造最適合的治療方案，確保您的微笑總是散發出耀眼的光芒。
                            診所內，我們秉持著以患者為中心的宗旨，營造出舒適、放鬆的就診環境。我們注重每一位患者的需求和意見，並通過細心的溝通，確保您在治療過程中感受到無微不至的關懷和尊重。此外，我們嚴格遵循衛生標準，採用最先進的醫療設備和材料，確保您在安全的環境中接受高品質的牙醫服務。
                            澄臻美學牙醫診所，不僅是一個致力於提供優質牙醫照護的診所，更是一個關注您整體口腔健康的夥伴。我們的目標是幫助您實現健康美麗的微笑，從而提升您的生活品質和自信心。讓我們攜手走向一個更加美好的明天，綻放您的璀璨微笑！
                            如果您正在尋找專業、可靠的牙醫診所，澄臻美學牙醫診所定將是您的最佳選擇。立即預約您的就診時間，讓我們一同開啟牙齒健康之旅吧！
                        </p>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default About