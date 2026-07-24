import { Header, Footer } from '@/components/site-chrome'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Portfolio } from '@/components/portfolio'
import { Contact } from '@/components/contact'
import { AnimatedBackground } from '@/components/animated-background'
import { FloralParticles } from '@/components/floral-particles'

export default function Page() {
  return (
    <>
      <AnimatedBackground />
      <FloralParticles />
      <Header />
      <main className="relative z-10">
        <Hero />
        <About />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
