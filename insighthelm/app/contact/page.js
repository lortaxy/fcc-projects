'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: '',
    files: []
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, files: Array.from(e.target.files) }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const formDataToSend = new FormData()
    formDataToSend.append('name', formData.name)
    formDataToSend.append('email', formData.email)
    formDataToSend.append('company', formData.company)
    formDataToSend.append('projectType', formData.projectType)
    formDataToSend.append('budget', formData.budget)
    formDataToSend.append('timeline', formData.timeline)
    formDataToSend.append('description', formData.description)
    
    formData.files.forEach(file => {
      formDataToSend.append('files', file)
    })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formDataToSend
      })
      
      if (response.ok) {
        alert('Thank you for your inquiry. We will contact you soon!')
        setFormData({
          name: '',
          email: '',
          company: '',
          projectType: '',
          budget: '',
          timeline: '',
          description: '',
          files: []
        })
      } else {
        alert('There was an error submitting your inquiry. Please try again.')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('There was an error submitting your inquiry. Please try again.')
    }
  }

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-2xl">
        <h1 className="text-4xl font-bold text-center mb-12">Start Your Project</h1>
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg"
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Company</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium mb-2">Project Type</label>
              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg"
                required
              >
                <option value="">Select type</option>
                <option value="strategy">Strategy Consulting</option>
                <option value="digital">Digital Transformation</option>
                <option value="operations">Operations Optimization</option>
                <option value="change">Change Management</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Budget Range</label>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg"
              >
                <option value="">Select budget</option>
                <option value="under-10k">Under $10,000</option>
                <option value="10k-50k">$10,000 - $50,000</option>
                <option value="50k-100k">$50,000 - $100,000</option>
                <option value="over-100k">Over $100,000</option>
              </select>
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Timeline</label>
            <select
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
            >
              <option value="">Select timeline</option>
              <option value="asap">ASAP</option>
              <option value="1-3months">1-3 months</option>
              <option value="3-6months">3-6 months</option>
              <option value="6months+">6+ months</option>
            </select>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Project Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              className="w-full p-3 border rounded-lg"
              placeholder="Describe your project and goals..."
              required
            ></textarea>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Upload Files (optional)</label>
            <input
              type="file"
              multiple
              onChange={handleFileChange}
              className="w-full p-3 border rounded-lg"
              accept=".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.jpg,.png"
            />
            <p className="text-sm text-gray-500 mt-1">Accepted formats: PDF, Word, PowerPoint, Excel, Images</p>
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Submit Inquiry
          </button>
        </form>
      </div>
    </div>
  )
}