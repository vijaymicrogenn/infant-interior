"use client"

import { useState, useRef, useEffect } from "react"
import { X, Play } from "lucide-react"

const works = [
  {
    id: 1,
    title: "Kitchen",
    duration: "2 months",
    image: "/luxury-kitchen-interior-design-transformation.jpg",
    video: "/vid1.mp4",
  },
  {
    id: 2,
    title: "Living Room",
    duration: "3 months",
    image: "/luxury-living-room-design-transformation.jpg",
    video: "/vid2.mp4",
  },
  {
    id: 3,
    title: "Bedroom Suite",
    duration: "2.5 months",
    image: "/luxury-master-bedroom-design-transformation.jpg",
    video: "/vid3.mp4",
  },
]

export default function OurWorks() {
  const [selectedVideo, setSelectedVideo] = useState<(typeof works)[0] | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Close modal with Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedVideo(null)
    }
    
    if (selectedVideo) {
      document.body.style.overflow = "hidden"
      document.addEventListener("keydown", handleEscape)
    }
    
    return () => {
      document.body.style.overflow = "unset"
      document.removeEventListener("keydown", handleEscape)
    }
  }, [selectedVideo])

  // Reset video when modal closes
  useEffect(() => {
    if (!selectedVideo && videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }, [selectedVideo])

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
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div 
            className="relative w-full max-w-6xl bg-black rounded-lg overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/80 backdrop-blur-sm rounded-full hover:scale-110 transition-all duration-200"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            
            {/* Video Container */}
            <div className="relative w-full h-auto aspect-video bg-black">
              <video
                ref={videoRef}
                src={selectedVideo.video}
                controls
                autoPlay
                className="w-full h-full object-contain"
                controlsList="nodownload"
                playsInline
              />
            </div>
            
            {/* Video Info */}
            <div className="p-6 text-white bg-gradient-to-t from-black to-gray-900">
              <h3 className="font-serif text-3xl mb-2">{selectedVideo.title}</h3>
              <p className="text-gray-300 text-lg">Duration: {selectedVideo.duration}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}