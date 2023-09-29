import React from 'react'
import './Pricing.css'
import Icon1 from '../../Assets/icon1.png'
import Icon2 from '../../Assets/icon2.png'
import Icon3 from '../../Assets/icon3.png'
import {AiFillCheckCircle} from 'react-icons/ai'

const Pricing = () => {
  return (
    <div className='tooki__pricing'>
        <div className='tooki__pricing-container'>
            <h1>Pricing</h1>
            <div className='tooki__pricing-container_button'>
                <button className='btn1'>Popular Sites</button>
                <button className='btn2'>Alternative Niches</button>
            </div>
            <p>See all restricted catergories</p>
            <div className='tooki__pricing-container_packages'>
                <div className='tooki__pricing-container_packages-one'>
                    <div className='tooki__pricing-container_packages-one-div'>
                        <img src={Icon1} alt='card1' />
                        <div className='div1'>
                            <h1>Basic</h1>
                            <h2>$200</h2>
                        </div>
                        <p>You provide us the article, we publish it.</p>
                        <p><AiFillCheckCircle color='lightgreen' size={20} className='icon'/>Guaranteed publishing to 100+ sites</p>
                        <p><AiFillCheckCircle color='lightgreen' size={20} className='icon'/>Published to NBC, FOX, CBS, and ABC affiliates</p>
                        <p><AiFillCheckCircle color='lightgreen' size={20} className='icon'/>Published to Google News & Digital Journal</p>
                        <p><AiFillCheckCircle color='lightgreen' size={20} className='icon'/>PDF with live URLs of all your articles</p>
                        <p><AiFillCheckCircle color='lightgreen' size={20} className='icon'/>4-day delivery</p>
                        <p><AiFillCheckCircle color='lightgreen' size={20} className='icon'/>You provide us the article to publish</p>
                        <a href=''>Buy Now</a>
                    </div>
                </div>
                <div className='tooki__pricing-container_packages-two'>
                    <div className='tooki__pricing-container_packages-two-div'>
                        <img src={Icon2} alt='icon2' />
                        <div className='div2'>
                            <h1>Pro</h1>
                            <h2>$300</h2>
                            <h5>Value</h5>
                        </div>
                        <p>We write the article and we publish it</p>
                        <p><AiFillCheckCircle color='lightgreen' size={20} className='icon' />Guaranteed publishing to 100+ sites</p>
                        <p><AiFillCheckCircle color='lightgreen' size={20} className='icon' />Published to NBC, FOX, CBS, and ABC affiliates</p>
                        <p><AiFillCheckCircle color='lightgreen' size={20} className='icon'/>Published to Google News & Digital Journal</p>
                        <p><AiFillCheckCircle color='lightgreen' size={20}  className='icon'/>PDF with live URLs of all your articles</p>
                        <p><AiFillCheckCircle color='lightgreen' size={20} className='icon'/>10-day delivery</p>
                        <p><AiFillCheckCircle color='lightgreen' size={20} className='icon'/>200-word article professionally written</p>
                        <p><AiFillCheckCircle color='lightgreen' size={20} className='icon'/>2 free revisions</p>
                        <a href=''>Buy Now</a>
                    </div>
                </div>
                <div className='tooki__pricing-container_packages-three'>
                    <div className='tooki__pricing-container_packages-three-div'>
                        <img src={Icon3} alt='icon3' />
                        <div className='div3'>
                            <h1>Unlimited</h1>
                            <h2>$500</h2>
                        </div>
                        <p>Unlimited revisions before publishing</p>
                        <p><AiFillCheckCircle color='lightgreen' size={20} className='icon'/>Guaranteed publishing to 100+ sites</p>
                        <p><AiFillCheckCircle color='lightgreen' size={20} className='icon'/>Published to NBC, FOX, CBS, and ABC affiliates</p>
                        <p><AiFillCheckCircle color='lightgreen' size={20} className='icon'/>Published to Google News & Digital Journal</p>
                        <p><AiFillCheckCircle color='lightgreen' size={20} className='icon'/>PDF with live URLs of all your articles</p>
                        <p><AiFillCheckCircle color='lightgreen' size={20} className='icon' />10-day delivery</p>
                        <p><AiFillCheckCircle color='lightgreen' size={20} className='icon'/>400 word article professionally written</p>
                        <p><AiFillCheckCircle color='lightgreen' size={20} className='icon'/>Unlimited revisions to your article</p>
                        <a href=''>Buy Now</a>
                    </div>
                </div>
            </div>
            <p className='p'>For Bulk Pricing: <a href=''>See Here </a> for rates</p>
        </div>
    </div>
  )
}

export default Pricing