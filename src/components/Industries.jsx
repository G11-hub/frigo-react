const INDUSTRIES = [
  { icon: '🍽️', name: 'Restorani',          desc: 'Monitoring kuhinja i rashladnih komora', color: '#00e5ff' },
  { icon: '🛒', name: 'Supermarketi',        desc: 'Usklađenost rashladnih zona sa propisima', color: '#4fc3f7' },
  { icon: '🏭', name: 'Hladnjače',           desc: 'Industrijski cold chain menadžment', color: '#b39ddb' },
  { icon: '💊', name: 'Apoteke',             desc: 'Čuvanje lekova na 2–8°C po regulativi', color: '#4ade80' },
  { icon: '📦', name: 'Magacini Hrane',      desc: 'Praćenje distribucije u velikom obimu', color: '#fbbf24' },
  { icon: '🚛', name: 'Rashladni Transport', desc: 'GPS + temperatura u tranzitu', color: '#f472b6' },
]

export default function Industries() {
  return (
    <section
      id="industrije"
      className="py-section"
      style={{ background: 'radial-gradient(ellipse at 80% 50%, rgba(79,195,247,0.04) 0%, transparent 60%)' }}
    >
      <div className="section-inner">
        <div className="reveal text-center">
          <div className="section-tag">Industrije</div>
          <h2 className="section-title">Napravljeno za Vašu Industriju</h2>
          <p className="section-sub" style={{ margin: '0 auto 56px' }}>
            Od malih apoteka do velikih nacionalnih lanaca — FRIGOTECH raste sa vama.
          </p>
        </div>

        <div className="industries-grid">
          {INDUSTRIES.map((ind, i) => (
            <div
              key={i}
              className="industry-card reveal"
              style={{
                animationDelay: `${i * 80}ms`,
                position: 'relative',
                overflow: 'hidden',
                borderTop: `2px solid ${ind.color}40`,
              }}
            >
              {/* Top accent glow */}
              <div style={{
                position: 'absolute', top: 0, left: '15%', right: '15%', height: 1,
                background: `linear-gradient(90deg, transparent, ${ind.color}, transparent)`,
              }} />

              {/* Icon u kružiću */}
              <div style={{
                width: 60, height: 60, borderRadius: 16,
                background: `rgba(${ind.color === '#00e5ff' ? '0,229,255' : ind.color === '#4fc3f7' ? '79,195,247' : ind.color === '#b39ddb' ? '179,157,219' : ind.color === '#4ade80' ? '74,222,128' : ind.color === '#fbbf24' ? '251,191,36' : '244,114,182'},0.1)`,
                border: `1px solid ${ind.color}30`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 28, margin: '0 auto 16px',
              }}>
                {ind.icon}
              </div>

              <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--text)', marginBottom: 8 }}>{ind.name}</div>
              <div style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.5 }}>{ind.desc}</div>

              {/* Bottom tag */}
              <div style={{
                marginTop: 16, display: 'inline-block',
                fontSize: 10, padding: '3px 10px', borderRadius: 100,
                background: `${ind.color}15`, border: `1px solid ${ind.color}30`,
                color: ind.color, fontWeight: 600, letterSpacing: '0.5px',
              }}>AKTIVNO</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}