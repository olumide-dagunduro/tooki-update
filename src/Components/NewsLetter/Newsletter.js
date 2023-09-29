import React from 'react';

import './Newsletter.css';

const Newsletter = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('submit');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='tooki__newsletter' id='newsletter'>
        <div className='tooki__newsletter-container'>
          <h2>Subscribe for exclusive discounts & more</h2>
          <div className='tooki__newsletter-container_email'>
            <input type='email' name='email' placeholder='Enter your email address' />
            <button className='tooki__newsletter-container-button'>Subscribe Now</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Newsletter;

