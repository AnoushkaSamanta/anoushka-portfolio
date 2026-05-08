'use client'
import { useState, useEffect } from 'react'
import { PERSONAL } from '@/lib/data'

const NAV_LINKS = [
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // IntersectionObserver for active section
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { threshold: 0.4 }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault()
    setMenuOpen(false)
    const target = document.querySelector(href)
    if (target && (window as any).lenis) {
      (window as any).lenis.scrollTo(target as HTMLElement, { offset: -80, duration: 1.4 })
    }
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? 'rgba(8,8,8,0.92)'
          : 'rgba(8,8,8,0.6)',
        backdropFilter: 'blur(16px)',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.04)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        {/* Name / Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="font-mono text-xs text-text-2 hover:text-text-0 transition-colors tracking-wider"
        >
          {PERSONAL.name.toUpperCase()}
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = activeSection === href.replace('#', '')
            return (
              <a
                key={href}
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                className="text-[11px] tracking-[0.15em] uppercase transition-colors duration-200"
                style={{
                  color: isActive ? '#C9A96E' : '#A8A59F',
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 400,
                }}
              >
                {label}
              </a>
            )
          })}
        </nav>

        {/* Availability badge */}
        <div className="hidden md:flex items-center gap-2">
          <span
            className="w-2 h-2 rounded-full bg-accent"
            style={{ animation: 'pulse 2s ease-in-out infinite' }}
          />
          <span className="font-mono text-[10px] text-text-2 tracking-wider uppercase">
            Open to opportunities
          </span>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-px bg-text-1 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-px bg-text-1 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-px bg-text-1 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-white/5 bg-bg-0 py-6 px-6">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => handleNavClick(e, href)}
              className="block py-3 text-sm text-text-1 hover:text-text-0 tracking-widest uppercase font-mono"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
