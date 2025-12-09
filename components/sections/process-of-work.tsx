"use client"

const processSteps = [
  { 
    step: 1, 
    label: "Enquiry", 
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=400&fit=crop",
    position: "top-left"
  },
  { 
    step: 2, 
    label: "Site-Visit", 
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=400&fit=crop",
    position: "middle-left"
  },
  { 
    step: 3, 
    label: "Design Approval", 
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=400&fit=crop",
    position: "center"
  },
  { 
    step: 4, 
    label: "Execution", 
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=400&fit=crop",
    position: "middle-right"
  },
  { 
    step: 5, 
    label: "Handover", 
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=400&fit=crop",
    position: "top-right"
  },
]

export default function ProcessOfWork() {
  return (
    <section id="process" className="relative py-20 px-4 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background Building Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
         
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif   text-gray-800 mb-2">
            Process of Work
          </h2>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block relative">
          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{height: '500px'}}>
            {/* Top row connections */}
            <line x1="15%" y1="30%" x2="40%" y2="40%" stroke="#d1d5db" strokeWidth="2" strokeDasharray="5,5"/>
            <line x1="60%" y1="40%" x2="85%" y2="30%" stroke="#d1d5db" strokeWidth="2" strokeDasharray="5,5"/>
            {/* Center connections */}
            <line x1="40%" y1="40%" x2="50%" y2="55%" stroke="#d1d5db" strokeWidth="2" strokeDasharray="5,5"/>
            <line x1="50%" y1="55%" x2="60%" y2="40%" stroke="#d1d5db" strokeWidth="2" strokeDasharray="5,5"/>
          </svg>

          {/* Steps positioned to match reference */}
          <div className="relative" style={{height: '500px'}}>
            {processSteps.map((item, index) => {
              const positions = {
                'top-left': 'top-[15%] left-[10%]',
                'middle-left': 'top-[35%] left-[35%]',
                'center': 'top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2',
                'middle-right': 'top-[35%] right-[35%]',
                'top-right': 'top-[15%] right-[10%]'
              }

              return (
                <div 
                  key={item.step}
                  className={`absolute ${positions[item.position]} transition-all duration-300 hover:scale-105 group`}
                >
                  {/* Circle Container */}
                  <div className="relative">
                    <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                      <img 
                        src={item.image} 
                        alt={item.label}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    
                    {/* Label below circle */}
                    <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap">
                      <p className="text-xl font-serif italic text-gray-800 text-center">
                        {item.label}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-8">
          {processSteps.map((item, index) => (
            <div key={item.step} className="relative">
              <div className="flex items-center gap-6">
                <div className="relative flex-shrink-0">
                  <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-xl">
                    <img 
                      src={item.image} 
                      alt={item.label}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div>
                  <p className="text-2xl font-serif italic text-gray-800">
                    {item.label}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">Step {item.step}</p>
                </div>
              </div>
              
              {/* Connector line */}
              {index < processSteps.length - 1 && (
                <div className="absolute left-14 top-28 w-0.5 h-8 bg-gray-300"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}