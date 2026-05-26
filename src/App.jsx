import { useScrollReveal } from './hooks/useScrollReveal'
import Navbar      from './components/Navbar'
import Hero        from './components/Hero'
import Dashboard   from './components/Dashboard'
import HowItWorks  from './components/HowItWorks'
import Features    from './components/Features'
import Industries  from './components/Industries'
import MobileApp   from './components/MobileApp'
import Stats       from './components/Stats'
import Testimonial from './components/Testimonial'
import Contact     from './components/Contact'
import Footer      from './components/Footer'

// Static particles rendered once


export default function App() {
  useScrollReveal()

  return (
    <>
      {/* Background particles */}
  

      <Navbar />
      <Hero />
      <Dashboard />
      <HowItWorks />
      <Features />
      <Industries />
      <MobileApp />
      <Stats />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  )
}
