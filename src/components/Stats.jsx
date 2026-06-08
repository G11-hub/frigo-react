import { useRef } from 'react'

function StatCard({ num, label, delay }) {
  return (
    <div
      className="stat-card reveal"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="stat-num">
        {num}
      </div>

      <div className="stat-label">
        {label}
      </div>
    </div>
  )
}

export default function Stats() {
  const ref = useRef()

const stats = [
  {
    num: '24/7',
    label: 'Monitoring',
  },

  {
    num: 'PDF',
    label: 'HACCP Izveštaji',
  },

  {
    num: 'Mobile',
    label: 'iOS & Android',
  },

  {
    num: 'Push',
    label: 'Alarmi',
  },
]

  return (
    <section
      className="py-section"
      style={{
        background:
          'radial-gradient(ellipse at 50% 50%, rgba(0,229,255,0.04) 0%, transparent 70%)',
      }}
    >
      <div className="section-inner">
        <div className="reveal text-center">
          <div className="section-tag">
            Zašto FRIGO
          </div>

          <h2 className="section-title">
            Monitoring za HACCP Sisteme
          </h2>

          <p
            className="section-sub"
            style={{ margin: '0 auto 56px' }}
          >
            Platforma za praćenje temperature,
            alarme i digitalnu HACCP evidenciju.
          </p>
        </div>

        <div
          className="stats-grid"
          ref={ref}
        >
          {stats.map((s, i) => (
            <StatCard
              key={i}
              num={s.num}
              label={s.label}
              delay={i * 100}
            />
          ))}
        </div>
      </div>
    </section>
  )
}