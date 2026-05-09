import { type Experience } from '@/lib/data'
import FadeIn from './FadeIn'

export default function ExperienceCard({ exp, index }: { exp: Experience; index: number }) {
  return (
    <FadeIn delay={index * 0.15} direction="left">
      <div className="relative pl-10 pb-14">
        {/* Dot */}
        <div className="absolute left-[-4px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent border-2 border-bg-0" />

        {/* Company + date row */}
        <div>
          <span className="font-mono text-sm tracking-[0.2em] uppercase text-text-1 font-medium mb-2 block">{exp.period}</span>
          <h4 className="font-heading font-semibold text-2xl md:text-4xl mb-2 text-accent">{exp.company}</h4>
        </div>

        {/* Role */}
        <h3 className="font-heading font-semibold text-lg md:text-2xl text-text-0 mb-1">{exp.role}</h3>
        <p className="font-mono text-xs text-text-2 mb-4 tracking-wider">{exp.location}</p>

        {/* Bullets */}
        <ul className="space-y-2 mb-5">
          {exp.bullets.map((b, i) => (
            <li key={i} className="flex gap-3 text-sm md:text-base text-text-1 font-light leading-relaxed">
              <span className="text-accent shrink-0 mt-1.5">·</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>

        {/* Stack */}
        <div className="flex flex-wrap gap-2">
          {exp.stack.map((tech) => (
            <span key={tech} className="font-mono text-xs tracking-wider uppercase text-accent px-2 py-0.5">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </FadeIn>
  )
}
