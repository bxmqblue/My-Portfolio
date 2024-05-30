import React, { useState } from 'react'
import './Navbar.css'
import { FaBars, FaChevronRight } from "react-icons/fa6";

function Navbar() {
    const [isToggle, setIsToggle] = useState(false)
    const [activeNav, setActiveNav] = useState('#home')

    window.addEventListener('scroll', () => {
        const navBar = document.querySelector('.header')

        if (window.scrollY >= 80) {
            navBar.classList.add('scroll-nav')
        } else {
            navBar.classList.remove('scroll-nav')
        }
    })

  return (
    <nav className='header'>
        <div className="container">
            <div className="nav-logo">
                <a href="#">bxm<span>Q</span>blue</a>
            </div>
            <ul className="nav-link">
                <li className="link"><a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? "link-a active-link" : 'link-a'}>Home</a></li>
                <li className="link"><a href="#about" className='link-a'>About</a></li>
                <li className="link"><a href="#skills" className='link-a'>Skills</a></li>
                <li className="link"><a href="#services" className='link-a'>Services</a></li>
                <li className="link"><a href="#contact" className='link-a'>Contact</a></li>
            </ul>
            {isToggle ? (<FaChevronRight className='bars' onClick={() => setIsToggle(!isToggle)}/>) : (<FaBars className='bars' onClick={() => setIsToggle(!isToggle)}/>)}
        </div>
            {/* mobile nav */}

            <ul className={isToggle ? "mobile-nav show-nav" : "mobile-nav"}>
                <li className="mobile-link"><a href="#home">Home</a></li>
                <li className="mobile-link"><a href="#about">About</a></li>
                <li className="mobile-link"><a href="#skills">Skills</a></li>
                <li className="mobile-link"><a href="#services">Services</a></li>
                <li className="mobile-link"><a href="#contact">Contact</a></li>
            </ul>
    </nav>
  )
}

export default Navbar
