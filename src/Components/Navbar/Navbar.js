import React, { useState } from 'react'
import './Navbar.css'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'
import Logo from '../../Assets/logo2.jpeg'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='tooki__navbar'>
      <div className='tooki__navbar-container'>
        <div className='tooki__navbar-container_logo'>
          <a href='/'><img src={Logo} alt='LOGO' /></a>
        </div>
        <div className='tooki__navbar-container_header'>
          <ul>
            <li><Link to='/aboutus'>About us</Link></li>
            <li><Link to='/'>Services</Link></li>
            <li><Link to='/aboutus'>Blog</Link></li>
            <li><Link to='/aboutus'>Buy Backlinks</Link></li>
            <li><Link to='/aboutus'>How it Works</Link></li>
            <li><Link to='/aboutus'>Contact Us</Link></li>
            <li><Link to='/aboutus'>FAQ</Link></li>
            <li><Link to='/aboutus'>Resources </Link></li>
          </ul>
        </div>
        <div className='tooki__navbar-container_menu'>
          {isOpen ? <AiOutlineClose color='000' size={27} onClick={() => { setIsOpen(!isOpen) }} /> : <GiHamburgerMenu color='000' size={27} onClick={() => { setIsOpen(!isOpen) }} />}
          {isOpen && <div className='tooki__navbar-container_menu-items slide-in-top'>
            <ul>
              <li><Link to='/aboutus'>About us</Link></li>
              <li><Link to='/'>Services</Link></li>
              <li><Link to='/aboutus'>Blog</Link></li>
              <li><Link to='/aboutus'>Buy Backlinks</Link></li>
              <li><Link to='/aboutus'>How it Works</Link></li>
              <li><Link to='/aboutus'>Contact Us</Link></li>
              <li><Link to='/aboutus'>FAQ</Link></li>
              <li><Link to='/aboutus'>Resources </Link></li>
            </ul>
          </div>}
        </div>
      </div>
    </div>
  )
}

export default Navbar