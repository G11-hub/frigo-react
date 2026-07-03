import { useState, useEffect } from 'react'
import Sparkline from './Sparkline'

function HeroDashboard() {
  const [temps, setTemps] = useState([2.8,3.0,2.9,3.1,3.0,3.2,3.1,3.4,3.2,3.5,3.3,3.6])
  const [live, setLive] = useState(3.3)

  useEffect(() => {
    const int = setInterval(() => {
      const d = (Math.random() - 0.5) * 0.2
      setLive((t) => parseFloat((t + d).toFixed(1)))
      setTemps((prev) => [...prev.slice(1), parseFloat((prev[prev.length - 1] + d).toFixed(1))])
    }, 1800)
    return () => clearInterval(int)
  }, [])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <style>{`
        @media (max-width: 1024px) {
          .hero-stats-grid { order: -1 !important; }
        }
      `}</style>
      <div className="dashboard">
        <div className="scan-effect"><div className="scan-line" /></div>
        <div className="dash-header">
          <div className="dash-title">FRIGO MONITOR</div>
          <div className="dash-status"><span className="live-dot" />&nbsp;AKTIVNO</div>
        </div>
        <div className="mini-sensors">
          {[
            { l: 'KOMORA', v: `${live.toFixed(1)}°C`, c: '#00e5ff' },
            { l: 'TUNEL',  v: '-18.2°C',              c: '#4fc3f7' },
            { l: 'VLAGA',  v: '64%',                  c: '#b39ddb' },
          ].map((s, i) => (
            <div key={i} className="mini-sensor">
              <div className="mini-sensor-val" style={{ color: s.c }}>{s.v}</div>
              <div className="mini-sensor-lbl">{s.l}</div>
            </div>
          ))}
        </div>
        <div className="chart-container">
          <Sparkline data={temps} color="#00e5ff" />
        </div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {['HACCP Evidencija', 'Push Alarmi', 'Istorija Podataka', 'PDF Izvoz'].map((t, i) => (
            <span key={i} style={{
              fontSize: '10px', padding: '4px 10px', borderRadius: 100,
              background: 'rgba(0,229,255,0.08)', border: '1px solid rgba(0,229,255,0.15)',
              color: 'var(--cyan)', fontWeight: 600, letterSpacing: '0.5px',
            }}>{t}</span>
          ))}
        </div>
      </div>
      <div className="hero-stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10 }}>
        {[
          { n: '24/7', l: 'Neprekidan monitoring', icon: '🟢', sub: 'Svaka komora, u svakom trenutku' },
          { n: 'PDF/CSV', l: 'HACCP Izvoz', icon: '📄', sub: 'Spreman za inspekciju jednim klikom' },
          { n: '< 1s', l: 'Alarm reakcija', icon: '🔔', sub: 'Obaveštenje pre nego što dođe do štete' },
          { n: 'iOS & Android', l: 'Mobilni pristup', icon: '📱', sub: 'Kontrola sa svakog uređaja' },
        ].map(({ n, l, icon, sub }) => (
          <div key={l} style={{
            background: 'linear-gradient(135deg, rgba(0,229,255,0.06), rgba(79,195,247,0.03))',
            border: '1px solid rgba(0,229,255,0.15)',
            borderRadius: 12, padding: '12px 14px',
            display: 'flex', alignItems: 'flex-start', gap: 10,
            transition: 'border-color 0.2s',
          }}>
            <span style={{
              fontSize: 20, flexShrink: 0,
              width: 36, height: 36, borderRadius: 8,
              background: 'rgba(0,229,255,0.08)',
              border: '1px solid rgba(0,229,255,0.12)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>{icon}</span>
            <div>
              <div style={{ fontSize: 15, fontWeight: 700, fontFamily: 'var(--mono)', color: 'var(--cyan)', lineHeight: 1.2, marginBottom: 2 }}>{n}</div>
              <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--text)', marginBottom: 2 }}>{l}</div>
              <div style={{ fontSize: 10, color: 'var(--muted)', lineHeight: 1.3 }}>{sub}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="hero" style={{ paddingBottom: '80px' }}>
      <div className="blob" style={{ width: 500, height: 500, background: 'rgba(0,229,255,0.06)', top: '10%', left: '-10%', animationDuration: '12s' }} />
      <div className="blob" style={{ width: 600, height: 600, background: 'rgba(179,157,219,0.06)', top: '20%', right: '-15%', animationDuration: '15s', animationDelay: '4s' }} />
      <div className="hero-grid">
        <div>
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            HACCP Monitoring · Alarmi · Istorija Temperature
          </div>
          <h1 className="hero-title">
            <span className="gradient">Potpuna kontrola</span>
            <br />temperature i vlažnosti
            <br />u realnom vremenu
          </h1>
          <p className="hero-sub">
            Praćenje temperature i vlage, automatski alarmi i
            digitalna HACCP evidencija za hladnjače,
            restorane i prehrambenu industriju.
          </p>
        <button className="btn-primary" onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}>
  Zatraži Demo →
</button>
<button className="btn-secondary" onClick={() => document.getElementById('funkcije')?.scrollIntoView({ behavior: 'smooth' })}>
  Istraži Funkcije
</button>
        </div>
       <div style={{ animation: 'slide-in-right 0.8s ease-out forwards', paddingBottom: '60px' }}>
  <HeroDashboard />
</div>
      </div>
    </section>
  )
}