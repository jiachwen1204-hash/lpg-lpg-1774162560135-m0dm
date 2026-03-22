import AnimateIn from '@/components/ui/AnimateIn'

const clients = [
  'DataFlow Systems',
  'CloudMatrix Labs',
  'AIVenture Corp',
  'SmartScale Solutions',
  'Nexus Intelligence',
  'TechFlow Solutions',
]

const testimonials = [
  {
    quote: 'AI Digitalize transformed our workflow automation. We cut operational costs by 40% in the first quarter alone.',
    author: 'Marcus Chen',
    role: 'CTO, TechFlow Solutions',
  },
  {
    quote: 'The integration of their AI tools into our analytics platform was seamless. Our team productivity doubled within weeks.',
    author: 'Sarah Williams',
    role: 'VP of Operations, DataSphere',
  },
]

export default function SocialProof() {
  return (
    <section className="py-section bg-surface overflow-hidden relative">
      {/* Ambient glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-500/8 blur-[180px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <AnimateIn className="text-center mb-12">
          <p className="text-sm text-content-muted uppercase tracking-widest font-medium">
            Trusted by innovative teams
          </p>
        </AnimateIn>

        {/* Marquee */}
        <div className="relative mb-20 overflow-hidden">
          <div className="flex gap-12 animate-marquee w-max">
            {[...clients, ...clients].map((name, i) => (
              <div
                key={i}
                className="whitespace-nowrap px-6 py-3 rounded-pill bg-surface-raised/70 text-content-muted font-medium text-sm border border-surface-border/30"
              >
                {name}
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <AnimateIn key={i} delay={i * 120}>
              <div className="h-full p-8 rounded-card-lg border border-surface-border/40 bg-surface-raised shadow-card hover:border-brand-500/60 hover:shadow-card-lg transition-all duration-300 relative overflow-hidden group">
                {/* Top accent line */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" />
                {/* Hover glow */}
                <div className="absolute inset-0 bg-brand-500/0 group-hover:bg-brand-500/[0.03] transition-colors duration-300" />
                <p className="text-content-primary leading-relaxed mb-6 italic relative">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="relative">
                  <div className="font-medium text-content-primary">{t.author}</div>
                  <div className="text-sm text-content-muted">{t.role}</div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}