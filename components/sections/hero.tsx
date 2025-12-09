"use client"

import { ArrowRight, Play } from "lucide-react"

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full h-screen min-h-[90vh] bg-primary flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('/banner.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-primary/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <p className="text-accent text-sm font-semibold tracking-widest mb-4 uppercase">Modern Interior Solutions</p>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white font-light mb-6 tracking-tight">
          Transform Your Space With Us
        </h1>
         

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
           
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="text-white text-center text-sm">
          <p className="mb-2">Scroll to explore</p>
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}
