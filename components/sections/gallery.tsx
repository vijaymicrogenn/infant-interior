"use client"

import { useState } from "react"

const galleryCategories = ["Living Room", "Kitchen", "Dining Room", "Bedroom", "Washroom", "Balcony"]

const galleryItems = [
  { id: 1, category: "Living Room", image: "/modern-living-room.png" },
  { id: 2, category: "Living Room", image: "/luxury-sofa-living-area-design.jpg" },
  { id: 3, category: "Living Room", image: "/contemporary-living-space.png" },
  { id: 4, category: "Kitchen", image: "/modern-kitchen-design-interior.jpg" },
  { id: 5, category: "Kitchen", image: "/canyon-village-storage/image3.png" },
  { id: 6, category: "Kitchen", image: "/contemporary-kitchen.png" },
  { id: 7, category: "Bedroom", image: "/luxury-bedroom.png" },
  { id: 8, category: "Bedroom", image: "/modern-master-bedroom.jpg" },
  { id: 9, category: "Bedroom", image: "/contemporary-bedroom.png" },
]

export default function Gallery() {
  const [activeTab, setActiveTab] = useState("Living Room")

  const filteredItems = galleryItems.filter((item) => item.category === activeTab)

  return (
    <section id="gallery" className="py-20 md:py-32 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-4">Gallery</h2>
          <div className="w-12 h-1 bg-accent mx-auto" />
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-6 mb-12 border-b border-border pb-6">
          {galleryCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`text-sm font-medium transition-all pb-2 relative group ${
                activeTab === category ? "text-accent font-semibold" : "text-foreground/60 hover:text-foreground"
              }`}
            >
              {category}
              {activeTab === category && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-accent" />}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div key={item.id} className="group relative h-72 rounded-lg overflow-hidden shadow-md cursor-pointer">
              <img
                src={item.image || "/placeholder.svg"}
                alt={`${item.category} design`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button className="px-6 py-2 bg-accent text-accent-foreground rounded-full font-semibold hover:opacity-90 transition-opacity">
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
