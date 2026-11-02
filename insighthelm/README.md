# InsightHelm Consulting Website

A modern, professional consulting website built with Next.js, featuring client intake, file uploads, secure portal, and admin dashboard.

## Features

- **Professional Homepage**: Hero section, services overview, testimonials, and call-to-action
- **Client Intake Process**: Structured form for project inquiries with file upload capability
- **Secure Client Portal**: Protected area for clients to view project status and milestones
- **Admin Dashboard**: Management interface for handling client submissions and project tracking
- **Responsive Design**: Mobile-friendly across all devices
- **SEO Optimized**: Best practices for search engine visibility
- **Security Focused**: Secure authentication, file upload protection, and data handling

## Tech Stack

- **Frontend**: Next.js 14, React, Tailwind CSS
- **Backend**: Next.js API Routes
- **Authentication**: JWT tokens
- **File Storage**: Local file system (configurable for cloud storage)
- **Styling**: Tailwind CSS with custom design system

## Setup Instructions

1. **Clone and Install**:
   ```bash
   cd insighthelm
   npm install
   ```

2. **Environment Variables**:
   Create a `.env.local` file:
   ```
   JWT_SECRET=your-super-secret-jwt-key-here
   ```

3. **Run Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000)

4. **Build for Production**:
   ```bash
   npm run build
   npm start
   ```

## Usage Guide

### For Clients

1. **Submit Project Inquiry**:
   - Visit `/contact`
   - Fill out the detailed project form
   - Upload relevant files (PDF, Word, Excel, etc.)
   - Submit to initiate the process

2. **Access Client Portal**:
   - Visit `/portal`
   - Login with provided credentials
   - View project status and milestones

### For Administrators

1. **Access Admin Dashboard**:
   - Visit `/admin`
   - Login with admin credentials
   - View all client submissions
   - Update project statuses

### Demo Credentials

- **Client Portal**: client@insighthelm.com / password123
- **Admin Dashboard**: admin@insighthelm.com / admin123

## Security Features

- JWT-based authentication
- Secure file upload with type validation
- Protected API routes
- Input sanitization
- HTTPS ready (configure SSL in production)

## File Uploads

- Supported formats: PDF, Word, Excel, PowerPoint, Images
- Files stored in `/uploads` directory
- Secure filename generation to prevent conflicts

## Customization

- **Branding**: Update colors in `tailwind.config.js`
- **Content**: Modify components in `/components`
- **Services**: Edit services array in `components/Services.js`
- **Testimonials**: Update testimonials in `components/Testimonials.js`

## Deployment

1. Build the application: `npm run build`
2. Deploy to hosting platform (Vercel, Netlify, AWS, etc.)
3. Configure environment variables
4. Set up domain and SSL certificate
5. Configure file storage (local or cloud service)

## Future Enhancements

- Database integration (MongoDB/PostgreSQL)
- Email notifications
- Advanced project management features
- Analytics dashboard
- Multi-language support
- Payment integration for project deposits

## Support

For technical support or customization requests, please contact the development team.