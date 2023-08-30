import Image from 'next/image'
import Link from 'next/link'
import './footer.css'
import logo from '/public/images/logo.png'
import line_qrcode from '/public/images/line_qrcode.png'
import instagram from '/public/images/instagram.png'
import facebook from '/public/images/facebook.png'
import youtube from '/public/images/youtube.png'
import line from '/public/images/line.png'

const Footer = () => {
    const currentDate = new Date()
    const currentYear = currentDate.getFullYear()

    return (
        <div className='footer__section section'>
            <div className='footer__container'>
                <div className='footer__logo__container'>
                    <Image className='footer__logo__image' src={logo} alt="logo" />
                </div>
                <div className='footer__contact__information'>
                    <p className='footer__telephone'>電話: (04)-22355670</p>
                    <p className='footer__address'>地址: 台中北屯區文心路四段151號</p>

                    <div className='footer__social__media__container'>
                        <Link href='https://line.me/ti/p/MHu0amc4sW' target='_blank'>
                            <Image
                                className='footer__social__media__logo'
                                src={line}
                                alt='line__logo'
                            />
                        </Link>
                        <Link href='https://instagram.com' target='_blank'>
                            <Image
                                className='footer__social__media__logo'
                                src={instagram}
                                alt='instagram__logo'
                            />
                        </Link>
                        <Link href='https://facebook.com' target='_blank'>
                            <Image
                                className='footer__social__media__logo'
                                src={facebook}
                                alt='facebook__logo'
                            />
                        </Link>
                        <Link href='https://youtube.com' target='_blank'>
                            <Image
                                className='footer__social__media__logo'
                                src={youtube}
                                alt='youtube__logo'
                            />
                        </Link>
                    </div>
                </div>
            </div>
            <hr />
            <p className='footer__rights__reserved'>Copyright© {currentYear} 日日美學牙醫診所 版權所有</p>
        </div>
    )
}

export default Footer