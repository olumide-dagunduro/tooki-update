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
      {/* <Footer /> */}
    </div>
    
  )
}

export default App;
