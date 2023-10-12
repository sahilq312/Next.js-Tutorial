import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/navbar'
import MyProfilePic from './components/MyProfile'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Sahil's Blog",
  description: 'Created by sahil',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <MyProfilePic/>
        {children}</body>
    </html>
  )
}
