"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    id: 1,
    question: "What is your design process?",
    answer:
      "Our design process begins with a consultation to understand your needs and vision. We then conduct a site visit, create design concepts, gather your feedback, finalize the designs, and finally execute the project with precision and professionalism.",
  },
  {
    id: 2,
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary depending on scope and complexity. A small bedroom redesign typically takes 4-6 weeks, while a complete home renovation can take 3-6 months. We provide detailed timelines during the initial consultation.",
  },
  {
    id: 3,
    question: "Do you provide 3D design visualizations?",
    answer:
      "Yes, we provide comprehensive 3D visualizations for all projects. This allows you to see the final design before implementation and make any adjustments needed.",
  },
  {
    id: 4,
    question: "Can I customize the design to my budget?",
    answer:
      "Absolutely. We work with clients of all budgets. During our initial consultation, we discuss your budget and create design solutions that maximize value while maintaining quality and aesthetics.",
  },
  {
    id: 5,
    question: "Do you handle complete renovation work?",
    answer:
      "Yes, we manage complete renovation projects from design to construction. We have partnerships with trusted contractors and suppliers, ensuring quality workmanship throughout.",
  },
  {
    id: 6,
    question: "What is your warranty or guarantee on work?",
    answer:
      "We stand behind our work with a comprehensive warranty on all design implementation and materials. We also provide after-sales support for any adjustments needed.",
  },
  {
    id: 7,
    question: "Do you offer maintenance and consulting after project completion?",
    answer:
      "Yes, we offer ongoing consulting and maintenance services to help you maintain your beautiful spaces. We can visit periodically to ensure everything is in perfect condition.",
  },
]

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(1)

  return (
    <section id="faq" className="py-20 md:py-32 px-4 bg-secondary/10">
      <div className="max-w-2xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-4">Frequently Asked Questions (FAQs)</h2>
          <div className="w-12 h-1 bg-accent mx-auto" />
        </div>

        {/* Accordion Items */}
        <div className="space-y-3">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="border border-border rounded-lg overflow-hidden bg-card shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-secondary/5 transition-colors"
              >
                <span className="text-left font-semibold text-foreground text-base md:text-lg">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-accent flex-shrink-0 transition-transform duration-300 ${
                    openId === faq.id ? "transform rotate-180" : ""
                  }`}
                />
              </button>

              {/* Accordion Content */}
              {openId === faq.id && (
                <div className="px-6 py-4 bg-secondary/5 border-t border-border">
                  <p className="text-foreground/70 text-base leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
