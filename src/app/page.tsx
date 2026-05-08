import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/sections/Hero'
import Projects from '@/components/sections/Projects'
import Experience from '@/components/sections/Experience'
import Skills from '@/components/sections/Skills'
import Achievements from '@/components/sections/Achievements'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/ui/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  )
}
