import type React from "react"
import { Alkatra, Dancing_Script } from "next/font/google"
import type { Metadata } from "next"
import "./globals.css"

const alkatra = Alkatra({
  subsets: ["latin"],
  variable: "--font-alkatra",
  weight: ["400", "500", "600", "700"],
})

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Infant Interiors - Premium Interior Design Solutions",
  description:
    "Transform your spaces with Urban Interiors. Modern, luxury interior design for homes and commercial spaces.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${alkatra.variable} ${dancingScript.variable} font-alkatra antialiased`}
      >
        {children}
      </body>
    </html>
  )
}

