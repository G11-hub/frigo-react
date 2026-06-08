import { useState, useEffect } from 'react'
import Sparkline from './Sparkline'

const SENSORS = [
  {
    name: 'Komora za Zrenje',
    location: 'ZONA A · Proizvodnja',
    temp: 3.3,
    humidity: 64,
    status: 'NORMAL',
    tempData: [3.1,3.0,3.2,3.3,3.1,3.3,3.2,3.4,3.3]
  },

  {
    name: 'Komora Proizvoda',
    location: 'ZONA B · Magacin',
    temp: -18.3,
    humidity: 78,
    status: 'WARNING',
    tempData: [-18.1,-18.2,-17.9,-18.4,-18.5,-18.0,-18.3,-18.6,-18.3]
  },

  {
    name: 'Farmaceutska Zona',
    location: 'ZONA C · Medicinski Blok',
    temp: 6.9,
    humidity: 55,
    status: 'ALERT',
    tempData: [4.2,4.8,5.1,5.5,5.9,6.2,6.4,6.7,6.9]
  },

  {
    name: 'Tunel Zamrzivača',
    location: 'ZONA D · Hladni Lanac',
    temp: -21.1,
    humidity: 82,
    status: 'NORMAL',
    tempData: [-21.3,-21.2,-21.0,-21.1,-21.4,-21.2,-21.0,-21.1,-21.1]
  },
]

function SensorCard({ name, location, temp, humidity, status, tempData }) {
  const [liveTemp, setLiveTemp] = useState(temp)
  const [liveHum, setLiveHum]   = useState(humidity)
  const [data, setData]         = useState(tempData)

  useEffect(() => {
    const int = setInterval(() => {
      const delta = (Math.random() - 0.5) * 0.3
      setLiveTemp((t) => parseFloat((t + delta).toFixed(1)))
      setLiveHum((h) => Math.max(30, Math.min(95, parseFloat((h + (Math.random() - 0.5)).toFixed(0)))))
      setData((d) => [...d.slice(1), parseFloat((d[d.length - 1] + delta).toFixed(1))])
    }, 2000)
    return () => clearInterval(int)
  }, [])

  const color    = status === 'NORMAL' ? '#4ade80' : status === 'WARNING' ? '#fbbf24' : '#ef4444'
  const piClass  = status === 'NORMAL' ? 'pi-normal' : status === 'WARNING' ? 'pi-warning' : 'pi-alert'
  const cardClass = `sensor-card ${status === 'WARNING' ? 'warning' : status === 'ALERT' ? 'alert' : ''}`
  const label    = status === 'NORMAL' ? 'U granicama' : status === 'WARNING' ? 'Blizu granice' : 'Granica prekoračena'

  const statusLabel = status === 'NORMAL' ? 'NORMALNO' : status === 'WARNING' ? 'UPOZORENJE' : 'ALARM'
  const statusClass = status === 'NORMAL' ? 'status-normal' : status === 'WARNING' ? 'status-warning' : 'status-alert'

  return (
    <div className={cardClass}>
      <div className="scan-effect"><div className="scan-line" /></div>
      <div className="sensor-top">
        <div>
          <div className="sensor-name">{name}</div>
          <div className="sensor-loc">{location}</div>
        </div>
        <span className={`status-badge ${statusClass}`}>{statusLabel}</span>
      </div>

      <div className="sensor-vals">
        <div className="sensor-val-group">
          <div>
            <span className="sensor-val-num" style={{ color }}>{liveTemp.toFixed(1)}</span>
            <span className="sensor-val-unit">°C</span>
          </div>
          <div className="sensor-val-lbl">TEMPERATURA</div>
        </div>
        <div className="sensor-val-group">
          <div>
            <span className="sensor-val-num" style={{ color: '#4fc3f7' }}>{liveHum}</span>
            <span className="sensor-val-unit">%</span>
          </div>
          <div className="sensor-val-lbl">VLAGA</div>
        </div>
      </div>

      <div className="pulse-wrap">
        <span className={`pulse-indicator ${piClass}`} />
        <span style={{ fontSize: '11px', color, fontFamily: 'var(--mono)', fontWeight: 500 }}>{label}</span>
      </div>

      <div className="mini-chart-wrap">
        <Sparkline data={data} color={color} height={48} animated={false} />
      </div>
    </div>
  )
}

export default function Dashboard() {
  return (
    <section id="monitoring" className="py-section">
      <div className="blob" style={{ width: 400, height: 400, background: 'rgba(79,195,247,0.04)', top: '50%', right: '-10%', animationDuration: '10s' }} />
      <div className="section-inner">
        <div className="reveal">
          <div className="section-tag">Live Dashboard</div>
          <h2 className="section-title">Praćenje Senzora u Realnom Vremenu</h2>
          <p className="section-sub">Svaki senzor se ažurira uživo. Temperatura, vlaga, status — sve na jednom mestu.</p>
        </div>
        <div className="sensors-grid">
          {SENSORS.map((s, i) => (
            <div key={i} className="reveal" style={{ animationDelay: `${i * 100}ms` }}>
              <SensorCard {...s} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
