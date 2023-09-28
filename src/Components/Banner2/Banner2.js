import React from 'react'
import './Banner2.css'
import ABC from '../../Assets/abc.png'
import CBS from '../../Assets/cbs.png'
import NBC from '../../Assets/nbc.png'

const Banner2 = () => {
  return (
    <div className="tooki__banner2">
      <div className="tooki__banner2-container">
        <div className="tooki__banner2-container_icons">
          <div className="icon1">
            <img src={ABC}  alt='abc'/>
          </div>
          <div className="icon2">
            <img src={CBS} alt='cbs' />
          </div>
          <div className="icon3">
            <img src={NBC} alt='nbc'/>
          </div>
        </div>
        <div className="tooki__banner2-container_details">
          <h2>Losing customers due to lack of trust?</h2>
          <p>
            On average 75% of visitors will leave your website due to lack of
            credibility. Getting <br></br> "As Seen On NBC, CBS, ABC" will boost your
            conversion rates instantly.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner2