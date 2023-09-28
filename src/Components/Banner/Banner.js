import React from 'react'
import './Banner.css'

import Star from '../../Assets/five star.jpeg'
const Banner = () => {
  return (
    <div className='tooki__banner'>
        <div className='tooki__banner-container'>
            <div className='tooki__banner-container_item1'>
                <div className='tooki_banner-container_item1-detail'>
                    <h1>Get featured on NBC, USA Today, CBS, FOX and more</h1>
                    <p>Massive social proof — up to 48% more conversions
                        on your website instantly.
                    </p> 
                    <div className='tooki_banner-container_item1-detail-div'>
                        <button className='btn1'>
                            See Pricing
                        </button>
                        <button className='btn2'>
                            How it works
                        </button>
                        <div className='rating'>
                            <p>Rated Excellent</p>
                            <img src={Star} alt='star'></img>
                            <p>4.6 on trustpilot</p>
                        </div>
                    </div>
                </div>
                <div className='tooki_banner-container_item1-video'>
                 <iframe className='video' width="560" height="315" src="https://www.youtube.com/embed/d0UBDY4q1Rw?si=_o1H7ogAZDP1Kcyn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
            <div className='tooki__banner-container_two'>
                <div className='tooki__banner-container_two-content'>
                    <h1>24%</h1>
                    <h1>/</h1>
                    <div className='tooki__banner-container_two-content-div'>
                        <p>"Our blog is now getting a 24% Conversion Rate after working with Brand Featured. Amazing.”</p>
                        <h5>TOOLS OFFICIAL</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner