"use client"

import { useState, useEffect } from 'react'
import './tothetopbutton.css'
import { AiOutlineArrowUp } from 'react-icons/ai'

const ToTheTopButton = () => {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 600) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        });
    }, []);

    function backtothetop() {
        window.scrollTo(0, 0)
    }

    return (
        <button
            className={`tothetopbutton shadow ${visible ? '' : 'tothetopbutton_hide'}`}
            onClick={backtothetop}
        >
            <i className='top__arrow__icon'>
                <AiOutlineArrowUp />
            </i>
        </button>
    )
}

export default ToTheTopButton