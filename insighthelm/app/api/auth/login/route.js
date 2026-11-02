import { NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'

const SECRET_KEY = process.env.JWT_SECRET || 'your-secret-key'

export async function POST(request) {
  try {
    const { email, password } = await request.json()
    
    // For demo purposes, hardcoded credentials
    // In production, check against database
    if (email === 'client@insighthelm.com' && password === 'password123') {
      const token = jwt.sign({ email, role: 'client' }, SECRET_KEY, { expiresIn: '24h' })
      
      return NextResponse.json({ 
        token, 
        user: { email, name: 'Demo Client' } 
      })
    }
    
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
  } catch (error) {
    console.error('Auth error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}