'use client'
import { useState, useEffect } from 'react'
import { PROJECTS, type Project } from '@/lib/data'
import ProjectCard from '@/components/ui/ProjectCard'
import FadeIn from '@/components/ui/FadeIn'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowUpRight } from 'lucide-react'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden'
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if ((window as any).lenis) (window as any).lenis.stop()
    } else {
      document.body.style.overflow = 'unset'
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if ((window as any).lenis) (window as any).lenis.start()
    }
  }, [selectedProject])

  return (
    <section id="projects" className="py-28 bg-bg-0 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeIn className="flex flex-col items-center text-center">
       
          <h2 className="font-heading font-bold text-4xl sm:text-5xl md:text-7xl text-text-0 mb-16">Projects</h2>
        </FadeIn>

        <div className="flex flex-col gap-4">
          {PROJECTS.map((project, i) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={i} 
              onClick={() => setSelectedProject(project)} 
            />
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-bg-1 border border-white/10 rounded-xl overflow-hidden flex flex-col shadow-2xl"
            >
              <button 
                onClick={(e) => { e.stopPropagation(); setSelectedProject(null); }}
                className="absolute top-4 right-4 z-[100] p-2 bg-black/50 hover:bg-black text-white rounded-full transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <div className="overflow-y-auto w-full custom-scrollbar">
                {/* Content Area */}
                <div className="p-8 md:p-12 relative z-10">
                  <h3 className="font-heading font-bold text-4xl md:text-5xl text-text-0 mb-2">{selectedProject.title}</h3>
                  <p className="font-mono text-base text-text-2 tracking-wide mb-6">{selectedProject.subtitle}</p>

                  <div className="mb-10">
                    <h4 className="font-mono text-[10px] text-text-2 uppercase tracking-[0.2em] mb-4">Tech Stack</h4>
                    <div className="flex flex-wrap gap-x-4 gap-y-2">
                      {selectedProject.stack.map(tech => (
                        <span key={tech} className="font-mono text-sm text-accent">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-12">
                    <h4 className="font-mono text-[10px] text-text-2 uppercase tracking-[0.2em] mb-4">Key Details</h4>
                    <ul className="space-y-4">
                      {selectedProject.detailedBullets.map((b, i) => (
                        <li key={i} className="flex gap-4 text-base text-text-1 font-light leading-relaxed">
                          <span className="text-accent mt-1.5 shrink-0">·</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-8 border-t border-white/10 flex items-center justify-between">
                    <span className="font-mono text-sm text-text-1 font-medium">{selectedProject.date}</span>
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 font-mono text-base text-accent hover:text-accent/80 transition-colors tracking-wider font-semibold"
                    >
                      View on GitHub <ArrowUpRight size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
