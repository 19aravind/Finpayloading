import React from 'react';

import HeroSection from './components/HeroSection';
import ExperienceSection from './components/ExperienceSection';
import WhyChooseSection from './components/WhyChooseSection';
import ReserveAccountSection from './components/ReserveAccountSection';
import PlansSection from './components/PlansSection';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './index.css'; // or './App.css' depending on where you put Tailwind






function App() {
  return (
    <div>
      {/* We’ll build here */}
      <HeroSection/>
      <ExperienceSection />
      <WhyChooseSection />
      <ReserveAccountSection />
      <PlansSection />
      <Footer />
      <Navbar />
      {/* Other sections like Hero, Experience, WhyChoose, Plans, Footer */}
    </div>
  );
}

export default App;
