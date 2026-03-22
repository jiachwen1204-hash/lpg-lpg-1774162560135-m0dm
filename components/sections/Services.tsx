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
    <section id="services" className="py-section bg-[#0f0f13]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <AnimateIn>
            <span className="inline-block bg-brand-500/10 text-brand-500 rounded-pill px-4 py-1.5 text-xs font-medium uppercase tracking-widest mb-4">
              Services
            </span>
          </AnimateIn>
          <AnimateIn delay={80}>
            <h2 className="font-heading font-black text-display-lg text-content-primary mb-4">
              {HEADING}
            </h2>
          </AnimateIn>
          <AnimateIn delay={160}>
            <p className="max-w-2xl mx-auto text-content-secondary text-lg">
              {SUBTEXT}
            </p>
          </AnimateIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <AnimateIn key={svc.title} delay={i * 100}>
              <div className="group relative h-full p-8 rounded-card-lg bg-surface-raised border border-surface-border/40 hover:border-brand-500/50 transition-all duration-300 ease-expo-out overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent" />
                <div className="absolute inset-0 bg-brand-500/0 group-hover:bg-brand-500/[0.03] transition-colors duration-300" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-card bg-brand-500/10 flex items-center justify-center mb-6 group-hover:bg-brand-500/20 transition-colors">
                    <svc.icon className="w-6 h-6 text-brand-500" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-content-primary mb-3">
                    {svc.title}
                  </h3>
                  <p className="text-content-secondary leading-relaxed">{svc.description}</p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}