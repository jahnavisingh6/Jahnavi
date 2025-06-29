import './globals.css'
import type { Metadata } from 'next'
import './globals.css'
import Navbar from './components/Navbar'

export const metadata: Metadata = {
  title: 'Jahnavi Singh | Data Scientist & AI Engineer',
  description: 'Portfolio website of Jahnavi Singh - Data Scientist and AI Engineer specializing in machine learning, computer vision, and data engineering.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
