import React from 'react'
import HeroSection from '../components/sections/HeroSection'
import TrustStrip from '../components/sections/TrustStrip'
import ServicesGrid from '../components/sections/ServicesGrid'
import VedicDifferenceBanner from '../components/sections/VedicDifferenceBanner'
import DivineSection from '../components/sections/DivineSection'
import HowItWorks from '../components/sections/HowItWorks'
import QualifiedPandits from '../components/sections/QualifiedPandits'
import ThirteenDayGuide from '../components/sections/ThirteenDayGuide'
import PackagesSection from '../components/sections/Packages'
import RegionalCustoms from '../components/sections/RegionalCustoms'
import Testimonials from '../components/sections/Testimonials'
import CitiesGrid from '../components/sections/CitiesGrid'
import GriefSupportCTA from '../components/sections/GriefSupportCTA'
import PrePlanningSection from '../components/sections/PrePlanningSection'
import BlogPreview from '../components/sections/BlogPreview'
import FAQSection from '../components/sections/FAQSection'
import DivaDivider from '../components/common/DivaDivider'

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <ServicesGrid />
      <DivaDivider />
      <VedicDifferenceBanner />
      <DivineSection />
      <HowItWorks />
      <QualifiedPandits />
      <ThirteenDayGuide />
      <PackagesSection />
      <RegionalCustoms />
      <Testimonials />
      <CitiesGrid />
      <GriefSupportCTA />
      <PrePlanningSection />
      <BlogPreview />
      <FAQSection />
    </>
  )
}
