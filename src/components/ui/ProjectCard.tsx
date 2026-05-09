'use client'
import { type Project } from '@/lib/data'
import FadeIn from './FadeIn'
import { ArrowUpRight } from 'lucide-react'

export default function ProjectCard({ project, index, onClick }: { project: Project; index: number; onClick: () => void }) {
  return (
    <FadeIn delay={index * 0.12} direction="up">
      <div
        onClick={onClick}
        className="group relative py-12 px-4 hover:bg-bg-2 transition-all duration-400 cursor-pointer rounded-lg"
        style={{ borderLeft: '2px solid transparent' }}
        onMouseEnter={(e) => { e.currentTarget.style.borderLeftColor = '#C9A96E' }}
        onMouseLeave={(e) => { e.currentTarget.style.borderLeftColor = 'transparent' }}
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">

          {/* Project number */}
          <div className="md:col-span-1 hidden md:block">
            <span className="font-display italic text-6xl leading-none text-accent/30 select-none">
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>

          {/* Main content */}
          <div className="md:col-span-11">
            <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-2">
              <div>
                <h3 className="font-heading font-bold text-4xl md:text-5xl text-text-0 mb-2">{project.title}</h3>
                <p className="font-mono text-base text-text-2 tracking-wide">{project.subtitle}</p>
              </div>
              <div className="flex flex-col md:items-end gap-2">
                <span className="font-mono text-base text-text-1 font-medium">{project.date}</span>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()} // Prevent opening modal when clicking link
                  className="flex items-center gap-1.5 font-mono text-base text-accent hover:text-accent/80 transition-colors tracking-wider font-semibold"
                >
                  GitHub <ArrowUpRight size={18} />
                </a>
              </div>
            </div>

            {/* Description */}
            <p className="text-text-1 text-base md:text-lg font-light leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Read More button (visible on hover) */}
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="inline-block border border-accent/40 text-accent text-xs px-4 py-2 hover:bg-accent/10 transition-all font-mono tracking-wider">
                Read Details
              </span>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  )
}
