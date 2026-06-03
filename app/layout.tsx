import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'
import './globals.css'

const notoSans = Noto_Sans({
  subsets: ['latin'],
  variable: '--font-noto-sans',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})


export const metadata: Metadata = {
  title: 'Student Dashboard',
  description: 'A personalized dashboard for students to track their courses, assignments, and progress.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark ${notoSans.variable}`}>
      <body className="bg-bg-base text-text-primary font-body antialiased">
        {children}
      </body>
    </html>
  )
}
