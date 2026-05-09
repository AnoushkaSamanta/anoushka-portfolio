'use client'
import { useState, useEffect } from 'react'
import { SKILLS } from '@/lib/data'
import SectionLabel from '@/components/ui/SectionLabel'
import FadeIn from '@/components/ui/FadeIn'
import { motion } from 'framer-motion'

export default function Skills() {
  const categories = Object.entries(SKILLS)
  const [activeCategory, setActiveCategory] = useState(0)

  // Track which category is currently in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0')
            setActiveCategory(index)
          }
        })
      },
      { rootMargin: '-40% 0px -40% 0px' }
    )

    const elements = document.querySelectorAll('.skill-section')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="py-28 bg-bg-1">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <FadeIn className="flex flex-col items-center text-center mb-24">
          
          <h2 className="font-heading font-bold text-6xl md:text-7xl text-text-0">Skills</h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 relative">
          
          {/* Left Column: Sticky Navigation (Desktop Only) */}
          <div className="md:col-span-5 hidden md:block">
            <div className="sticky top-40 space-y-12">
              {categories.map(([category, _], index) => {
                const isActive = activeCategory === index
                return (
                  <div 
                    key={category} 
                    className={`transition-all duration-500 ease-out origin-left ${
                      isActive ? 'opacity-100 scale-100' : 'opacity-20 scale-95'
                    }`}
                  >
                    <span className="font-display italic text-6xl leading-none text-accent/30 select-none block mb-4">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="w-12 h-px bg-accent my-4" />
                    <h3 className="font-heading font-bold text-4xl text-text-0">{category}</h3>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Column: Scrolling Content */}
          <div className="md:col-span-7 space-y-40 pb-40">
            {categories.map(([category, items], index) => (
              <div 
                key={category} 
                data-index={index} 
                className="skill-section scroll-mt-40 flex flex-col"
              >
                {/* Mobile Heading (Hidden on Desktop) */}
                <div className="md:hidden mb-8">
                  <span className="font-display italic text-5xl leading-none text-accent/30 select-none block mb-4">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="w-10 h-px bg-accent my-3" />
                  <h3 className="font-heading font-bold text-3xl text-text-0">{category}</h3>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {items.map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-20px' }}
                      transition={{ delay: i * 0.05, duration: 0.4 }}
                      className="flex flex-col items-center justify-center p-6 bg-bg-2 hover:bg-bg-3 border border-white/5 hover:border-accent/30 rounded-xl transition-all duration-300 gap-4 group"
                    >
                      {skill.icon ? (
                        <i className={`${skill.icon} text-4xl opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 drop-shadow-sm`} />
                      ) : (
                        <div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                          <span className="text-accent font-mono text-xs opacity-70 group-hover:opacity-100 transition-opacity">{"<>"}</span>
                        </div>
                      )}
                      <span className="font-mono text-[11px] text-text-1 text-center tracking-wider">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
