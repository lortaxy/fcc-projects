import Link from 'next/link'

const services = [
  {
    title: 'Strategy Consulting',
    description: 'Develop comprehensive business strategies to drive growth and competitive advantage.',
    icon: '🎯'
  },
  {
    title: 'Digital Transformation',
    description: 'Guide your organization through digital modernization and technology adoption.',
    icon: '💻'
  },
  {
    title: 'Operations Optimization',
    description: 'Streamline processes and improve efficiency across your business operations.',
    icon: '⚙️'
  },
  {
    title: 'Change Management',
    description: 'Support successful organizational change and cultural transformation.',
    icon: '🔄'
  }
]

export default function Services() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link href="/services" className="text-primary font-semibold hover:text-secondary">
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}