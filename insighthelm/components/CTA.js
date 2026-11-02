import Link from 'next/link'

export default function CTA() {
  return (
    <section className="bg-primary text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Let's discuss how InsightHelm can help you achieve your strategic goals.
        </p>
        <Link href="/contact" className="bg-accent text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition">
          Start Your Project
        </Link>
      </div>
    </section>
  )
}