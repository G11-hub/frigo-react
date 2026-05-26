import { useState, useEffect, useRef } from 'react'
import { useCounter } from '../hooks/useCounter'

function StatCard({ num, label, delay }) {
  return (
    <div className="stat-card reveal" style={{ animationDelay: `${delay}ms` }}>
      <div className="stat-num">{num}</div>
      <div className="stat-label">{label}</div>
    </div>
  )
}

export default function Stats() {
  const [started, setStarted] = useState(false)
  const ref = useRef()

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setStarted(true) },
      { threshold: 0.3 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const c1 = useCounter('14000', 2000, started)
  const c2 = useCounter('500',   1800, started)
  const c3 = useCounter('999',   2200, started)
  const c4 = useCounter('1',     1500, started)

  const stats = [
    { num: `${c1.toLocaleString()}+`,           label: 'Senzora u Upotrebi' },
    { num: `${c2}+`,                            label: 'Kompanija' },
    { num: `${(c3 / 10).toFixed(1)}%`,          label: 'Dostupnost Sistema' },
    { num: `0.${c4 === 0 ? '0' : c4}°C`,       label: 'Preciznost Merenja' },
  ]

  return (
    <section
      className="py-section"
      style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(0,229,255,0.04) 0%, transparent 70%)' }}
    >
      <div className="section-inner">
        <div className="reveal text-center">
          <div className="section-tag">Zašto FRIGO</div>
          <h2 className="section-title">Brojevi Koji Govore</h2>
          <p className="section-sub" style={{ margin: '0 auto 56px' }}>
            Dokazano na terenu. Poverenje inspekcija bezbednosti hrane u 12 zemalja.
          </p>
        </div>
        <div className="stats-grid" ref={ref}>
          {stats.map((s, i) => (
            <StatCard key={i} num={s.num} label={s.label} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  )
}
