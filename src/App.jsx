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
const PARTICLES = Array.from({ length: 20 }, (_, i) => ({
  left:     `${(i * 17 + 7) % 100}%`,
  duration: `${8 + (i * 1.3) % 12}s`,
  delay:    `${(i * 0.7) % 10}s`,
  size:     i % 3 === 0 ? 6 : 3,
  color:    i % 3 === 0 ? 'var(--cyan)' : i % 3 === 1 ? 'var(--blue)' : 'var(--purple)',
}))

export default function App() {
  useScrollReveal()

  return (
    <>
      {/* Background particles */}
      <div className="particles">
        {PARTICLES.map((p, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left:            p.left,
              animationDuration: p.duration,
              animationDelay:  p.delay,
              width:           p.size,
              height:          p.size,
              background:      p.color,
              opacity:         0.6,
            }}
          />
        ))}
      </div>

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
