'use client'
import { motion } from 'framer-motion'
import { ArrowUpRight, ArrowDown } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } }
  }
  const item = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } }
  }

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target && (window as any).lenis) {
      (window as any).lenis.scrollTo(target as HTMLElement, { offset: -80, duration: 1.4 })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 bg-bg-0 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-16 items-center">

          {/* Left: 3 cols */}
          <motion.div className="md:col-span-3" variants={container} initial="hidden" animate="visible">
            <motion.p variants={item} className="font-mono text-xs text-accent tracking-widest uppercase mb-6">
              CGPA 9.95 · IIIT Kottayam · 2023–2027
            </motion.p>

            <motion.h1 variants={item} className="font-display text-[100px] md:text-[120px] leading-[0.92] font-light italic text-text-0 mb-6">
              Anoushka<br />
              <span className="ml-4 md:ml-8">Samanta</span>
            </motion.h1>

            <motion.div variants={item} className="w-12 h-px bg-accent mb-6" />

           

            <motion.p variants={item} className="text-text-1 text-lg md:text-xl font-light leading-relaxed max-w-xl mb-10">
              B.Tech CSE student at IIIT Kottayam passionate about turning complex, repetitive workflows into clean, automated solutions — from full-stack web applications to AI-driven tools with a growing footprint in DevOps and machine learning.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap items-center gap-6">
              {/* Contact Me button */}
              <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}
                 className="border border-accent/40 text-accent text-base px-8 py-4 hover:bg-accent/10 transition-all duration-300 tracking-wide font-mono rounded-lg">
                Contact Me
              </a>
              {/* Resume Button */}
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
                 className="bg-accent text-bg-0 text-base px-8 py-4 hover:bg-accent/90 transition-all duration-300 tracking-wide font-mono flex items-center gap-2 rounded-lg font-semibold">
                View Resume <ArrowUpRight size={16} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right: 2 cols */}
          <motion.div
            className="md:col-span-2 hidden md:block"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          >
            {/* Photo */}
            <div className="relative">
              <div className="aspect-[3/4] bg-bg-2 overflow-hidden relative group rounded-2xl">
                <Image
                  src="/anoushka.jpeg"
                  alt="Anoushka Samanta"
                  fill
                  priority
                  className="object-cover transition-all duration-500"
                />
              </div>
            </div>
          </motion.div>

        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <span className="font-mono text-[10px] text-text-2 tracking-widest uppercase">Scroll</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
            <ArrowDown size={12} className="text-text-2" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
