"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

interface NavbarProps {
  isOpaque: boolean
}

export default function Navbar({ isOpaque }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Our Services", href: "#services" },
 
    { label: "Gallery", href: "#gallery" },
    
 
    { label: "Blog", href: "#works" },
    { label: "Contact", href: "#contact" },
  ]

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isOpaque ? "bg-card shadow-lg border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center ">
          {/* Logo */}
          <div className="flex items-center ">
            <div className="w-16 h-16   rounded-md flex items-center justify-center">
              <img src="logo.png" alt="" />
            </div>
           
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className={`text-sm font-medium transition-all hover:text-accent relative group ${
                  isOpaque ? "text-foreground" : "text-white"
                }`}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* Desktop Enquire Button */}
          <button className="hidden md:block px-6 py-2 bg-accent text-accent-foreground rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
            Enquire
          </button>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? (
              <X className={`w-6 h-6 ${isOpaque ? "text-foreground" : "text-white"}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isOpaque ? "text-foreground" : "text-white"}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-card border-b border-border shadow-lg">
            <div className="flex flex-col p-4 gap-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="text-left text-sm font-medium text-foreground hover:text-accent transition-colors"
                >
                  {item.label}
                </button>
              ))}
             <a
  href="tel:+919688109562"
  className="w-full mt-2 px-6 py-2 bg-accent text-accent-foreground rounded-full text-sm font-semibold hover:opacity-90 transition-opacity block text-center"
>
  Enquire
</a>

            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
