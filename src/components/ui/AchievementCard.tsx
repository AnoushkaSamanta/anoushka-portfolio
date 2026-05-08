import { type Achievement } from '@/lib/data'
import FadeIn from './FadeIn'
import { ArrowUpRight } from 'lucide-react'

export default function AchievementCard({ achievement, index }: { achievement: Achievement; index: number }) {
  return (
    <FadeIn delay={index * 0.1} direction="up">
      <div className="group relative p-8 bg-bg-2 hover:bg-bg-3 transition-all duration-300 rounded-xl overflow-hidden flex flex-col justify-between h-full">
        <div className="absolute top-6 right-6 font-display italic text-6xl leading-none text-accent/10 select-none pointer-events-none">
          {String(index + 1).padStart(2, '0')}
        </div>
        
        <div className="relative z-10">
          <span className="font-mono text-[10px] text-accent tracking-[0.2em] uppercase block mb-4">
            {achievement.type}
          </span>
        <h3 className="font-heading font-semibold text-lg text-text-0 leading-snug mb-3">
          {achievement.title}
        </h3>
        <p className="text-sm text-text-1 font-light leading-relaxed mb-5">
          {achievement.detail}
        </p>
        {achievement.certLink && (
          <a
            href={achievement.certLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-mono text-[15px] text-text-1 hover:text-accent transition-colors w-fit"
          >
            View Certificate <ArrowUpRight size={11} />
          </a>
        )}
        </div>
      </div>
    </FadeIn>
  )
}
