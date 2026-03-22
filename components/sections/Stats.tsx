'use client'
import { useEffect, useRef, useState } from 'react'
import AnimateIn from '@/components/ui/AnimateIn'
import { cn } from '@/lib/utils'

interface StatItem {
  value: number
  suffix: string
  label: string
  description: string
}

const stats: StatItem[] = [
  {
    value: 200,
    suffix: '+',
    label: 'Businesses Transformed',
    description: 'Enterprises leveraging our AI ecosystem'
  },
  {
    value: 1,
    suffix: 'M+',
    label: 'AI Tasks Automated',
    description: 'Processes streamlined with machine learning'
  },
  {
    value: 99,
    suffix: '.9%',
    label: 'Accuracy Rate',
    description: 'Precision across all AI operations'
  },
  {
    value: 60,
    suffix: '%',
    label: 'Cost Reduction',
    description: 'Average operational savings achieved'
  },
]

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      observer.unobserve(el)
      const duration = 1800
      const start = performance.now()
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        setCount(Math.round(eased * target))
        if (progress < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }, { threshold: 0.3 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return <span ref={ref}>{count}{suffix}</span>
}

export default function Stats() {
  return (
    <section className="py-section relative bg-[#0a0a10] overflow-hidden">
      {/* Ambient glow orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-500/8 blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent/6 blur-[150px] pointer-events-none" />
      
      {/* Dot grid texture */}
      <div className="absolute inset-0 pointer-events-none opacity-20"
           style={{
             backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)',
             backgroundSize: '32px 32px',
             maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)',
           }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <AnimateIn delay={0}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-pill bg-brand-500/10 text-brand-500 text-xs font-medium uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
              Our Impact
            </span>
          </AnimateIn>
          <AnimateIn delay={100}>
            <h2 className="font-heading font-black text-display-xl text-content-primary">
              Numbers That Define<br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-400 via-brand-500 to-brand-400 bg-[length:200%_auto] animate-shimmer">
                Our Excellence
              </span>
            </h2>
          </AnimateIn>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <AnimateIn key={stat.label} delay={i * 100}>
              <div className="group relative bg-surface-raised/80 backdrop-blur-sm rounded-card-lg p-8 border border-surface-border/40 hover:border-brand-500/40 transition-all duration-500 hover:shadow-glow-sm">
                {/* Top accent line */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Inner glow on hover */}
                <div className="absolute inset-0 bg-brand-500/0 group-hover:bg-brand-500/[0.03] transition-colors duration-500 rounded-card-lg" />
                
                <div className="relative z-10 text-center min-h-[140px] flex flex-col items-center justify-center">
                  <div className="font-heading font-black text-[2.75rem] lg:text-display-md text-brand-500 mb-3 tracking-tight">
                    <CountUp target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="font-heading font-semibold text-lg text-content-primary mb-2">
                    {stat.label}
                  </div>
                  <div className="text-sm text-content-muted leading-relaxed">
                    {stat.description}
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Bottom gradient divider */}
        <div className="mt-16 h-px bg-gradient-to-r from-transparent via-surface-border to-transparent" />
      </div>
    </section>
  )
}