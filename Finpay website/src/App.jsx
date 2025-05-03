import React from 'react';
import HeroSection from './components/HeroSection';
import WhyChooseSection from './components/WhyChooseSection';
import PricingPlans from './components/PricingPlans';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './index.css'; // or './App.css' depending on where you put Tailwind
import OurMission from './components/OurMission';
import FuturePayment from './components/FuturePayment';
import MaximizeReturns from './components/MaximizeReturns';
import FinpayFooter from './components/FinpayFooter';





function App() {
  return (
    <div>
      {/* We’ll build here */}
      <Navbar />
      <HeroSection/>
      <FuturePayment />
      <WhyChooseSection />
      <MaximizeReturns />
      <OurMission/>
      <PricingPlans />
      <Footer/>
      <FinpayFooter/>
     
      {/* Other sections like Hero, Experience, WhyChoose, Plans, Footer */}
    </div>
  );
}

export default App;
