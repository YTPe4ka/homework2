import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Header from './Components/Header.js';
import HeroSection from './Components/HeroSection.js';
import FeaturesSection from './Components/FeaturesSection.js';
import QualitySection from './Components/QualitySection.js';
import DiversitySection from './Components/DiversitySection.js';
import ScenesSection from './Components/ScenesSection.js';
import BestInterestSection from './Components/BestInterestSection.js';
import StepsSection from './Components/StepsSection.js';
import CTASection from './Components/CTASection.js';
import NewsletterSection from './Components/NewsletterSection.js';
import Footer from './Components/Footer.js';

const App = () => (
  <>
    <GlobalStyles />
    <Header />
    <HeroSection />
    <FeaturesSection />
    <QualitySection />
    <DiversitySection />
    <ScenesSection />
    <BestInterestSection />
    <StepsSection />
    <CTASection />
    <NewsletterSection />
    <Footer />
  </>
);

export default App;
