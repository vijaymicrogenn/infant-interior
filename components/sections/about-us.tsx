export default function AboutUs() {
  return (
    <section id="about" className="py-20 md:py-32 px-4 bg-gradient-to-br from-amber-50 via-white to-stone-100 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-stone-300/20 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Creative Image Layout */}
          <div className="relative">
            {/* Main large image with frame */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-amber-400 to-orange-300 rounded-3xl transform rotate-3 opacity-20" />
              <div className="relative bg-white p-4 rounded-2xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80"
                  alt="Modern Interior Design"
                  className="w-full h-80 md:h-96 object-cover rounded-xl"
                />
              </div>
            </div>

            {/* Floating smaller image - top right */}
            <div className="absolute -top-8 -right-8 w-48 h-48 bg-white p-3 rounded-2xl shadow-xl transform rotate-6 hover:rotate-12 transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=400&q=80"
                alt="Interior Detail"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Floating smaller image - bottom left */}
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-white p-3 rounded-2xl shadow-xl transform -rotate-6 hover:-rotate-12 transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80"
                alt="Interior Detail"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Decorative badge */}
            
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            {/* Title with decorative line */}
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-1 bg-amber-500" />
                <span className="text-amber-600 font-semibold tracking-wider uppercase text-sm">Who We Are</span>
              </div>
              <h2 className="font-serif text-5xl md:text-6xl font-light italic mb-2 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                About us
              </h2>
            </div>

            {/* Text Content with enhanced styling */}
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p className="text-base md:text-lg border-l-4 border-amber-400 pl-4 italic bg-amber-50/50 py-3 rounded-r">
                At Infant Interiors, we believe every space has the potential to inspire, 
                comfort, and transform the way you live. We are a passionate interior 
                design studio dedicated to creating beautiful, functional, and timeless 
                spaces that reflect your personality and lifestyle.
              </p>

              <p className="text-base md:text-lg">
                With a blend of creativity, technical expertise, and modern design 
                sensibilities, we turn ordinary rooms into exceptional environments. From 
                concept to completion, our team works closely with clients to understand 
                their vision, needs, and budget—ensuring every detail aligns perfectly.
              </p>

              <p className="text-base md:text-lg">
                We specialize in residential interiors, commercial spaces, modular 
                kitchens, custom furniture, space planning, and full home renovations. 
                Whether it's a cozy home makeover or a complete workspace 
                transformation, we deliver designs that combine elegance, comfort, and 
                practicality.
              </p>

              <div className="flex items-center gap-3 pt-4">
                <p className="text-base md:text-lg italic font-medium">
                  At Infant Interiors, design is more than decoration—it's an <span className="text-amber-600 font-semibold underline decoration-wavy">experience</span>.
                </p>
              </div>
            </div>

            {/* Stats */}
            
          </div>
        </div>
      </div>
    </section>
  )
}