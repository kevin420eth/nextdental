import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '澄臻美學牙醫診所',
  description: '台中市最優值得牙醫診所',
}

export default function RootLayout({ children }) {
  return (
      <html lang="en">
        <body className={inter.className}>
          <header>
            <Header />
          </header>
          {children}
        </body>
      </html>
  )
}