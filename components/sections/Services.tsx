import AnimateIn from '@/components/ui/AnimateIn'
import { Wand2, BarChart3, Workflow, MessageSquare, Brain, Puzzle } from 'lucide-react'

interface ServiceItem {
  icon: React.ElementType
  title: string
  description: string
}

const services: ServiceItem[] = [
  {
    icon: Wand2,
    title: 'Content Generation',
    description: 'Create marketing copy, articles, and creative content in seconds with our advanced language models.',
  },
  {
    icon: BarChart3,
    title: 'Data Analysis',
    description: 'Transform raw data into actionable insights with machine learning-powered analytics and visualization.',
  },
  {
    icon: Workflow,
    title: 'Workflow Automation',
    description: 'Automate repetitive tasks and streamline business processes to boost productivity and reduce costs.',
  },
  {
    icon: MessageSquare,
    title: 'Customer Engagement',
    description: 'Deploy intelligent chatbots and support automation to enhance customer experience around the clock.',
  },
  {
    icon: Brain,
    title: 'Decision Support',
    description: 'Get AI-powered recommendations and insights to make smarter business decisions faster.',
  },
  {
    icon: Puzzle,
    title: 'Integration Platform',
    description: 'Connect all your AI tools and data sources into a unified ecosystem for seamless operations.',
  },
]

const HEADING  = 'Intelligent AI Solutions'
const SUBTEXT  = 'Powerful machine learning models integrated with user-friendly software — built for scalability, security, and real-world usability.'

export default function Services() {
  return (
    <section id="services" className="py-section bg-surface-raised border-y border-surface-border">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '256px 256px',
        }}
      />
      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <AnimateIn>
            <span className="inline-flex items-center gap-2 text-accent-500 text-xs font-medium uppercase tracking-[0.15em] mb-6">
              <span className="w-8 h-px bg-accent-500" />
              Services
              <span className="w-8 h-px bg-accent-500" />
            </span>
          </AnimateIn>
          <AnimateIn delay={80}>
            <h2 className="font-heading font-bold text-display-md text-content-primary tracking-tight mb-6">
              {HEADING}
            </h2>
          </AnimateIn>
          <AnimateIn delay={160}>
            <p className="font-body text-lg text-content-secondary leading-relaxed">
              {SUBTEXT}
            </p>
          </AnimateIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-surface-border">
          {services.map((svc, i) => (
            <AnimateIn key={svc.title} delay={i * 100} animation="fade-up">
              <div className="group relative h-full p-8 bg-surface hover:bg-surface-raised transition-colors duration-300">
                <div className="w-10 h-10 rounded-sm bg-brand-500/8 flex items-center justify-center mb-6 group-hover:bg-brand-500/12 transition-colors">
                  <svc.icon className="w-5 h-5 text-brand-500" />
                </div>
                <h3 className="font-heading font-bold text-xl text-content-primary mb-3">
                  {svc.title}
                </h3>
                <p className="font-body text-base text-content-secondary leading-relaxed">{svc.description}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}