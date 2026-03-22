import AnimateIn from '@/components/ui/AnimateIn'

const clients = [
  { name: 'DataFlow Systems', logo: 'DF' },
  { name: 'CloudMatrix Labs', logo: 'CM' },
  { name: 'AIVenture Corp', logo: 'AI' },
  { name: 'SmartScale Solutions', logo: 'SS' },
  { name: 'Nexus Intelligence', logo: 'NI' },
  { name: 'TechFlow Solutions', logo: 'TF' },
]

const testimonials = [
  {
    quote: 'AI Digitalize transformed our workflow automation. We cut operational costs by 40% in the first quarter alone.',
    author: 'Marcus Chen',
    role: 'CTO, TechFlow Solutions',
    metric: '40%',
    metricLabel: 'Cost Reduction',
  },
  {
    quote: 'The integration of their AI tools into our analytics platform was seamless. Our team productivity doubled within weeks.',
    author: 'Sarah Williams',
    role: 'VP of Operations, DataSphere',
    metric: '2x',
    metricLabel: 'Productivity',
  },
]

const stats = [
  { value: 2400, suffix: '+', label: 'Enterprise Clients' },
  { value: 98, suffix: '%', label: 'Customer Satisfaction' },
  { value: 40, suffix: '%', label: 'Avg Cost Reduction' },
]

export default function SocialProof() {
  return (
    <section className="py-section-lg bg-[#080810] overflow-hidden relative">
      {/* Dot grid background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)',
        }}
      />
      
      {/* Noise texture */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '256px 256px',
        }}
      />

      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <AnimateIn className="text-center mb-16">
          <p className="text-sm text-brand-400 uppercase tracking-widest font-medium mb-4">
            Trusted by Industry Leaders
          </p>
          <h2 className="font-heading text-[clamp(2.5rem,5vw,4rem)] font-bold text-content-primary leading-[1.1] tracking-tight">
            Trusted by{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-400 via-violet-400 to-brand-400 bg-[length:200%_auto] animate-shimmer">
              2,400+
            </span>{' '}
            <br className="hidden sm:block" />
            Innovative Teams
          </h2>
        </AnimateIn>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-8 mb-20 max-w-4xl mx-auto">
          {stats.map((stat, i) => (
            <AnimateIn key={i} delay={i * 100}>
              <div className="text-center relative">
                {/* Giant background number */}
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 font-heading font-black text-[4rem] text-brand-500/[0.06] leading-none select-none pointer-events-none">
                  {stat.value}
                </span>
                <div className="relative">
                  <div className="font-heading font-bold text-[clamp(2rem,4vw,3rem)] text-content-primary">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-sm text-content-muted mt-2 font-light">{stat.label}</div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Client Logos */}
        <AnimateIn className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {clients.map((client, i) => (
              <div
                key={i}
                className="group relative p-6 rounded-xl border border-surface-border/40 bg-surface-raised/30 hover:bg-surface-raised/60 hover:border-brand-500/30 transition-all duration-300 flex items-center justify-center"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-brand-500/0 group-hover:bg-brand-500/[0.05] rounded-xl transition-colors duration-300" />
                {/* Logo icon */}
                <div className="relative flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-brand-500/20 to-violet-500/20 border border-brand-500/20 flex items-center justify-center">
                    <span className="font-heading font-bold text-brand-400 text-lg">
                      {client.logo}
                    </span>
                  </div>
                  <span className="text-xs text-content-muted font-medium text-center leading-tight">
                    {client.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </AnimateIn>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <AnimateIn key={i} delay={i * 150}>
              <div className="h-full p-8 rounded-card-lg border border-surface-border/40 bg-surface-raised/30 hover:border-brand-500/60 hover:bg-surface-raised/50 transition-all duration-300 relative overflow-hidden group">
                {/* Top accent line */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" />
                {/* Hover glow */}
                <div className="absolute inset-0 bg-brand-500/0 group-hover:bg-brand-500/[0.04] transition-colors duration-300" />
                
                {/* Metric badge */}
                <div className="absolute top-6 right-6">
                  <div className="px-3 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20">
                    <span className="font-heading font-bold text-brand-400 text-lg">{t.metric}</span>
                    <span className="text-xs text-brand-400/70 ml-1">{t.metricLabel}</span>
                  </div>
                </div>

                {/* Quote mark */}
                <div className="absolute top-6 left-4 text-6xl font-serif text-brand-500/10 leading-none select-none">
                  &ldquo;
                </div>
                
                <p className="text-content-primary/90 leading-relaxed mb-8 italic relative text-lg font-light">
                  {t.quote}
                </p>
                
                <div className="relative flex items-center gap-4">
                  {/* Avatar placeholder */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-500/30 to-violet-500/30 border border-brand-500/20 flex items-center justify-center">
                    <span className="font-heading font-bold text-brand-400">
                      {t.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-heading font-semibold text-content-primary">{t.author}</div>
                    <div className="text-sm text-content-muted">{t.role}</div>
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}