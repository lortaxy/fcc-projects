import Link from 'next/link'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Testimonials />
      <CTA />
    </main>
  )
}