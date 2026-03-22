'use client'
import { useState } from 'react'
import AnimateIn from '@/components/ui/AnimateIn'
import { cn } from '@/lib/utils'

const CONTENT = {
  badge:     'Powering the Future of Work',
  headline:  'Transform Your Business with',
  highlight: 'Intelligent AI Solutions',
  subline:   'We build intelligent tools designed to simplify work, automate processes, and accelerate digital transformation. Our platform integrates content generation, data analysis, workflow automation, and decision support into a single seamless ecosystem.',
  cta:       { label: 'Get Started',        href: '#contact' },
  secondary: { label: 'Explore Solutions',   href: '#services' },
  features:  ['Content Generation', 'Workflow Automation', 'Data Analysis', 'Decision Support'],
  stats: [
    { value: '10+',    label: 'AI Models' },
    { value: '500+',   label: 'Businesses' },
    { value: '24/7',   label: 'Automation' },
  ],
  mockupLines: [
    { type: 'comment', text: '// AI Digitalize pipeline initialized' },
    { type: 'code',    text: 'const workflow = await ai.create({' },
    { type: 'code',    text: '  task: "content_generation",' },
    { type: 'code',    text: '  automate: true,' },
    { type: 'code',    text: '  analyze: "real_time"' },
    { type: 'code',    text: '})' },
    { type: 'success', text: '✓ Workflow deployed in 0.8s' },
  ],
}

export default function Hero() {
  const [copied, setCopied] = useState(false)

  function handleCopy() {
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0f0f13] pt-nav"
    >
      {/* Ambient glow system */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-brand-500/10 blur-[180px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/8 blur-[140px]" />
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)',
          }}
        />
        {/* Noise texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '256px 256px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-section w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — copy */}
          <div>
            <AnimateIn delay={0}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-pill bg-brand-500/10 text-xs font-body text-brand-500 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
                {CONTENT.badge}
              </div>
            </AnimateIn>

            <AnimateIn delay={80}>
              <h1 className="font-heading font-black text-display-xl md:text-display-2xl text-content-primary leading-[0.95] tracking-[-0.03em] mb-6">
                {CONTENT.headline}{' '}
                <span className="bg-gradient-to-r from-brand-400 via-accent to-brand-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-shimmer">
                  {CONTENT.highlight}
                </span>
              </h1>
            </AnimateIn>

            <AnimateIn delay={160}>
              <p className="text-lg text-content-secondary mb-8 leading-relaxed max-w-lg font-body">
                {CONTENT.subline}
              </p>
            </AnimateIn>

            <AnimateIn delay={240}>
              <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
                <div className="relative">
                  <div className="absolute inset-0 bg-brand-500/40 blur-xl rounded-pill scale-110" />
                  <a
                    href={CONTENT.cta.href}
                    className="relative z-10 inline-flex items-center gap-2 px-8 py-4 font-body font-semibold bg-brand-500 text-white rounded-pill hover:bg-brand-700 transition-all ease-expo-out active:scale-[0.97]"
                  >
                    {CONTENT.cta.label}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
                <a
                  href={CONTENT.secondary.href}
                  className="px-8 py-4 font-body font-medium border border-white/15 text-content-secondary rounded-pill hover:border-white/30 hover:text-content-primary transition-all ease-expo-out"
                >
                  {CONTENT.secondary.label}
                </a>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                {CONTENT.features.map(f => (
                  <span key={f} className="flex items-center gap-1.5 text-sm text-content-muted font-body">
                    <span className="text-brand-500">✓</span> {f}
                  </span>
                ))}
              </div>
            </AnimateIn>

            {/* Stats row */}
            <AnimateIn delay={320}>
              <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-white/8">
                {CONTENT.stats.map(s => (
                  <div key={s.label}>
                    <div className="font-heading font-black text-display-sm text-brand-500">{s.value}</div>
                    <div className="text-xs text-content-muted uppercase tracking-widest mt-1 font-body">{s.label}</div>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>

          {/* Right — code/dashboard mockup */}
          <AnimateIn delay={120} className="hidden lg:block">
            <div className="relative">
              {/* Glow behind card */}
              <div className="absolute -inset-4 bg-brand-500/10 blur-[60px] rounded-card-lg" />
              <div className="relative rounded-card-lg border border-white/8 bg-[#17171f]/90 backdrop-blur-sm shadow-card-xl overflow-hidden">
                {/* Window chrome */}
                <div className="flex items-center gap-2 px-5 py-4 border-b border-white/8 bg-[#0f0f13]/80">
                  <span className="w-3 h-3 rounded-full bg-red-500/60" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <span className="w-3 h-3 rounded-full bg-green-500/60" />
                  <span className="ml-4 text-xs font-mono text-content-muted">ai-digitalize</span>
                  <button
                    onClick={handleCopy}
                    className="ml-auto text-xs font-mono text-content-muted hover:text-brand-500 transition-colors"
                  >
                    {copied ? 'copied!' : 'copy'}
                  </button>
                </div>
                {/* Code lines */}
                <div className="p-6 font-mono text-sm space-y-2">
                  {CONTENT.mockupLines.map((line, i) => (
                    <div
                      key={i}
                      className={
                        line.type === 'comment' ? 'text-content-muted' :
                        line.type === 'success'  ? 'text-green-400 font-medium mt-4' :
                        'text-content-primary'
                      }
                    >
                      {line.text}
                    </div>
                  ))}
                  {/* Blinking cursor */}
                  <div className="flex items-center gap-0 text-brand-500">
                    <span>$</span>
                    <span className="ml-2 w-2 h-4 bg-brand-500 animate-pulse" />
                  </div>
                </div>
                {/* AI capability badges */}
                <div className="px-6 pb-6">
                  <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/8">
                    <span className="px-3 py-1 text-xs font-mono bg-brand-500/10 text-brand-400 rounded-full">GPT-4</span>
                    <span className="px-3 py-1 text-xs font-mono bg-accent/10 text-accent rounded-full">Claude</span>
                    <span className="px-3 py-1 text-xs font-mono bg-green-500/10 text-green-400 rounded-full">Llama</span>
                    <span className="px-3 py-1 text-xs font-mono bg-cyan-500/10 text-cyan-400 rounded-full">Gemini</span>
                  </div>
                </div>
              </div>
              {/* Floating status badge */}
              <div className="absolute -bottom-4 -right-4 flex items-center gap-2 px-4 py-2 rounded-pill border border-white/8 bg-[#17171f]/90 backdrop-blur-sm shadow-card-lg animate-float">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-body text-content-primary font-medium">All systems operational</span>
              </div>
              {/* Floating metric card */}
              <div className="absolute -top-4 -left-6 flex items-center gap-3 px-4 py-3 rounded-card border border-white/8 bg-[#17171f]/90 backdrop-blur-sm shadow-card-lg animate-float" style={{ animationDelay: '1.5s' }}>
                <div className="w-8 h-8 rounded-full bg-brand-500/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-content-muted">Processing</div>
                  <div className="font-heading font-bold text-content-primary text-sm">2.4M tokens</div>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}