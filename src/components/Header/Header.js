"use client"
import { useState } from 'react'
import styles from './header.module.css'
import Link from 'next/link'
import Image from 'next/image'
import AboutDropDown from './DropDown/AboutDropDown'
import ServicesDropDown from './DropDown/ServicesDropDown'
import { AiOutlineClose, AiOutlineMenu, AiOutlineDown } from 'react-icons/ai'
import { LiaToothSolid } from 'react-icons/lia'
import logo from '/public/images/logo.png'

const Header = () => {
  const [click, setClick] = useState(false)
  const [dropdownabout, setDropdownAbout] = useState(false)
  const [dropdownitem, setDropdownItem] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  return (
    <nav className={styles.navbar}>
      <div className={styles.nav__logo__conntainer}>
        <Link href='/' className={styles.nav__logo__link}>
          <Image
            className={styles.nav__logo__image}
            src={logo}
            alt='logo'
          />
        </Link>
      </div>

      <ul className={click ? `${styles.nav__menu} ${styles.active}` : styles.nav__menu}>
        <li className={styles.nav__item} onMouseEnter={() => { setDropdownAbout(true) }} onMouseLeave={() => { setDropdownAbout(false) }}>
          <Link href='/' className={styles.nav__link} >
            關於日日 <i className={styles.arrow__icon}>{<AiOutlineDown />}</i>
          </Link>
          {dropdownabout && <AboutDropDown />}
        </li>

        <li className={styles.nav__item} onMouseEnter={() => { setDropdownItem(true) }} onMouseLeave={() => { setDropdownItem(false) }}>
          <Link href='/services' className={styles.nav__link} >
            診療項目 <i className={styles.arrow__icon}>{<AiOutlineDown />}</i>
          </Link>
          {dropdownitem && <ServicesDropDown />}
        </li>

        <li className={styles.nav__item}>
          <Link href='/team' className={styles.nav__link}>
            醫療團隊
          </Link>
        </li>
        <li className={styles.nav__item}>
          <Link href='/enviroment' className={styles.nav__link}>
            診所環境
          </Link>
        </li>
        <li className={styles.nav__item}>
          <Link href='/articles' className={styles.nav__link}>
            相關文章
          </Link>
        </li>
        <li className={styles.nav__item}>
          <Link href='/contact' className={styles.nav__link}>
            立即預約
          </Link>
        </li>
      </ul>

      <div className='social__media__container'>
        <div className=''>

        </div>
      </div>

      <div className={`${styles.mobile__menu} ${click ? styles.mobile__menu__open : styles.mobile__menu__close}`}>
        <div className={styles.mobile__menu__logo__container}>
          <p>日日美學牙醫診所</p>
        </div>
        <ul className={styles.mobile__menu__list}>
          <li className={styles.mobile__nav__item} onClick={() => { closeMobileMenu() }}>
            <Link href='/' className={styles.mobile__nav__link} >
              <i className={styles.mobile__menu__item__icon}>
                <LiaToothSolid />
              </i>
              關於日日
            </Link>
          </li>

          <li className={styles.mobile__nav__item} onClick={() => { closeMobileMenu() }}>
            <Link href='/services' className={styles.mobile__nav__link} >
              <i className={styles.mobile__menu__item__icon}>
                <LiaToothSolid />
              </i>
              診療項目
            </Link>
          </li>

          <li className={styles.mobile__nav__item} onClick={() => { closeMobileMenu() }}>
            <Link href='/team' className={styles.mobile__nav__link}>
              <i className={styles.mobile__menu__item__icon}>
                <LiaToothSolid />
              </i>
              醫療團隊
            </Link>
          </li>

          <li className={styles.mobile__nav__item} onClick={() => { closeMobileMenu() }}>
            <Link href='/enviroment' className={styles.mobile__nav__link}>
              <i className={styles.mobile__menu__item__icon}>
                <LiaToothSolid />
              </i>
              診所環境
            </Link>
          </li>

          <li className={styles.mobile__nav__item} onClick={() => { closeMobileMenu() }}>
            <Link href='/articles' className={styles.mobile__nav__link}>
              <i className={styles.mobile__menu__item__icon}>
                <LiaToothSolid />
              </i>
              相關文章
            </Link>
          </li>

          <li className={styles.mobile__nav__item} onClick={() => { closeMobileMenu() }}>
            <Link href='/contact' className={styles.mobile__nav__link}>
              <i className={styles.mobile__menu__item__icon}>
                <LiaToothSolid />
              </i>
              立即預約
            </Link>
          </li>
        </ul>
      </div>

      <div className={styles.menu__icon} onClick={() => { handleClick() }}>
        <i className=''>
          {click ? <AiOutlineClose /> : <AiOutlineMenu />}
        </i>
      </div>

    </nav>
  )
}

export default Header