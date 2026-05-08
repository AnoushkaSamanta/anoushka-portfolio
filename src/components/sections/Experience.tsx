'use client'
import { EXPERIENCE } from '@/lib/data'
import ExperienceCard from '@/components/ui/ExperienceCard'
import SectionLabel from '@/components/ui/SectionLabel'
import FadeIn from '@/components/ui/FadeIn'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  })

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section id="experience" className="py-28 bg-bg-1">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <FadeIn className="flex flex-col items-center text-center">
          <SectionLabel>Work Experience</SectionLabel>
          <h2 className="font-heading font-bold text-6xl md:text-7xl text-text-0 mb-16">Experience</h2>
        </FadeIn>

        <div className="relative" ref={containerRef}>
          {/* Vertical accent line */}
          <motion.div
            className="absolute left-[0px] top-0 w-px bg-accent/30 origin-top hidden md:block"
            style={{ height: '100%', scaleY }}
          />

          {/* Cards */}
          {EXPERIENCE.map((exp, i) => (
            <ExperienceCard key={exp.id} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
