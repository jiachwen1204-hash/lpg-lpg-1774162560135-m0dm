import AnimateIn from '@/components/ui/AnimateIn'
import { CheckCircle, Brain, Zap, Shield, TrendingUp, Users } from 'lucide-react'

interface ValueItem {
  icon: React.ReactNode
  text: string
}

interface StatItem {
  value: string
  label: string
  icon: React.ReactNode
}

const CONTENT = {
  label: 'About Us',
  heading: 'Building the Future of',
  headingAccent: 'Intelligent Automation',
  paragraphs: [
    'We are an all-in-one AI technology company that builds intelligent tools designed to simplify work, automate processes, and accelerate digital transformation.',
    'Our platform integrates multiple AI capabilities — including content generation, data analysis, workflow automation, customer engagement, and decision support — into a single seamless ecosystem.',
    'By combining powerful machine learning models with user-friendly software, we help businesses reduce operational costs, improve productivity, and unlock new growth opportunities.',
  ],
  values: [
    { icon: <Brain className="w-5 h-5" />, text: 'Cutting-edge AI technology built for real-world usability' },
    { icon: <Shield className="w-5 h-5" />, text: 'Enterprise-grade security and scalable infrastructure' },
    { icon: <Users className="w-5 h-5" />, text: 'Accessible solutions for organizations of all sizes' },
    { icon: <TrendingUp className="w-5 h-5" />, text: 'Measurable impact on productivity and growth' },
  ],
  cta: { label: 'Get Started', href: '#contact' },
}

const STATS: StatItem[] = [
  { value: '50+', label: 'Enterprise Clients', icon: <Users className="w-5 h-5" /> },
  { value: '1M+', label: 'AI Outputs Generated', icon: <Zap className="w-5 h-5" /> },
  { value: '99.9%', label: 'Platform Uptime', icon: <Shield className="w-5 h-5" /> },
  { value: '<100ms', label: 'Avg Response Time', icon: <TrendingUp className="w-5 h-5" /> },
]

const CAPABILITIES = [
  { title: 'Content Generation', desc: 'Create compelling content at scale with AI-powered writing tools' },
  { title: 'Data Analysis', desc: 'Transform raw data into actionable insights instantly' },
  { title: 'Workflow Automation', desc: 'Streamline operations with intelligent process automation' },
  { title: 'Customer Engagement', desc: 'Deliver personalized experiences that drive loyalty' },
  { title: 'Decision Support', desc: 'Make confident choices with AI-assisted analytics' },
]

export default function About() {
  return (
    <section id="about" className="relative py-section overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-[#0f0f13]" />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-brand-500/8 blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-accent/6 blur-[150px] pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '256px 256px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Visual */}
          <AnimateIn direction="left">
            <div className="relative">
              {/* Main visual card */}
              <div className="relative aspect-square max-w-md mx-auto lg:mx-0">
                <div className="absolute inset-0 rounded-card-lg bg-gradient-to-br from-brand-500/20 via-transparent to-accent/10" />
                <div className="absolute inset-4 rounded-card bg-surface-raised border border-surface-border overflow-hidden">
                  {/* Abstract AI visualization */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-48 h-48">
                      {/* Central glow */}
                      <div className="absolute inset-0 rounded-full bg-brand-500/30 blur-2xl animate-pulse" />
                      {/* Orbiting dots */}
                      {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                        <div
                          key={angle}
                          className="absolute w-3 h-3 rounded-full bg-brand-500"
                          style={{
                            top: '50%',
                            left: '50%',
                            transform: `rotate(${angle}deg) translateX(80px) translateY(-50%)`,
                            animationDelay: `${i * 0.2}s`,
                          }}
                        />
                      ))}
                      {/* Center icon */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Brain className="w-16 h-16 text-brand-500/60" />
                      </div>
                    </div>
                  </div>

                  {/* Floating stat cards */}
                  <div className="absolute top-4 left-4 bg-surface border border-surface-border rounded-card p-3 shadow-card animate-float">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-brand-500/20 flex items-center justify-center">
                        <Zap className="w-4 h-4 text-brand-500" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-content-primary">99.9%</div>
                        <div className="text-[10px] text-content-muted">Uptime</div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-4 right-4 bg-surface border border-surface-border rounded-card p-3 shadow-card animate-float" style={{ animationDelay: '1.5s' }}>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-brand-500/20 flex items-center justify-center">
                        <TrendingUp className="w-4 h-4 text-brand-500" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-content-primary">+40%</div>
                        <div className="text-[10px] text-content-muted">Productivity</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Capabilities preview */}
              <div className="grid grid-cols-2 gap-3 mt-6 max-w-md mx-auto lg:mx-0">
                {CAPABILITIES.slice(0, 4).map((cap, i) => (
                  <div
                    key={cap.title}
                    className="bg-surface-raised/50 rounded-card p-3 border border-surface-border/40"
                  >
                    <div className="text-xs font-semibold text-content-primary mb-1">{cap.title}</div>
                    <div className="text-[10px] text-content-muted leading-tight">{cap.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </AnimateIn>

          {/* Right: Content */}
          <AnimateIn direction="right">
            <p className="inline-flex items-center gap-2 text-sm font-medium tracking-widest uppercase text-brand-500 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
              {CONTENT.label}
            </p>
            <h2 className="font-heading font-black text-display-lg text-content-primary mb-4 leading-tight">
              {CONTENT.heading}
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-400 via-accent to-brand-400 bg-[length:200%_auto] animate-shimmer">
                {CONTENT.headingAccent}
              </span>
            </h2>

            {CONTENT.paragraphs.map((p, i) => (
              <p key={i} className="text-content-secondary leading-relaxed mb-4">
                {p}
              </p>
            ))}

            <ul className="mt-8 space-y-4 mb-8">
              {CONTENT.values.map((v, i) => (
                <li key={i} className="flex items-start gap-4 text-sm text-content-primary">
                  <div className="w-10 h-10 rounded-card bg-brand-500/10 flex items-center justify-center shrink-0 text-brand-500">
                    {v.icon}
                  </div>
                  <span className="pt-2">{v.text}</span>
                </li>
              ))}
            </ul>

            <div className="relative inline-flex">
              <div className="absolute inset-0 bg-brand-500/40 blur-xl rounded-pill scale-110 pointer-events-none" />
              <a
                href={CONTENT.cta.href}
                className="relative z-10 inline-flex items-center gap-2 px-8 py-4 font-body font-semibold bg-brand-500 text-content-inverse rounded-pill hover:bg-brand-600 transition-all duration-300"
              >
                {CONTENT.cta.label}
                <TrendingUp className="w-4 h-4" />
              </a>
            </div>
          </AnimateIn>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20">
          {STATS.map((stat, i) => (
            <AnimateIn key={stat.label} delay={i * 80}>
              <div className="relative bg-surface-raised rounded-card-lg p-6 shadow-card border border-surface-border/40 overflow-hidden group hover:border-brand-500/40 transition-all duration-300">
                {/* Top accent line */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Inner glow on hover */}
                <div className="absolute inset-0 bg-brand-500/0 group-hover:bg-brand-500/[0.03] transition-colors duration-300" />

                <div className="relative">
                  <div className="w-10 h-10 rounded-card bg-brand-500/10 flex items-center justify-center mb-4 text-brand-500 mx-auto">
                    {stat.icon}
                  </div>
                  <div className="font-heading font-black text-display-md text-content-primary text-center mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-content-muted uppercase tracking-wide text-center">
                    {stat.label}
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