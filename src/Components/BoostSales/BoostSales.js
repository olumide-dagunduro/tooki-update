import React from 'react'
import './BoostSales.css'
import Card1 from '../../Assets/card1.png'
import Card2 from '../../Assets/card2.png'
import Card3 from '../../Assets/car3.png'

const BoostSales = () => {
  return (
    <div className='tooki__boostsales'>
        <div className='tooki__boostsales-container'>
            <h3>How this boosts your sales</h3>     
            <p>3 major benefits of getting featured</p>
            <div className='tooki__boostsales-container_cards'>
                <div className='tooki__boostsales-container_cards-one'>
                    <img src={Card1} alt='card1' />
                    <h2>Massive Social Proof</h2>
                    <p>"As Seen On NBC, CBS, ABC" is a must-have trust element proven to increase conversions and get you more sales.</p>
                </div>
                <div className='tooki__boostsales-container_cards-two'>
                    <img src={Card2} alt='card2' />
                    <h2>Great for SEO</h2>
                    <p>Each article will have links sending people back to your site. Backlinks are very important for ranking higher on Google, and you'll be getting 100+ trustworthy links instantly.</p>
                </div>
                <div className='tooki__boostsales-container_cards-three'>
                    <img src={Card3} alt='card3'/>
                    <h2>Free traffic</h2>
                    <p>An article will typically get over 100 visits within the first day, and 1000+ over time. That means free organic traffic (and more sales) to your website.</p>
                </div>
            </div>
            <button className='tooki__boostsales-container_button'>
                See Our Packages
            </button>
        </div>
    </div>
  )
}

export default BoostSales