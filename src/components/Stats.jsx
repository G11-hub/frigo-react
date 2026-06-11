const STATS = [
  { num: '24/7', label: 'Neprekidan monitoring', icon: '🟢', sub: 'Svaka komora, u svakom trenutku' },
  { num: '< 1s', label: 'Alarm reakcija', icon: '🔔', sub: 'Pre nego što dođe do štete' },
  { num: '100+', label: 'Uređaja u mreži', icon: '📡', sub: 'Jedan kontrolni centar' },
  { num: 'PDF/CSV', label: 'HACCP Izveštaji', icon: '📄', sub: 'Spreman za inspekciju jednim klikom' },
  { num: 'iOS & Android', label: 'Mobilni pristup', icon: '📱', sub: 'Kontrola sa svakog uređaja' },
  { num: '100%', label: 'Digitalna evidencija', icon: '✅', sub: 'Bez papira, bez grešaka' },
]

export default function Stats() {
  return (
    <section
      className="py-section"
      style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(0,229,255,0.04) 0%, transparent 70%)' }}
    >
      <div className="section-inner">
        <div className="reveal text-center">
          <div className="section-tag">Zašto Frigotech</div>
          <h2 className="section-title">Monitoring koji radi za vas</h2>
          <p className="section-sub" style={{ margin: '0 auto 56px' }}>
            Konkretni rezultati za hladnjače, restorane i prehrambenu industriju — ne obećanja.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 20,
          maxWidth: 1100,
          margin: '0 auto',
        }}>
          {STATS.map((s, i) => (
            <div
              key={i}
              className="reveal"
              style={{
                animationDelay: `${i * 80}ms`,
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(0,229,255,0.12)',
                borderRadius: 16,
                padding: '28px 24px',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                transition: 'border-color 0.3s, transform 0.3s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(0,229,255,0.35)'
                e.currentTarget.style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(0,229,255,0.12)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              {/* Top accent */}
              <div style={{ position: 'absolute', top: 0, left: '20%', right: '20%', height: 1, background: 'linear-gradient(90deg, transparent, rgba(0,229,255,0.6), transparent)' }} />

              <div style={{ fontSize: 28, marginBottom: 12 }}>{s.icon}</div>

              <div style={{
                fontSize: 'clamp(22px, 3vw, 32px)',
                fontWeight: 700,
                fontFamily: 'var(--mono)',
                background: 'linear-gradient(135deg, var(--cyan), var(--blue))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                lineHeight: 1.1,
                marginBottom: 6,
              }}>{s.num}</div>

              <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text)', marginBottom: 4 }}>{s.label}</div>
              <div style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.4 }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}