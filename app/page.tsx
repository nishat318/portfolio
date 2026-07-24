import { Header, Footer } from '@/components/site-chrome'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Portfolio } from '@/components/portfolio'
import { Contact } from '@/components/contact'

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
