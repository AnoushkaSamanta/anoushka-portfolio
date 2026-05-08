import { OPEN_SOURCE, CERTIFICATIONS } from '@/lib/data'
import AchievementCard from '@/components/ui/AchievementCard'
import SectionLabel from '@/components/ui/SectionLabel'
import FadeIn from '@/components/ui/FadeIn'

export default function Achievements() {
  return (
    <section id="achievements" className="py-28 bg-bg-0">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <FadeIn className="flex flex-col items-center text-center">
          <SectionLabel>Recognition</SectionLabel>
          <h2 className="font-heading font-bold text-6xl md:text-7xl text-text-0 mb-16">Achievements</h2>
        </FadeIn>

        <div className="mb-20">
          <h3 className="font-heading font-bold text-3xl md:text-4xl text-text-0 mb-8 pb-4">Open Source Contributions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {OPEN_SOURCE.map((achievement, i) => (
              <AchievementCard key={achievement.id} achievement={achievement} index={i} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-heading font-bold text-3xl md:text-4xl text-text-0 mb-8 pb-4">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CERTIFICATIONS.map((achievement, i) => (
              <AchievementCard key={achievement.id} achievement={achievement} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
