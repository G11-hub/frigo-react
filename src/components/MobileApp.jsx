import { useState, useEffect } from 'react'
import Sparkline from './Sparkline'

function PhoneApp() {
  const [showNotif, setShowNotif] = useState(false)
  const [temp, setTemp] = useState(3.4)
  const [data, setData] = useState([3.1, 3.2, 3.3, 3.0, 3.2, 3.4, 3.3, 3.5, 3.4])

  useEffect(() => {
    const notifInt = setInterval(() => setShowNotif((v) => !v), 5000)
    const dataInt  = setInterval(() => {
      const d = (Math.random() - 0.5) * 0.2
      setTemp((t) => parseFloat((t + d).toFixed(1)))
      setData((prev) => [...prev.slice(1), parseFloat((prev[prev.length - 1] + d).toFixed(1))])
    }, 2500)
    return () => { clearInterval(notifInt); clearInterval(dataInt) }
  }, [])

  return (
    <div className="phone-mockup">
      <div className="phone-notch"><div className="phone-notch-dot" /></div>
      <div className="phone-screen">
        {showNotif && (
          <div className="notification-popup">
            <span style={{ fontSize: 18, marginRight: 8 }}>🔔</span>
            <div>
              <div className="notif-title">Alarm Temperature</div>
              <div className="notif-body">Zamrzivač 2 — Apoteka Centar: 7.8°C prekoračena granica</div>
            </div>
          </div>
        )}
        <div className="phone-app">
          <div className="phone-header">FRIGO Uživo</div>

          <div className="phone-metric">
            <div className="phone-metric-top">
              <span className="phone-metric-title">RASHLADNA KOMORA A</span>
              <span style={{ fontSize: '10px', color: '#4ade80', fontWeight: 600 }}>● NORMALNO</span>
            </div>
            <div className="phone-metric-val" style={{ color: '#00e5ff' }}>{temp.toFixed(1)}°C</div>
            <div style={{ height: 40, marginTop: 8 }}>
              <Sparkline data={data} color="#00e5ff" height={40} animated={false} />
            </div>
          </div>

          <div className="phone-metric">
            <div className="phone-metric-top">
              <span className="phone-metric-title">ZAMRZIVAČ B</span>
              <span style={{ fontSize: '10px', color: '#fbbf24', fontWeight: 600 }}>⚠ UPOZORENJE</span>
            </div>
            <div className="phone-metric-val" style={{ color: '#fbbf24' }}>-18.3°C</div>
            <div style={{ height: 40, marginTop: 8 }}>
              <Sparkline data={[-18.1,-18.2,-18.0,-18.4,-18.5,-18.3,-18.6,-18.2,-18.3]} color="#fbbf24" height={40} animated={false} />
            </div>
          </div>

          <div className="phone-metric">
            <div className="phone-metric-top">
              <span className="phone-metric-title">PROSEČNA VLAGA</span>
              <span style={{ fontSize: '10px', color: '#4fc3f7', fontWeight: 600 }}>64%</span>
            </div>
            <div style={{ height: 40, marginTop: 8 }}>
              <Sparkline data={[62,63,65,64,63,65,64,66,64]} color="#4fc3f7" height={40} animated={false} />
            </div>
          </div>

          <div style={{ background: 'rgba(74,222,128,0.08)', border: '1px solid rgba(74,222,128,0.15)', borderRadius: 10, padding: '10px 12px', marginBottom: 10 }}>
            <div style={{ fontSize: 10, color: '#4ade80', fontWeight: 600, marginBottom: 4 }}>IZVEŠTAJ POSLEDNJIH 24H</div>
            <div style={{ fontSize: 12, color: 'var(--muted)' }}>Sve zone u skladu sa propisima — HACCP OK</div>
          </div>
        </div>
      </div>
    </div>
  )
}

const APP_FEATURES = [
  { icon: '📊', t: 'Live grafikoni senzora',   d: 'Sparkline grafikoni za svaku zonu u realnom vremenu' },
  { icon: '🔔', t: 'Push obaveštenja',         d: 'Instant alarmi za prekoračenja temperature' },
  { icon: '📋', t: 'Istorija monitoringa',     d: 'Kompletan revizijski trag po zoni' },
  { icon: '👥', t: 'Timska saradnja',          d: 'Dodeli alarm određenom članu tima' },
]

export default function MobileApp() {
  return (
    <section className="py-section">
      <div className="section-inner">
        <div className="app-section-grid">
          {/* Text */}
          <div className="reveal">
            <div className="section-tag">Mobilna Aplikacija</div>
            <h2 className="section-title">Vaš Rashladni Sistem u Džepu</h2>
            <p style={{ color: 'var(--muted)', fontSize: 16, lineHeight: 1.7, marginBottom: 32 }}>
              Pratite svaki senzor, primajte instant push obaveštenja i generišite izveštaje
              usklađenosti — direktno sa vašeg telefona. Dostupno za iOS i Android.
            </p>
            <div className="app-features-list">
              {APP_FEATURES.map((f, i) => (
                <div key={i} className="reveal" style={{ display: 'flex', gap: 16, alignItems: 'flex-start', animationDelay: `${i * 100}ms` }}>
                  <span style={{ fontSize: 22, flexShrink: 0 }}>{f.icon}</span>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 15 }}>{f.t}</div>
                    <div style={{ fontSize: 13, color: 'var(--muted)' }}>{f.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Phone */}
          <div className="reveal" style={{ display: 'flex', justifyContent: 'center' }}>
            <PhoneApp />
          </div>
        </div>
      </div>
    </section>
  )
}
