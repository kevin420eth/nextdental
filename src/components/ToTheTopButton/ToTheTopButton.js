"use client"

import './tothetopbutton.css'
import { AiOutlineArrowUp } from 'react-icons/ai'

const ToTheTopButton = () => {

    function tothetop(){
        window.scrollTo(0,0)
    }

    return (
        <button className='tothetopbutton shadow' onClick={tothetop}>
            <i className='top__arrow__icon'>
                <AiOutlineArrowUp />
            </i>
        </button>
    )
}

export default ToTheTopButton