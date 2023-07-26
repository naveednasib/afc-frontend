"use client"
import './globals.css'
import type { Metadata } from 'next'
import  Header  from '../components/layout/header'
import  Footer  from '../components/layout/footer'



export const metadata: Metadata = {
  title: 'AFC ASIAN CUP 2023',
  description: 'The 18th edition of the AFC Asian Cup, Hosted in Qatar from January 12th to February 10th 2024.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
