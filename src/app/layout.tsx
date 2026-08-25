import type { Metadata, Viewport } from 'next'
import { Vazirmatn } from 'next/font/google'
import './globals.css'
import { Header } from './header'
import { GoToTop } from './components/go-to-top'
import { name, themeColor, title } from '@/data/resume'

const vazirmatn = Vazirmatn({
  variable: '--font-vazirmatn',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: `${name} - ${title}`,
  description: title,
  keywords: [
    'Fronted',
    'Development',
    'Vue',
    'Vue.js',
    'Nuxt',
    'Nuxt.js',
    'React',
    'React.js',
    'Next',
    'Next.js'
  ]
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className='scroll-smooth!'>
      <body className={`${vazirmatn.variable}  antialiased`}>
        <Header />
        <main>
          <GoToTop />
          {children}
        </main>
      </body>
    </html>
  )
}
