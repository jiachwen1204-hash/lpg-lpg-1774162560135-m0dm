import Link from 'next/link'
import { Mail, MapPin, Sparkles } from 'lucide-react'

const BRAND = {
  name:        'AI Digitalize',
  tagline:     'Transform Your Business with Intelligent AI Solutions',
  description: 'We are an all-in-one AI technology company that builds intelligent tools designed to simplify work, automate processes, and accelerate digital transformation.',
  email:       'jiachwen99@gmail.com',
  address:     '31&33, Jalan 5/154d, Taman Desa Cheras, 56000, Cheras W.P. Kuala Lumpur',
}

const links = [
  { label: 'Services', href: '#services' },
  { label: 'About',    href: '#about'    },
  { label: 'Contact',  href: '#contact'  },
]

const legal = [
  { label: 'Privacy Policy',   href: '/privacy' },
  { label: 'Terms of Service', href: '/terms'   },
]

const social = [
  { label: 'LinkedIn', href: '#' },
  { label: 'Twitter',  href: '#' },
  { label: 'GitHub',  href: '#' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#0a0a10] relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-500/8 blur-[180px] pointer-events-none" />
      
      {/* Top gradient divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        {/* Main footer content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand column */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <Link href="/" className="group inline-flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center shadow-glow-sm group-hover:shadow-glow transition-shadow">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="font-heading font-bold text-2xl bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                {BRAND.name}
              </span>
            </Link>
            
            <p className="mt-6 text-base text-content-secondary leading-relaxed max-w-md">
              {BRAND.description}
            </p>
            
            {/* CTA Button */}
            <div className="mt-8 relative inline-block">
              <div className="absolute inset-0 bg-brand-500/30 blur-xl rounded-pill scale-110 opacity-60" />
              <Link 
                href="#contact"
                className="relative inline-flex items-center gap-2 px-6 py-3 rounded-pill bg-brand-500 text-white font-medium text-sm hover:bg-brand-600 transition-all hover:scale-105"
              >
                Get Started
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Navigation column */}
          <div>
            <h3 className="font-heading font-semibold text-content-primary mb-5 text-sm uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-3">
              {links.map(l => (
                <li key={l.href}>
                  <a 
                    href={l.href} 
                    className="text-sm text-content-muted hover:text-brand-400 transition-colors duration-200 inline-flex items-center gap-1.5 group"
                  >
                    <span className="w-0 h-px bg-brand-500 group-hover:w-3 transition-all duration-200" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="font-heading font-semibold text-content-primary mb-5 text-sm uppercase tracking-wider">
              Contact
            </h3>
            <div className="space-y-3">
              <a
                href={`mailto:${BRAND.email}`}
                className="flex items-start gap-3 text-sm text-content-muted hover:text-brand-400 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-surface-raised flex items-center justify-center shrink-0 group-hover:bg-brand-500/10 transition-colors">
                  <Mail className="w-4 h-4 text-brand-500" />
                </div>
                <span className="pt-1.5">{BRAND.email}</span>
              </a>
              <div className="flex items-start gap-3 text-sm text-content-muted">
                <div className="w-8 h-8 rounded-lg bg-surface-raised flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-brand-500" />
                </div>
                <span className="pt-1.5 leading-relaxed">{BRAND.address}</span>
              </div>
            </div>

            {/* Social links */}
            <div className="mt-6 flex items-center gap-3">
              {social.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  className="w-9 h-9 rounded-lg bg-surface-raised border border-surface-border/50 flex items-center justify-center text-content-muted hover:text-brand-400 hover:border-brand-500/40 transition-all duration-200"
                  aria-label={s.label}
                >
                  {s.label === 'LinkedIn' && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  )}
                  {s.label === 'Twitter' && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  )}
                  {s.label === 'GitHub' && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-surface-border to-transparent mb-8" />
        
        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-2">
          <div className="text-sm text-content-muted">
            © {year} {BRAND.name}. All rights reserved.
          </div>
          
          {/* Legal links */}
          <div className="flex items-center gap-6">
            {legal.map((l, i) => (
              <Link 
                key={l.href} 
                href={l.href} 
                className="text-sm text-content-muted hover:text-brand-400 transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}