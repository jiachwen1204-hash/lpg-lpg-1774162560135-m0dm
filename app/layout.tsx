import type { Metadata } from 'next'
import { Sora, Outfit } from 'next/font/google'
import './globals.css'

const headingFont = Sora({
  subsets: ['latin'],
  weight: ["600","700"],
  variable: '--font-heading',
  display: 'swap',
})

const bodyFont = Outfit({
  subsets: ['latin'],
  weight: ["300","400","500"],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  title: "AI Digitalize",
  description: "We are an all-in-one AI technology company that builds intelligent tools designed to simplify work, automate processes, and accelerate digital transformati",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable} scroll-smooth`}>
      <body>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"Organization","name":"AI Digitalize","description":"We are an all-in-one AI technology company that builds intelligent tools designed to simplify work, automate processes, and accelerate digital transformation. Our platform integrates multiple AI capabilities — including content generation, data analysis, workflow automation, customer engagement, and decision support — into a single seamless ecosystem.\n\nBy combining powerful machine learning models with user-friendly software, we help businesses reduce operational costs, improve productivity, and unlock new growth opportunities. Our solutions are designed for scalability, security, and real-world usability, making advanced AI accessible to organizations of all sizes.","email":"jiachwen99@gmail.com","address":"31&33 , Jalan 5/154d, Taman Desa Cheras, 56000, Cheras W.P. Kuala Lumpur\nZhen fatt sdh bhd"}` }} />
      {children}</body>
    </html>
  )
}
