import React, { useState } from 'react'
import AboutMenu from '../MenuItems/AboutMenu'
import './dropdown.css'

const AboutDropDown = () => {
  const[click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  return (
    <div className='dropdown__menu__container'>
      <ul onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
        {AboutMenu.map((item, index) => {
          return (
            <li key={index}>
              <Link className={item.cName} to={item.path} onClick={() => { setClick(false) }}>{item.title}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default AboutDropDown