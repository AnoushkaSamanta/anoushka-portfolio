'use client'

import { useEffect, useState } from 'react'
import { motion, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  // Smooth spring physics for the outer circle
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 }
  const cursorXSpring = useSpring(0, springConfig)
  const cursorYSpring = useSpring(0, springConfig)

  useEffect(() => {
    // Only run on non-touch devices
    if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) {
      return
    }

    const updateMousePosition = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true)
      setMousePosition({ x: e.clientX, y: e.clientY })
      cursorXSpring.set(e.clientX)
      cursorYSpring.set(e.clientY)
    }

    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    // Detect hover on interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isInteractive = !!target.closest('a, button, [role="button"], input, select, textarea, [tabindex]:not([tabindex="-1"])')
      setIsHovering(isInteractive)
    }

    window.addEventListener('mousemove', updateMousePosition)
    window.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('mouseenter', handleMouseEnter)
    window.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      window.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('mouseenter', handleMouseEnter)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [cursorXSpring, cursorYSpring, isVisible])

  if (typeof window === 'undefined' || !isVisible) return null

  return (
    <>
      {/* Inner Dot - moves instantly */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-accent rounded-full pointer-events-none z-[9999]"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovering ? 0 : 1,
          opacity: 1
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.15 }}
      />

      {/* Outer Circle - moves with spring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-accent rounded-full pointer-events-none z-[9999] flex items-center justify-center"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%'
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? 'rgba(201, 169, 110, 0.15)' : 'transparent',
          borderWidth: isHovering ? '0px' : '1px'
        }}
      />
    </>
  )
}
