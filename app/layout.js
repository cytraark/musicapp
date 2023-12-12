import { Inter } from 'next/font/google'
import './globals.css'
import "rsuite/dist/rsuite.min.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Music App Test',
  description: 'Generated using NEXT JS and Tailwind with RSUITE component library.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
