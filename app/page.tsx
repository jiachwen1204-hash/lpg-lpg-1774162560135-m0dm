import Navbar from '@/components/ui/Navbar'
import Hero from '@/components/sections/Hero'
import SocialProof from '@/components/sections/SocialProof'
import Services from '@/components/sections/Services'
import About from '@/components/sections/About'
import Stats from '@/components/sections/Stats'
import CTA from '@/components/sections/CTA'
import Footer from '@/components/sections/Footer'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "AI Business Solutions — Automate & Scale | AI Digitalize",
  description: "Transform your business with AI Digitalize. Our all-in-one AI platform automates workflows, analyzes data, and accelerates digital growth. Start free today.",
  openGraph: {
    title: "AI Business Solutions — Automate & Scale | AI Digitalize",
    description: "Transform your business with AI Digitalize. Our all-in-one AI platform automates workflows, analyzes data, and accelerates digital growth. Start free today.",
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "AI Business Solutions — Automate & Scale | AI Digitalize",
    description: "Transform your business with AI Digitalize. Our all-in-one AI platform automates workflows, analyzes data, and accelerates digital growth. Start free today.",
  },
}

// @lpg: This is the 1-page layout — sections scroll vertically.
// Add section IDs, adjust order if needed, remove any unused sections.
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SocialProof />
      <Services />
      <About />
      <Stats />
      <CTA />
      <Footer />
    </main>
  )
}
