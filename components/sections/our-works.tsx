"use client"

import { useState } from "react"
import { X, Play } from "lucide-react"

const works = [
  {
    id: 1,
    title: "Kitchen",
    duration: "2 months",
    image: "/luxury-kitchen-interior-design-transformation.jpg",
    video: "https://commondatastorage.googleapis.com/gtv-videos-library/sample/sintel.mp4",
  },
  {
    id: 2,
    title: "Living Room",
    duration: "3 months",
    image: "/luxury-living-room-design-transformation.jpg",
    video: "https://commondatastorage.googleapis.com/gtv-videos-library/sample/sintel.mp4",
  },
  {
    id: 3,
    title: "Bedroom Suite",
    duration: "2.5 months",
    image: "/luxury-master-bedroom-design-transformation.jpg",
    video: "https://commondatastorage.googleapis.com/gtv-videos-library/sample/sintel.mp4",
  },
]

export default function OurWorks() {
  const [selectedVideo, setSelectedVideo] = useState<(typeof works)[0] | null>(null)

  return (
    <section id="works" className="py-20 md:py-32 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-4">Our Works...</h2>
          <div className="w-12 h-1 bg-accent mx-auto" />
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {works.map((work) => (
            <div
              key={work.id}
              className="group relative h-96 rounded-lg overflow-hidden cursor-pointer shadow-lg"
              onClick={() => setSelectedVideo(work)}
            >
              <img
                src={work.image || "/placeholder.svg"}
                alt={work.title}
                className="w-full h-full object-cover group-hover:brightness-75 transition-all duration-300"
              />
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300" />

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-16 h-16 bg-white/90 group-hover:bg-accent rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-all duration-300">
                  <Play className="w-6 h-6 text-primary ml-1 fill-primary" />
                </button>
              </div>

              {/* Title and Duration */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-white font-semibold text-lg">{work.title}</h3>
                <p className="text-gray-200 text-sm">{work.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-accent rounded-full hover:opacity-80 transition-opacity"
            >
              <X className="w-6 h-6" />
            </button>
            <video src={selectedVideo.video} controls autoPlay className="w-full h-auto" />
            <div className="p-4 text-white">
              <h3 className="font-serif text-2xl mb-1">{selectedVideo.title}</h3>
              <p className="text-gray-300">{selectedVideo.duration}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
