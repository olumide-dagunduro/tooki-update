import React from "react";
import "./Steps.css";
import Step1 from "../../Assets/step1.png";
import Step2 from "../../Assets/step2.png";
import Step3 from "../../Assets/step3.png";
import {BsArrowRight} from 'react-icons/bs'

const Steps = () => {
  return (
    <div className="tooki__steps">
      <div className="tooki__steps-container">
        <h3>How it works</h3>
        <p>3 easy steps to be featured on NBC, CBS, ABC and more.</p>
        <div className="tooki__steps-container_detail">
          <div className="tooki__steps-container_cards-one">
            <img src={Step1} alt="step1" />
            <h6>We write an article about your business</h6>
            <p>
              Or you can provide us your own. The article will talk about your
              business and what you have to offer.
            </p>
            <a href="">Learn more  <BsArrowRight className="one" size='27' color= 'green' /> </a>
          </div>
          <div className="tooki__steps-container_cards-two">
            <img src={Step2} alt="step2" />
            <h6>Your article gets published to 100+ news sites</h6>
            <p>
              We send your article to our wide network of news sites & tv
              stations including affiliates of NBC, FOX, CBS.
            </p>
            <a href="">Learn more  <BsArrowRight  className="two" size='27' color= 'green' /> </a>
          </div>
          <div className="tooki__steps-container_cards-three">
            <img src={Step3} alt="step3" />
            <h6>You can now write "Featured On NBC, CBS, ABC"</h6>
            <p>
                We'll send you a PDF with all the live links to your article. Proof that your business has been featured.
            </p>
            <a href="">Learn more  <BsArrowRight  className="three" size='27' color= 'green' /> </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
