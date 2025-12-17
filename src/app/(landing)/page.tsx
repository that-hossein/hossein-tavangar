import { AboutMe } from './components/about-me'
import HeroSection from './components/hero-section'
import { Experience } from './components/experience'
import { Contact } from './components/contact'

export default function Home() {
  return (
    <>
      <HeroSection />

      <AboutMe />

      <Experience />

      <Contact />
    </>
  )
}
