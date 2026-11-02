import { NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

export async function POST(request) {
  try {
    const data = await request.formData()
    
    // Process form data
    const formData = {
      name: data.get('name'),
      email: data.get('email'),
      company: data.get('company'),
      projectType: data.get('projectType'),
      budget: data.get('budget'),
      timeline: data.get('timeline'),
      description: data.get('description'),
      submittedAt: new Date().toISOString()
    }

    // Handle file uploads
    const files = data.getAll('files')
    const uploadedFiles = []

    for (const file of files) {
      if (file && file.size > 0) {
        const bytes = await file.arrayBuffer()
        const buffer = Buffer.from(bytes)
        
        // Create uploads directory if it doesn't exist
        const uploadDir = path.join(process.cwd(), 'uploads')
        await fs.mkdir(uploadDir, { recursive: true })
        
        // Generate unique filename
        const filename = `${Date.now()}-${file.name}`
        const filepath = path.join(uploadDir, filename)
        
        await fs.writeFile(filepath, buffer)
        uploadedFiles.push(filename)
      }
    }

    formData.files = uploadedFiles

    // Here you would typically save to database
    // For now, we'll just log it
    console.log('New contact submission:', formData)

    return NextResponse.json({ message: 'Inquiry submitted successfully' }, { status: 200 })
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}