import React from 'react'
import { FaArrowUp } from "react-icons/fa6";
import './ScrollUp.css'


function ScrollUp() {
    window.addEventListener('scroll', () => {
        const scrollUp = document.querySelector('.scroll-up')

        if (window.scrollY >= 560) {
            scrollUp.classList.add('show-scroll')
        } else {
            scrollUp.classList.remove('show-scroll')
        }
    })

  return (
    <a href="#" className='scroll-up'>
        <FaArrowUp className='scroll-arrow'/>
    </a>
  )
}

export default ScrollUp
