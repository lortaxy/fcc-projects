import Link from 'next/link'

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6">Strategic Consulting for Business Growth</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          InsightHelm provides expert consulting services to help your business navigate challenges and seize opportunities.
        </p>
        <div className="space-x-4">
          <Link href="/services" className="bg-accent text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition">
            Our Services
          </Link>
          <Link href="/contact" className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition">
            Get Started
          </Link>
        </div>
      </div>
    </section>
  )
}