import type { Metadata } from 'next'
import { Vazirmatn } from 'next/font/google'
import './globals.css'
import { Header } from './header'
import { GoToTop } from './components/go-to-top'

const vazirmatn = Vazirmatn({
  variable: '--font-vazirmatn',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Hossein Tavangar - Frontend Developer'
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
