import Image from 'next/image'
import './footer.css'
import logo from '/public/images/logo.png'
import line_qrcode from '/public/images/line_qrcode.png'

const Footer = () => {
    const currentDate = new Date()
    const currentYear = currentDate.getFullYear()

    return (
        <div className='footer__section'>
            <div className='footer__content__container'>
                <div className='footer__logo__container'>
                    <Image className='footer__logo__image' src={logo} alt="logo" />
                </div>
                <div className='footer__contact__information'>
                    <p className='footer__telephone'>電話: (04)-22355670</p>
                    <p className='footer__address'>地址: 台中市北屯區文心路四段151號</p>
                </div>
                <div className='footer__qrcode__container'>
                    <Image className='footer__qrcode__image' src={line_qrcode} alt="logo" />
                </div>
            </div>
            <hr />
            <p className='footer__rights__reserved'>Copyright© {currentYear} 澄臻美學牙醫診所 版權所有</p>
        </div>
    )
}

export default Footer