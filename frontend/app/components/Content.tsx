import React from 'react'
import HeroSection from './sections/HeroSection'
import FeaturedSection from './sections/FeaturedSection'
import WhyUsSection from './sections/WhyUsSection'
import TestimonialsSection from './sections/TestimonialsSection'
import FooterSection from './sections/FooterSection'

const Content = () => {
  return (
    <div>
        <HeroSection />
        <FeaturedSection />
        <WhyUsSection />
        <TestimonialsSection />
        <FooterSection />
    </div>
  )
}

export default Content