import React from "react";
import './MoneyBack.css'
import Money from '../../Assets/mooo.png'

const MoneyBack = () => {
  return (
    <div className="tooki__moneyback">
      <div className="tooki__moneyback-container">
        <div className="tooki__moneyback-container_detail">
          <h4>Our 100% money back guarantee</h4>
          <p>
            Your article is guaranteed to be published on our wide network of
            authority news sites, including affiliates of NBC, FOX, CBS, and
            ABC.
          </p>
          <p>
            If for any reason you don't get published to the news networks
            aforementioned above, simply contact us and you will receive a
            prompt and courteous refund.
          </p>
        </div>
        <div className="tooki__moneyback-container_image">
            <img src={Money} alt="moneyback" />
        </div>
      </div>
    
    </div>
  );
};

export default MoneyBack;
