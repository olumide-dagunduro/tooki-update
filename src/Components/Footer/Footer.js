import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'
import {PiFacebookLogoLight} from 'react-icons/pi'
import {AiOutlineInstagram} from 'react-icons/ai'
import {PiTwitterLogoThin} from 'react-icons/pi'


const Footer = () => {
  return (
    <div className='tooki__footer'>
        <div className='tooki__footer-container'>
            <div className='tooki__footer-container-links'>
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
            <div className='tooki__footer-container-socials'>
                <PiFacebookLogoLight className='social' />
                <AiOutlineInstagram className='social'/>
                <PiTwitterLogoThin className='social'/>
            </div>
            <p className='tooki__footer-container-location'>
                Happily based in Lagos Nigeria
            </p>
            <div className='tooki__footer-container-tc'>
                <p>@2023 Tooki Media</p>
                <p>Privacy Policy</p>
                <p>Terms and Conditions</p>
            </div>
        </div>
    </div>
  )
}

export default Footer