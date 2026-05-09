'use client'
import { useState } from 'react'
import { PERSONAL } from '@/lib/data'
import SectionLabel from '@/components/ui/SectionLabel'
import FadeIn from '@/components/ui/FadeIn'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Check } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof schema>

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-28 bg-bg-1">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <FadeIn className="flex flex-col items-center text-center">
          <SectionLabel>Get in Touch</SectionLabel>
          <h2 className="font-heading font-bold text-6xl md:text-7xl text-text-0 mb-6">Let&apos;s work together</h2>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          
          {/* Left Column */}
          <FadeIn direction="left">
            <p className="text-text-1 text-base font-light leading-relaxed max-w-sm mb-12">
              Open to internships, full-time roles, and project collaborations.
            </p>

            <div className="space-y-4 mb-16">
              <a href={`mailto:${PERSONAL.email}`} className="block font-mono text-sm text-text-0 hover:text-accent transition-colors">
                {PERSONAL.email}
              </a>
              <a href={`tel:${PERSONAL.phone}`} className="block font-mono text-sm text-text-0 hover:text-accent transition-colors">
                {PERSONAL.phone}
              </a>
            </div>

            <div className="flex gap-8">
              <a href={PERSONAL.github} target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-text-2 hover:text-accent hover:underline transition-colors uppercase tracking-widest">
                GitHub
              </a>
              <a href={PERSONAL.linkedin} target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-text-2 hover:text-accent hover:underline transition-colors uppercase tracking-widest">
                LinkedIn
              </a>
              
            </div>
          </FadeIn>

          {/* Right Column - Form */}
          <FadeIn direction="right" delay={0.2}>
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="h-full flex flex-col justify-center items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-full border border-accent flex items-center justify-center bg-accent/10 mb-2">
                    <Check className="text-accent" size={24} />
                  </div>
                  <h3 className="font-heading text-2xl text-text-0">Message Received</h3>
                  <p className="text-text-1 font-light">
                    Your message has been received.<br />
                    I&apos;ll be in touch shortly.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  exit={{ opacity: 0, y: -10 }}
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col gap-8"
                >
                  <div className="relative">
                    <input
                      {...register('name')}
                      placeholder="Name"
                      className="w-full bg-transparent border-b border-white/10 rounded-none py-3 font-body text-sm text-text-0 outline-none transition-colors focus:border-accent"
                      disabled={status === 'loading'}
                    />
                    {errors.name && <span className="absolute -bottom-5 left-0 text-red-500/80 text-[10px] font-mono">{errors.name.message}</span>}
                  </div>

                  <div className="relative">
                    <input
                      {...register('email')}
                      placeholder="Email"
                      className="w-full bg-transparent border-b border-white/10 rounded-none py-3 font-body text-sm text-text-0 outline-none transition-colors focus:border-accent"
                      disabled={status === 'loading'}
                    />
                    {errors.email && <span className="absolute -bottom-5 left-0 text-red-500/80 text-[10px] font-mono">{errors.email.message}</span>}
                  </div>

                  <div className="relative">
                    <textarea
                      {...register('message')}
                      placeholder="Message"
                      rows={5}
                      className="w-full bg-transparent border-b border-white/10 rounded-none py-3 font-body text-sm text-text-0 outline-none transition-colors focus:border-accent resize-none"
                      disabled={status === 'loading'}
                    />
                    {errors.message && <span className="absolute -bottom-5 left-0 text-red-500/80 text-[10px] font-mono">{errors.message.message}</span>}
                  </div>

                  {status === 'error' && (
                    <span className="text-red-500/80 text-[11px] font-mono">Something went wrong. Please try again.</span>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="mt-4 bg-accent text-bg-0 font-mono text-sm tracking-widest uppercase px-8 py-4 hover:bg-accent/90 transition-colors w-fit disabled:opacity-50"
                  >
                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </FadeIn>
          
        </div>
      </div>
    </section>
  )
}
