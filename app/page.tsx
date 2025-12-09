"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/sections/hero"
import AboutUs from "@/components/sections/about-us"
import WhatWeDo from "@/components/sections/what-we-do"
import ProcessOfWork from "@/components/sections/process-of-work"
import Gallery from "@/components/sections/gallery"
import OurWorks from "@/components/sections/our-works"
import Testimonials from "@/components/sections/testimonials"
import FAQ from "@/components/sections/faq"
import Footer from "@/components/footer"

export default function Home() {
  const [navbarOpaque, setNavbarOpaque] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setNavbarOpaque(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar isOpaque={navbarOpaque} />
      <Hero />
      <AboutUs />
      <WhatWeDo />
      <ProcessOfWork />
      <Gallery />
      <OurWorks />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  )
}
