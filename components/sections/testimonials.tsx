"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Jane",
    rating: 4.5,
    timeAgo: "Month ago",
    review: "I'm extremely happy with the living room transformation.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
  },
  {
    id: 2,
    name: "John",
    rating: 4.5,
    timeAgo: "Month ago",
    review: "I'm extremely happy with the living room transformation.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
  },
  {
    id: 3,
    name: "Kelly",
    rating: 4.5,
    timeAgo: "Month ago",
    review: "I'm extremely happy with the living room transformation.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop",
  },
  {
    id: 4,
    name: "Sam",
    rating: 4.5,
    timeAgo: "Month ago",
    review: "I'm extremely happy with the living room transformation.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
  },
  {
    id: 5,
    name: "Rita",
    rating: 4.5,
    timeAgo: "Month ago",
    review: "You extremely happy living room transformation work.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoplay, setIsAutoplay] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Enhanced auto-scroll with smooth transitions
  useEffect(() => {
    if (!isAutoplay) return

    const timer = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
        setIsTransitioning(false)
      }, 300)
    }, 3000)

    return () => clearInterval(timer)
  }, [isAutoplay])

  const nextSlide = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
      setIsTransitioning(false)
      setIsAutoplay(false)
    }, 300)
  }

  const prevSlide = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
      setIsTransitioning(false)
      setIsAutoplay(false)
    }, 300)
  }

  const getVisibleCards = () => {
    const cards = []
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + testimonials.length) % testimonials.length
      cards.push({ ...testimonials[index], position: i })
    }
    return cards
  }

  // Enhanced hover effect: pause auto-scroll when hovering over carousel
  const handleMouseEnter = () => {
    setIsAutoplay(false)
  }

  const handleMouseLeave = () => {
    setIsAutoplay(true)
  }

  return (
    <section 
      id="testimonials" 
      className="relative py-20 md:py-32 px-4 overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&h=1080&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl font-light mb-4 text-white  ">
            Testimonial
          </h2>
          <p className="text-white/90 text-lg italic">
            What our Valuable Clients says about our work and their feed-back about us.
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative h-[400px] md:h-[350px]"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            {getVisibleCards().map((testimonial, idx) => {
              const { position } = testimonial
              const isCurrent = position === 0

              // Enhanced transformations for better visual hierarchy
              const translateX = position * 280
              const scale = isCurrent ? 1 : 0.8 // Increased difference for emphasis
              const opacity = Math.abs(position) <= 1 ? 1 : 0.2 // More dramatic fade
              const zIndex = 50 - Math.abs(position)
              const rotateY = position * 15
              
              // Enhanced shadow and glow for center card
              const shadow = isCurrent 
                ? 'shadow-[0_20px_50px_rgba(255,255,255,0.3)]' 
                : 'shadow-lg'
              
              // Border glow effect for center card
              const borderEffect = isCurrent 
                ? 'border-2 border-white/50' 
                : ''

              return (
                <div
                  key={`${testimonial.id}-${idx}`}
                  className={`absolute transition-all duration-700 ease-out ${
                    isTransitioning ? 'ease-in-out' : 'ease-out'
                  }`}
                  style={{
                    transform: `translateX(${translateX}px) scale(${scale}) rotateY(${rotateY}deg)`,
                    opacity,
                    zIndex,
                    transformStyle: 'preserve-3d',
                    transition: isTransitioning ? 'transform 700ms ease-in-out, opacity 700ms ease-in-out' : 'transform 300ms ease-out, opacity 300ms ease-out',
                  }}
                >
                  <div 
                    className={`bg-white rounded-2xl p-6 w-[280px] ${shadow} ${borderEffect} ${
                      isCurrent ? 'relative overflow-hidden' : ''
                    }`}
                    style={{
                      backfaceVisibility: 'hidden',
                    }}
                  >
                    {/* Glow effect for center card */}
                    {isCurrent && (
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 pointer-events-none rounded-2xl"></div>
                    )}

                    {/* Header with avatar, name, rating */}
                    <div className="flex items-start gap-4 mb-4 relative z-10">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className={`w-16 h-16 rounded-lg object-cover shadow-md ${
                          isCurrent ? 'ring-2 ring-white/30' : ''
                        }`}
                      />
                      <div className="flex-1">
                        <h3 className={`text-xl font-semibold mb-1 ${
                          isCurrent ? 'text-gray-900' : 'text-gray-800'
                        }`}>
                          {testimonial.name}
                        </h3>
                        <div className="flex items-center gap-1">
                          <span className={`font-medium ${
                            isCurrent ? 'text-gray-900' : 'text-gray-700'
                          }`}>
                            {testimonial.rating}
                          </span>
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        </div>
                      </div>
                      <span className={`text-xs ${
                        isCurrent ? 'text-gray-500' : 'text-gray-400'
                      }`}>
                        {testimonial.timeAgo}
                      </span>
                    </div>

                    {/* Review text */}
                    <div className="mt-6 relative z-10">
                      <p className={`italic text-sm leading-relaxed ${
                        isCurrent ? 'text-gray-800' : 'text-gray-700'
                      }`}>
                        "{testimonial.review}"
                      </p>
                    </div>

                    {/* Highlight indicator for center card */}
                    {isCurrent && (
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                        <div className="w-4 h-4 bg-white rotate-45"></div>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        

         
         
      </div>
    </section>
  )
}