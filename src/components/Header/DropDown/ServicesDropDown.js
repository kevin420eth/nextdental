import { useState } from 'react'
import Link from 'next/link'
import MenuItems from '../MenuItems/ServicesMenu'
import './dropdown.css'

const ServicesDropDown = () => {
  const[click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  return (
    <div>
      <ul onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link className={item.cName} href={item.path} onClick={() => { setClick(false) }}>{item.title}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ServicesDropDown