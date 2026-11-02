const testimonials = [
  {
    name: 'John Smith',
    company: 'TechCorp Inc.',
    quote: 'InsightHelm transformed our business strategy and helped us achieve 40% growth in just one year.',
    rating: 5
  },
  {
    name: 'Sarah Johnson',
    company: 'Global Solutions',
    quote: 'Their expertise in digital transformation was invaluable. Highly recommend their services.',
    rating: 5
  },
  {
    name: 'Mike Davis',
    company: 'Innovate Ltd.',
    quote: 'Professional, insightful, and results-driven. InsightHelm exceeded our expectations.',
    rating: 5
  }
]

export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}