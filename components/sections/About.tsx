import AnimateIn from '@/components/ui/AnimateIn'
import { CheckCircle } from 'lucide-react'

// @lpg: Replace with real company story, values, and proof points
const CONTENT = {
  label:      'About Us',
  heading:    'Our Story',
  paragraphs: [
    'Founded with a vision to make a difference, we have spent years building expertise and delivering results for our clients.',
    'Our team brings together deep industry knowledge and a commitment to excellence that sets us apart.',
  ],
  values: [
    'Client-first approach on every project',
    'Transparent communication throughout',
    'Proven track record of measurable results',
    'Long-term partnerships over short-term gains',
  ],
  stat:  { value: '10+', label: 'Years of Excellence' },
  cta:   { label: 'Work With Us', href: '#contact' },
}

// @lpg: Replace with real company metrics — specific and credible
const STATS = [
  { value: '10+',  label: 'Years in Business'  },
  { value: '500+', label: 'Projects Delivered'  },
  { value: '98%',  label: 'Client Satisfaction' },
  { value: '50+',  label: 'Team Members'        },
]

export default function About() {
  return (
    <section id="about" className="py-section bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visual */}
          <AnimateIn direction="left">
            <div className="relative aspect-square max-w-lg mx-auto lg:mx-0">
              <div className="absolute inset-0 rounded-card-lg bg-brand-500/10" />
              <div className="absolute inset-4 rounded-card-lg shadow-card-lg bg-surface-raised flex items-center justify-center">
                {/* @lpg: Replace with a relevant visual, floating stats card, or brand element */}
                <div className="text-center p-8">
                  <div className="font-heading font-black text-display-lg text-brand-500 mb-2">
                    {CONTENT.stat.value}
                  </div>
                  <div className="text-content-muted">{CONTENT.stat.label}</div>
                </div>
              </div>
            </div>
          </AnimateIn>

          {/* Content */}
          <AnimateIn direction="right">
            <p className="text-sm font-medium tracking-widest uppercase text-brand-500 mb-3">
              {CONTENT.label}
            </p>
            <h2 className="font-heading font-black text-display-lg text-content-primary mb-6">
              {CONTENT.heading}
            </h2>
            {CONTENT.paragraphs.map((p, i) => (
              <p key={i} className="text-content-secondary leading-relaxed mb-4">
                {p}
              </p>
            ))}

            <ul className="mt-6 space-y-3 mb-8">
              {CONTENT.values.map(v => (
                <li key={v} className="flex items-start gap-3 text-sm text-content-primary">
                  <CheckCircle className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                  {v}
                </li>
              ))}
            </ul>

            <a
              href={CONTENT.cta.href}
              className="inline-flex px-6 py-3 font-body font-medium bg-brand-500 text-content-inverse rounded-card hover:bg-brand-700 hover:shadow-glow-sm transition-all ease-expo-out"
            >
              {CONTENT.cta.label}
            </a>
          </AnimateIn>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          {STATS.map((stat, i) => (
            <AnimateIn key={stat.label} delay={i * 80}>
              <div className="bg-surface-raised rounded-card-lg p-6 shadow-card text-center">
                <div className="font-heading font-black text-display-md text-brand-500 mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-content-muted uppercase tracking-wide">{stat.label}</div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
