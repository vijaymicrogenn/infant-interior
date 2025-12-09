"use client"

import { useState } from "react"

const services = [
  { label: "False Ceiling", position: "top-1/4 left-1/4" },
  { label: "TV & Entertainment", position: "top-1/3 right-1/4" },
  { label: "Room Partitioning", position: "bottom-1/3 left-1/5" },
  { label: "Dining & Seating", position: "bottom-1/4 left-1/3" },
  { label: "Wall Design", position: "top-1/2 right-1/6" },
  { label: "Light Design", position: "bottom-1/5 right-1/4" },
  { label: "Flooring Design", position: "bottom-1/6 left-1/2" },
]

export default function WhatWeDo() {
  const [hoveredService, setHoveredService] = useState<string | null>(null)

  return (
    <section id="services" className="py-20 md:py-32 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-4">What We Do...</h2>
          <div className="w-12 h-1 bg-accent mx-auto" />
        </div>

        {/* Service Showcase */}
        <div className="relative w-full h-96 md:h-[500px] rounded-lg overflow-hidden shadow-lg">
          <img src="/modern-luxury-living-room-interior-design-with-arc.jpg" alt="Interior Design Services" className="w-full h-full object-cover" />

          {/* Service Labels */}
          {services.map((service) => (
            <div
              key={service.label}
              className={`absolute ${service.position} transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 ${
                hoveredService === service.label ? "scale-125" : "scale-100"
              }`}
              onMouseEnter={() => setHoveredService(service.label)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Line to Image */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-px h-8 bg-accent/50 origin-bottom" />

              {/* Label */}
              <div
                className={`bg-white rounded-full px-3 py-2 text-xs font-semibold text-foreground shadow-md transition-all ${
                  hoveredService === service.label ? "ring-2 ring-accent bg-accent text-accent-foreground" : ""
                }`}
              >
                {service.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
