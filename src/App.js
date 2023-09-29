import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Banner from './Components/Banner/Banner'
import Banner2 from './Components/Banner2/Banner2';
import HowItWorks from './Components/HowItWorks/HowItWorks';
import BoostSales from './Components/BoostSales/BoostSales';
import ClientSay from './Components/ClientSay/ClientSay';
import Steps from './Components/Steps/Steps';
import Pricing from './Components/Pricing/Pricing';
import MoneyBack from './Components/MoneyBack/MoneyBack';
import Stripe from './Components/Stripe/Stripe';
import Faq from './Components/Faq/Faq';
import Newsletter from './Components/NewsLetter/Newsletter';

function App() {
  return(
    <div id='/'>
      <Navbar />
      <Banner />
      <Banner2 />
      <HowItWorks />
      <BoostSales />
      <ClientSay />
      <Steps />
      <Pricing />
      <MoneyBack />
      <Stripe />
      <Faq />
      <Newsletter />
      <Footer />
    </div>
    
  )
}

export default App;
