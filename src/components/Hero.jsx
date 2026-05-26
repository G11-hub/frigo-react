import { useState, useEffect } from 'react'
import Sparkline from './Sparkline'

function HeroDashboard() {
  const [temps, setTemps] = useState([2.8, 3.0, 2.9, 3.1, 3.0, 3.2, 3.1, 3.4, 3.2, 3.5, 3.3, 3.6])
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
    <div className="dashboard">
      <div className="scan-effect"><div className="scan-line" /></div>

      <div className="dash-header">
        <div className="dash-title">FRIGO MONITOR — UŽIVO</div>
        <div className="dash-status">
          <span className="live-dot" />&nbsp;POVEZANO
        </div>
      </div>

      <div className="mini-sensors">
        {[
          { l: 'ZONA A', v: `${live.toFixed(1)}°C`, c: '#00e5ff' },
          { l: 'ZONA B', v: '-18.2°C',              c: '#4fc3f7' },
          { l: 'VLAGA',  v: '64%',                  c: '#b39ddb' },
        ].map((s, i) => (
          <div key={i} className="mini-sensor">
            <div className="mini-sensor-val" style={{ color: s.c }}>{s.v}</div>
            <div className="mini-sensor-lbl">{s.l}</div>
          </div>
        ))}
      </div>

      {/* chart-container visina je 100px definisana u CSS-u */}
      <div className="chart-container">
        <Sparkline data={temps} color="#00e5ff" />
      </div>

      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {['HACCP ✓', 'SMS Aktivan', 'Cloud Sync', 'AI Monitor'].map((t, i) => (
          <span
            key={i}
            style={{
              fontSize: '10px',
              padding: '4px 10px',
              borderRadius: 100,
              background: 'rgba(0,229,255,0.08)',
              border: '1px solid rgba(0,229,255,0.15)',
              color: 'var(--cyan)',
              fontWeight: 600,
              letterSpacing: '0.5px',
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    /* Nema animated-grid — tačno kao original */
    <section id="hero">
      <div
        className="blob"
        style={{ width: 500, height: 500, background: 'rgba(0,229,255,0.06)', top: '10%', left: '-10%', animationDuration: '12s' }}
      />
      <div
        className="blob"
        style={{ width: 600, height: 600, background: 'rgba(179,157,219,0.06)', top: '20%', right: '-15%', animationDuration: '15s', animationDelay: '4s' }}
      />

      <div className="hero-grid">
        {/* Leva kolona — bez animacije, tačno kao original */}
        <div>
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Monitoring · Realtime · HACCP Sertifikovano
          </div>

          <h1 className="hero-title">
            <span className="gradient">24/7 Pametni</span>
            <br />Monitoring
            <br />Rashladnih Sistema
          </h1>

          <p className="hero-sub">
            Sprečite kvar robe uz praćenje temperature u realnom vremenu, pametne senzore i
            automatske alarme — poverenje 500+ kompanija širom Evrope.
          </p>

          <div className="hero-btns">
            <button
              className="btn-primary"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Zakaži Demo →
            </button>
            <button
              className="btn-secondary"
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Istraži Funkcije
            </button>
          </div>

          <div style={{ marginTop: 40, display: 'flex', gap: 32, flexWrap: 'wrap' }}>
            {[['14k+', 'Senzora'], ['99.9%', 'Dostupnost'], ['0.1°C', 'Preciznost']].map(([n, l]) => (
              <div key={l}>
                <div style={{ fontSize: 24, fontWeight: 700, fontFamily: 'var(--mono)', color: 'var(--cyan)' }}>{n}</div>
                <div style={{ fontSize: 12, color: 'var(--muted)', letterSpacing: '0.5px' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Desna kolona — dashboard sa slide-in-right animacijom */}
        <div style={{ animation: 'slide-in-right 0.8s ease-out forwards' }}>
          <HeroDashboard />
        </div>
      </div>
    </section>
  )
}
