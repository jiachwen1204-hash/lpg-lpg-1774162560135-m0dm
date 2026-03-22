import AnimateIn from '@/components/ui/AnimateIn'
import { cn } from '@/lib/utils'

const TRUST = [
  'Bank-grade Security',
  'ML-Powered Intelligence',
  'Enterprise Ready',
]

const CONTENT = {
  eyebrow:   'Transform Your Business',
  heading:   'Accelerate Digital Transformation with Intelligent AI',
  subtext:   'Unlock operational efficiency, automate complex workflows, and discover new pathways to scale. Our integrated AI platform simplifies work and accelerates your digital transformation journey.',
  cta:       { label: 'Start Free Trial',     href: '#contact'  },
  secondary: { label: 'Explore Solutions', href: '#services' },
}

export default function CTA() {
  return (
    <section id="contact" className="py-section relative overflow-hidden bg-[#0f0f13]">
      {/* Ambient glow orbs */}
      <div
        aria-hidden
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div className="w-[700px] h-[700px] rounded-full bg-brand-500/10 blur-[180px] animate-pulse-glow" />
        <div className="absolute top-[-20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-brand-400/8 blur-[120px]" />
      </div>

      {/* Dot grid texture */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.08]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <AnimateIn delay={0}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/10 text-brand-400 text-xs font-semibold uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse" />
            AI Platform
          </div>
        </AnimateIn>

        <AnimateIn delay={100}>
          <h2 className="font-heading font-bold text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] tracking-tight text-content-primary mb-6">
            Accelerate Digital Transformation{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-400 via-brand-300 to-brand-400 bg-[length:200%_auto] animate-shimmer">
              with Intelligent AI
            </span>
          </h2>
        </AnimateIn>

        <AnimateIn delay={200}>
          <p className="text-lg md:text-xl text-content-secondary mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            Unlock operational efficiency, automate complex workflows, and discover new pathways to scale. Our integrated AI platform simplifies work and accelerates your digital transformation journey.
          </p>
        </AnimateIn>

        <AnimateIn delay={300}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="relative">
              <div className="absolute inset-0 bg-brand-500/40 blur-2xl rounded-full scale-110" />
              <a
                href={CONTENT.cta.href}
                className="relative px-10 py-4 font-body font-semibold bg-brand-500 text-content-inverse rounded-full hover:bg-brand-600 transition-all duration-300 active:scale-[0.97] shadow-lg shadow-brand-500/25"
              >
                {CONTENT.cta.label}
              </a>
            </div>
            <a
              href={CONTENT.secondary.href}
              className="px-10 py-4 font-body font-medium border border-white/15 text-content-secondary rounded-full hover:border-brand-500/50 hover:text-content-primary hover:bg-brand-500/5 transition-all duration-300"
            >
              {CONTENT.secondary.label}
            </a>
          </div>
        </AnimateIn>

        {/* Trust strip */}
        <AnimateIn delay={400}>
          <div className="mt-16">
            <div className="h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent mb-8" />
            <p className="text-xs text-content-muted mb-5 uppercase tracking-widest">Trusted by forward-thinking teams</p>
            <div className="flex flex-wrap justify-center gap-6">
              {TRUST.map((t) => (
                <span
                  key={t}
                  className={cn(
                    'flex items-center gap-2.5 text-sm text-content-secondary',
                    'px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/8',
                    'hover:border-brand-500/30 hover:text-content-primary hover:bg-brand-500/5 transition-all duration-300'
                  )}
                >
                  <svg className="w-4 h-4 text-brand-400 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </AnimateIn>

        {/* Decorative gradient line */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />
      </div>
    </section>
  )
}