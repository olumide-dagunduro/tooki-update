import React from "react";
import './HowItWorks.css'

const HowItWorks = () => {
  return (
    <div className="tooki__howitworks">
      <div className="tooki__howitworks-container">
        <div className="tooki_howitworks-container_video">
          <iframe
            className="video"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/d0UBDY4q1Rw?si=_o1H7ogAZDP1Kcyn"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="tooki_howitworks-container_detail">
          <h2>Guaranteed publishing to major news</h2>
          <p>Your article will be published on over 100 authority news sites across our network, with guaranteed publishing to affiliates of NBC, FOX, CBS, and ABC.</p>
          <p>For proof of getting featured, you'll receive a PDF report of all live URLs to your article.</p>
          <p>Some of these websites get over 10 million visitors per month. This makes getting published on our network a great way to improve your brand visibility, gain hundreds of back links to your website (for SEO), and earn massive trust with your customers.</p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
