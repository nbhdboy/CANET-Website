import React from 'react'
import Header from './components/Header'
import CountriesSection from './components/CountriesSection'
import ReviewsSection from './components/ReviewsSection'
import TutorialSection from './components/TutorialSection'

import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-primary-50 via-green-50 to-accent-50">
      <Header />
      <CountriesSection />
      <ReviewsSection />
      <TutorialSection />
      <Footer />
    </main>
  )
} 