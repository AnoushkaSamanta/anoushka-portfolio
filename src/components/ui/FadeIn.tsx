'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

type Props = {
  children: React.ReactNode
  className?: string
  delay?: number          // seconds, default 0
  direction?: 'up' | 'left' | 'right' | 'none'
  duration?: number       // seconds, default 0.7
}

export default function FadeIn({
  children,
  className,
  delay = 0,
  direction = 'up',
  duration = 0.7,
}: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 28 : 0,
      x: direction === 'left' ? -28 : direction === 'right' ? 28 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number], // custom ease — natural deceleration
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={className}
    >
      {children}
    </motion.div>
  )
}
