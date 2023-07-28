"use client"

import React, { useState } from 'react'
import styles from './header.module.css'
import Link from 'next/link'
import Image from 'next/image'

import AboutDropDown from './DropDown/AboutDropDown'
import ServicesDropDown from './DropDown/ServicesDropDown'

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
            width={130}
            height={20}
          />

        </Link>
      </div>

      <ul className={click ? `${styles.nav__menu} ${styles.active}` : styles.nav__menu}>
        <li className={styles.nav__item} onMouseEnter={() => { setDropdownAbout(true) }} onMouseLeave={() => { setDropdownAbout(false) }}>
          <Link href='/' className={styles.nav__link} >
            關於澄臻 <i className={styles.arrow__icon}></i>
          </Link>
          {dropdownabout && <AboutDropDown />}
        </li>

        <li className={styles.nav__item} onMouseEnter={() => { setDropdownItem(true) }} onMouseLeave={() => { setDropdownItem(false) }}>
          <Link href='/services' className={styles.nav__link} >
            診療項目 <i className={styles.arrow__icon}></i>
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
    </nav>
  )
}

export default Header